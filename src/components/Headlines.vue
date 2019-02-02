<template>
    <ul>
        <li v-for="(story, index) of stories()"
            v-bind:key="index">
            <h3>{{story.headline}}</h3>
            <p>{{story.body}}</p>
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import Language from '@/lib/languageEngine';

@Component({
    computed: {
        ...mapState(['parliament']),
        ...mapGetters(['partyByID', 'diffResult']),
    },
})
export default class Headlines extends Vue {
    public stories = () => {
        const results: Results = this.$store.state.parliament;
        const stories: Array<Story|null> = [
            this.winnerStory(results),
            this.loserStory(results),
            this.aboveThresholdStory(results),
            this.belowThresholdStory(results),
            this.identicalStory(results),
        ];

        return stories.filter((story) => {
            return story !== null;
        }).sort((a, b) => {
            return b!.newsValue - a!.newsValue;
        }).slice(0, 4);
    }

    private winnerStory = (results: Results): Story | null => {
        const compare = this.$store.state.compare;
        const partyByID = this.$store.getters.partyByID;

        const winnerId = Object.keys(results).filter((partyID) => {
            return partyID !== 'other';
        }).sort((a, b) => {
            const diff = (partyID: string) => {
                return results[partyID].percentage - compare[partyID].percentage;
            };
            return diff(b) - diff(a);
        })[0];

        const party = partyByID(winnerId);
        const result = results[winnerId];
        const delta = result.percentage - compare[winnerId].percentage;

        // There's no winner if everyone moves back (if "Other" is moved ahead)…
        if (delta <= 0) { return null; }

        const partyName = party.name;
        const deltaString = Language.numberFormatter(delta);
        let headlines: string[] = [];
        let bodies: string[] = [];
        if (delta > 1) {
            headlines = [
                `Kraftig økning for ${partyName}`,
                `Sterk økning for ${partyName}`,
                `${partyName} øker kraftig`,
                `${partyName} vokser kraftig`,
                `Knalltall for ${partyName}`,
                `Sterk vekst for ${partyName}`,
            ];
            bodies = [
                `${partyName} går frem ${deltaString} prosentpoeng, og dermed
                den største fremgangen på Stortinget.`,

                `En svært god måling for ${partyName}, som går frem
                ${deltaString} prosentpoeng, og får med det den største
                fremgangen av alle partiene på Stortinget.`,

                `Dette vil være et svært godt resultat for ${partyName}, med en
                oppgang på ${deltaString} pp.`,
            ];
        } else if (delta < .2) {
            headlines = [
                `Svakt fremover for ${partyName}`,
                `${partyName} øker mest`,
                `${partyName} øker noe`,
                `Svak økning for ${partyName}`,
            ];
            bodies = [
                `Fremgang for ${partyName}, som går opp med ${deltaString}
                prosentpoeng, som er den største økningen blant partiene på
                Stortinget.`,

                `En god måling for ${partyName}, som går frem ${deltaString}
                prosentpoeng.`,

                `Dette vil være et godt resultat for ${partyName}, med en
                oppgang på ${deltaString} pp.`,
            ];
        } else {
            headlines = [
                `Liten økning for ${partyName}`,
                `${partyName} øker mest`,
            ];
            bodies = [
                `I en måling uten de store økningene, er det likevel
                ${partyName} går mest frem med ${deltaString} prosentpoeng.`,

                `${partyName} øker mest, med ${deltaString} prosentpoeng, til
                ${result.percentage}%.`,

                `Med en økning på ${deltaString} poeng, er det ${partyName} som
                er vinneren i denne målingen, dog ingen kan sies å ha gjort
                spesielt store hopp siden forrige gang her.`,
            ];

        }

        const headline = headlines[Math.floor(Math.random() * headlines.length)];
        const body = bodies[Math.floor(Math.random() * bodies.length)];
        const newsValue = delta * 10;

        return {headline, body, newsValue};
    }
    private loserStory = (results: Results): Story | null => {
        const compare = this.$store.state.compare;
        const partyByID = this.$store.getters.partyByID;

        const loserId = Object.keys(results).filter((partyID) => {
            return partyID !== 'other';
        }).sort((a, b) => {
            const diff = (partyID: string) => {
                return results[partyID].percentage - compare[partyID].percentage;
            };
            return diff(a) - diff(b);
        })[0];

        const party = partyByID(loserId);
        const result = results[loserId];
        const delta = compare[loserId].percentage - result.percentage;

        // There's no winner if everyone moves back (if "Other" is moved ahead)…
        if (delta <= 0) { return null; }

        const partyName = party.name;
        const deltaString = Language.numberFormatter(delta);
        let headlines: string[] = [];
        let bodies: string[] = [];
        if (delta > 1) {
            headlines = [
                `Kraftig fall for ${partyName}`,
                `${partyName} i fritt fall`,
                `${partyName} faller kraftig`,
                `Svært svakt for ${partyName}`,
                `Skrekktall for ${partyName}`,
                `Katastrofetall for ${partyName}`,
            ];
            bodies = [
                `${partyName} faller ${deltaString} prosentpoeng til
                ${result.percentage}. Det dramatiske fallet er størst av
                partiene på Stortinget.`,

                `En svært dårlig måling for ${partyName}, som går tilbake
                ${deltaString} prosentpoeng, `,

                `Dette vil være et svært dårlig, ikke bra resultat for
                ${partyName}, med en tilbakegang på ${deltaString} pp.`,
            ];
        } else if (delta < .2) {
            headlines = [
                `Svakt fall for ${partyName}`,
                `${partyName} faller mest`,
                `${partyName} faller noe`,
                `Svak tilbakegang for ${partyName}`,
            ];
            bodies = [
                `Tilbakegang for ${partyName}, som går ned med ${deltaString}
                prosentpoeng, som er det største fallet blant partiene på
                Stortinget.`,

                `En dårlig måling for ${partyName}, som går tilbake
                ${deltaString} prosentpoeng.`,

                `Dette vil være et dårlig resultat for ${partyName}, med en
                tilbakegang på ${deltaString} pp.`,
            ];
        } else {
            headlines = [
                `Tilbake for ${partyName}`,
                `${partyName} svekkes mest`,
            ];
            bodies = [
                `I en måling uten de store fallene, er det likevel
                ${partyName} går tilbake med ${deltaString} prosentpoeng.`,

                `${partyName} faller mest, med ${deltaString} prosentpoeng, til
                ${result.percentage}%.`,

                `Med et fall på ${deltaString} poeng, er det ${partyName} som
                er taperen i denne målingen.`,
            ];

        }

        const headline = headlines[Math.floor(Math.random() * headlines.length)];
        const body = bodies[Math.floor(Math.random() * bodies.length)];
        const newsValue = delta * 10;

        return {headline, body, newsValue};
    }
    private aboveThresholdStory = (results: Results): Story | null => {
        const compare = this.$store.state.compare;
        const partyByID = this.$store.getters.partyByID;
        const threshold = this.$store.state.threshold;

        const thresholdMovers = Object.keys(results).filter((partyID) => {
            const oldResult = compare[partyID].percentage;
            const newResult = results[partyID].percentage;
            return oldResult < threshold && newResult > threshold;
        }).map((partyID) => {
            return partyByID(partyID).name;
        });

        if (thresholdMovers.length === 0) { return null; }

        const parties = [
            thresholdMovers.slice(0, -1).join(', '),
            thresholdMovers.slice(-1)[0],
            ].join(thresholdMovers.length < 2 ? '' : ' og ');

        return {
            headline: `${parties} over sperregrensen`,
            body: `${thresholdMovers.length > 1 ? 'Både ' : ''}${parties} er over sperregrensen.`,
            newsValue: 40 * thresholdMovers.length,
        };

    }

