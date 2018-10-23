// export enum Method {
//     CollaborativeC = "Collaborative Comparing",
//     CollaborativeR = "Collaborative with Review",
//     Individual = "Individual"
// }

export class Extraction {
    startDate: Date;
    endDate: Date;
    method: number;
    extractors: Array<number> = [];
    decisors: [number];
    amount: number = 0;
    score: number = 0;
    studyDetails: Array<String> = [];
    supportData: Boolean;
    extractionPilot: Boolean;

    constructor(){}

}
