import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {
    private _message!: string;

    test() {
        this._message = "Testing";
        return this._message;
    }
}