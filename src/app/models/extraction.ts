// export enum Method {
//     CollaborativeC = "Collaborative Comparing",
//     CollaborativeR = "Collaborative with Review",
//     Individual = "Individual"
// }

export class Extraction {
    startDate: Date;
    endDate: Date;
    method: Number;
    extractors: [Number];
    decisors: [Number];
    amount: Number;
    score: Number;
    studyDetails: Array<String> = [];
    supportData: Boolean;
    extractionPilot: Boolean;

    constructor(){}

}