    private belowThresholdStory = (results: Results): Story | null => {
        const compare = this.$store.state.compare;
        const partyByID = this.$store.getters.partyByID;
        const threshold = this.$store.state.threshold;

        const thresholdMovers = Object.keys(results).filter((partyID) => {
            const oldResult = compare[partyID].percentage;
            const newResult = results[partyID].percentage;
            return oldResult > threshold && newResult < threshold;
        }).map((partyID) => {
            return partyByID(partyID).name;
        });

        if (thresholdMovers.length === 0) { return null; }

        const parties = [
            thresholdMovers.slice(0, -1).join(', '),
            thresholdMovers.slice(-1)[0],
            ].join(thresholdMovers.length < 2 ? '' : ' og ');

        return {
            headline: `${parties} faller under sperregrensen`,
            body: `${thresholdMovers.length > 1 ? 'Både ' : ''}${parties} er nå under sperregrensen.`,
            newsValue: 40 * thresholdMovers.length,
        };

    }

    private identicalStory = (results: Results): Story | null => {
        const compare = this.$store.state.compare;
        const changes = Object.keys(results).filter((partyID) => {
            return results[partyID].percentage !== compare[partyID].percentage;
        });

        if (changes.length === 0) {
            return {
                headline: 'Intet nytt fra tallfronten',
                body: 'Juster resultatene over, for å få realtidsanalyse av de nye resultatene her.',
                newsValue: 0,
            };
        } else { return null; }
    }

}
</script>

<style lang="sass" scoped>
    ul
        list-style: none
        width: 50rem
        margin: 0
        padding: 0
    li
        margin-bottom: 4rem
    h3
        font-family: 'Grifo M'
        font-size: 2.5rem
        margin: 0
</style>
