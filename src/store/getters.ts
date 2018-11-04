/**
 * Gets the Party object from a given Party ID string.
 *
 * @param id Party ID to query
 * @returns Party object
 */
const partyByID = (state: any) => (id: string): Party | null => {
    let correct = null;
    state.parties.some((party: Party) => {
        if (party.id === id) {
            correct = party;
            return true;
        } else {
            return false;
        }
    });
    return correct;
};

/**
 * Gets the seat and percentage point difference between a given result, and
 * the result for a given party ID in the `compare`-object in state.
 *
 * @param id The Party ID to get the difference for
 * @param result The current result to compare
 * @returns A Result with the difference in both seats and percentage points
 */
const diffResult = (state: any) => (id: string, result: Result): Result => {
    return {
        percentage: Math.round((result.percentage - state.compare[id].percentage) * 10) / 10,
        seats: Math.round(result.seats - state.compare[id].seats),
    };
};

/**
 * Gets the holder of a seat per index in a hypothetical parliament, where the
 * seats are *ordered by party, not by constituency*.
 *
 * Used to draw the seat map.
 *
 * @param idx The seat index we want
 * @returns A Party-object of the holder of the virtual seat
 */
const seats = (state: any) => (idx: number): Party => {
    const parliament: Results = state.parliament;
    const parties: Party[] = state.parties;
    let seat = 1;
    const seatArray: Party[] = [];

    Object.keys(parliament).forEach((partyID: string) => {
        const seatNumber: number = parliament[partyID].seats;
        const party = parties.find((p) => p.id === partyID);
        if (!party) { return; }

        let count = 0;
        while (count < seatNumber) {
            seatArray.push(party);
            count++;
        }
        seat = seat + seatNumber;
    });

    return seatArray[idx - 1] || {
        id: 'ukjent',
        color: '#999',
        name: 'Ukjent',
    };
};

/**
 * Takes a Coalition, and returns the sum of all the coalitions seats.
 *
 * @param coalition The coalition to sum up seats for
 * @returns The number of seats for that coalition
 */
const coalitionSeats = (state: any) => (coalition: Coalition): number => {
    let reps = 0;
    coalition.parties.forEach((ptyID) => {
        reps += state.parliament[ptyID].seats;
    });
    return reps;
};

export default {
    partyByID,
    diffResult,
    seats,
    coalitionSeats,
};
