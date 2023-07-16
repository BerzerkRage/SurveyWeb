export class Params {
    public urlBase:string;

    public urlMusicStyleApiService:string;
    public urlSurveyApiService:string;

    constructor() {
        this.urlBase = "http://localhost:8080/Survey";

        this.urlMusicStyleApiService = "/api/musicstyle";
        this.urlSurveyApiService = "/api/survey-music";
    }

}