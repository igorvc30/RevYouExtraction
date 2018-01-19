export enum WebApiResponseType {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}

export class WebApiResponse {
    type : WebApiResponseType
    code : number
    description :string
    data: boolean
}
