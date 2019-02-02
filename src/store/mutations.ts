import SainteLague from '@/lib/sainteLague';

/**
 * Extrapolate local results for every district in `state.districts`, based on a
 * passed result, and the districts weighting map.
 * *NOTE:* This also zeroes out the seat count!
 *
 * @param results The results (usually national) to extrapolate from
 * @returns The districts from state, with updated percentage results
 */
const calculateLocalResults = (state: any, results: Results): Districts => {
    const districts = JSON.parse(JSON.stringify(state.districts));
    const districtIDs = Object.keys(districts);

    const weighResults = (district: District): District => {
        const weightedDistrict = JSON.parse(JSON.stringify(district));
        weightedDistrict.results = {};
        Object.keys(results).forEach((ptyID) => {
            if (!weightedDistrict.weighing) { return; }
            const natlResult = results[ptyID].percentage;
            const weight = weightedDistrict.weighing[ptyID] || 1;
            const localResult = natlResult * weight;
            weightedDistrict.results[ptyID] = {
                percentage: localResult,
                seats: 0,
            };
        });

        return weightedDistrict;
    };

    districtIDs.forEach((id) => {
        districts[id] = weighResults(districts[id]);
    });

    return districts;
};

/**
 * Takes a Norwegian national result, estimates local results, and uses Sainte
 * Leguë to extrapolate local- and leveling seats. Then updates both the
 * districts and parliament in state.
 * @param results National results
 */
const updateNationalPct = (state: any, results: Results): void => {
    const levelingThreshold = state.threshold;

    // Get the local results
    const districts: Districts = calculateLocalResults(state, results);
    const districtIDs = Object.keys(districts);

    // Zero out the seat count
    Object.keys(results).forEach((partyID: string) => {
        results[partyID].seats = 0;
    });


    // Calculate local seats
    districtIDs.forEach((id) => {
        let district = districts[id];
        district = SainteLague(district, 1.4);

        // Sum up the seats to the national level
        Object.keys(results).forEach((partyID: string) => {
            const seats = district.results![partyID].seats || 0;
            results[partyID].seats += seats;
        });

    });

    // Calculate Norwegian leveling seats
    const levelingDistrict = calculateLevelingSeats(results, levelingThreshold);

    Object.keys(results).forEach((partyID) => {
        if (levelingDistrict.results![partyID]) {
            results[partyID].seats += levelingDistrict.results![partyID].seats;
            results[partyID].levelingSeats = levelingDistrict.results![partyID].seats;
        } else {
            results[partyID].levelingSeats = undefined;
        }
    });

    state.districts = districts;
    state.parliament = results;
};

export default {
    updateNationalPct,
};

/**
 * Calculate leveling seats based on national results.
 *
 * @param {Results} results
 * @param {number} levelingThreshold
 * @returns {District}
 */
function calculateLevelingSeats(results: Results, levelingThreshold: number): District {
    // @TODO: Use the actual quotients to figure out the actual distribution.
    // See: https://lovdata.no/dokument/NL/lov/2002-06-28-57/KAPITTEL_11#§11-6

    // How would the election result look if the whole country was one district?
    let nationalDistrict: District = {
        name: 'Norge',
        area: 10000,
        population: 10000,
        seats: 169,
        results: JSON.parse(JSON.stringify(results)),
    };
    nationalDistrict = SainteLague(nationalDistrict, 1);

    // Now, we remove the overrepresented parties,
    // as well as the ones under the threshold
    Object.keys(nationalDistrict.results!).forEach((partyId: string) => {
        const originalResult = results[partyId].seats;
        const thisResult = nationalDistrict.results![partyId].seats;
        const belowThreshold = results[partyId].percentage < levelingThreshold;
        if (thisResult < originalResult || belowThreshold) {
            delete nationalDistrict.results![partyId];
        }
    });

    nationalDistrict.seats = 20;
    return SainteLague(nationalDistrict, 1);
}

