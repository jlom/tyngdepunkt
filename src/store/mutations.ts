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
    const qualifiedParties = Object.keys(results).filter((ptyID) => {
        return results[ptyID].percentage >= 4;
    });
    let nationalDistrict: District = {
        name: 'Norge',
        area: 10000,
        population: 10000,
        seats: 20,
        results: {},
    };
    qualifiedParties.forEach((ptyID) => {
        nationalDistrict.results![ptyID] = JSON.parse(JSON.stringify(results[ptyID]));
    });
    nationalDistrict = SainteLague(nationalDistrict, 1);

    qualifiedParties.forEach((ptyID) => {
        const seats = nationalDistrict.results![ptyID].seats || 0;
        results[ptyID].seats += seats;
        results[ptyID].levelingSeats = seats;
    });

    state.districts = districts;
    state.parliament = results;
};

export default {
    updateNationalPct,
};
