declare interface Party {
    /** The ID string for the party. This is the same ID as the `partyID` key
     * on `Results` and `District.weighing`.
     * @example "mdg"
     */
    readonly id: string;
    /** The short abbreviated name of the party. Shown in the UI.
     * @example "MdG"
     */
    legend: string;
    /** The full name of the party *
     * @example "Miljøpartiet de grønne"
     */
    name: string;
    /** The theme color for the party. Either as Hex, RGB, RGBA or HSL.
     * @example "#123456"
     */
    color: string;
}

declare interface Result {
    /** The percentage of votes the party has gotten */
    percentage: number;
    /** The number of regular seats the party has. (Whole number) */
    seats: number;
    /** The number of leveling seats the party has. (Whole number) */
    levelingSeats?: number;
}

declare interface Results {
    [partyID: string]: Result;
}

declare interface District {
    /** The human-readable name of the district.
     * @example "Sogn og Fjordane"
     */
    name: string;
    /** The total area (in sq km) of the district.
     * Used to calculate seats.
     */
    area: number;
    /** The population of the district */
    population: number;
    /** The total number of seats the district has */
    seats: number;
    /** The results from the district */
    results?: Results;
    /** The degree to which each party under- or over-performes in the district,
     * compared to the nat'l average.
     */
    weighing?: {
        [partyID: string]: number | null;
    };
}

declare interface Districts {
    [districtNumber: string]: District;
}

declare interface Coalition {
    name: string;
    parties: string[];
}
