// export enum Method {
//     CollaborativeC = "Collaborative Comparing",
//     CollaborativeR = "Collaborative with Review",
//     Individual = "Individual"
// }

export class Extraction {
    startDate: Date;
    endDate: Date;
    method: Number;
    extractors: [String];
    decisors: [String];
    amount: Number;
    score: Number;
    studyDetails: [String];
    supportData: Boolean;
    extractionPilot: Boolean;

    constructor(){
    }

}
