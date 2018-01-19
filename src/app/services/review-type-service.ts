import { Injectable } from "@angular/core";
import { ReviewType } from "../models/review-type";


@Injectable()
export class ReviewTypeService {

    private REVIEW_TYPES : [ReviewType] = [new ReviewType("0","Not Systematic"),
    new ReviewType("1","Systematic Mapping"),
    new ReviewType("2","Systematic Review")];

    getAllReviewTypes() : [ReviewType]{
        return this.REVIEW_TYPES;
    }

    getReviewTypeName(reviewTypeCode : string) {
        return this.REVIEW_TYPES.filter(reviewType => reviewType.code == reviewTypeCode)[0].name;
    }   
}
