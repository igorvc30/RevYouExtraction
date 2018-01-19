import { Institution } from "./institution";

export class Project {
    reviewType : string;
    key:string;
    title:string;
    description:string;
    institution : Institution;

    constructor(){
        this.institution = new Institution();
    }
}
