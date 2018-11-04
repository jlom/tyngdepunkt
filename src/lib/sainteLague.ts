/**
 * Takes an electoral district and calculate its seats, based on the
 * [Webster/Sainte-Laguës method](https://en.wikipedia.org/wiki/Webster/Sainte-Laguë_method).
 *
 * Using the `initDivisor`, the function allows for the modified methods used
 * in Norway and Sweden as well, changing the quotient formula for parties that
 * have not yet been allocated any seats
 *
 * @param district The district you wish to update
 * @param initDivisor The initial divisor of the sainteLaguë method
 * @returns District with updated `results`
 */
const sainteLague = (district: District, initDivisor: number = 1): District => {
    if (!district || !district.results) { return district; }

    const parties = Object.keys(district.results);
    const results = Object.values(district.results);

    // Make a nice temporary results-array where we keep the partyID as well.
    const mappedResults = results.map((result: Result, index: number) => {
        // Reset the seat count
        result.seats = 0;
        return {
            party: parties[index],
            result,
        };
    });

    // The actual seat allocation
    for (let seats = district.seats; seats > 1; seats--) {
        // Here lives Sainte-Laguë
        const calculate = (result: Result) => {
            const votes = (result.percentage * 10000) / initDivisor;
            const divisor = result.seats === 0 ? initDivisor : (2 * result.seats) + 1;
            return votes / divisor;
        };

        // And the winner is…
        const winner = mappedResults.sort((a: any, b: any) => {
            const aResult = calculate(a.result);
            const bResult = calculate(b.result);
            return bResult - aResult;
        })[0];

        // Congratulations!
        winner.result.seats++;
    }

    // Put the results back in their place in the district
    mappedResults.forEach((result: any) => {
        if (district.results === undefined) { return; }
        district.results[result.party] = result.result;
    });

    return district;
};

export default sainteLague;
