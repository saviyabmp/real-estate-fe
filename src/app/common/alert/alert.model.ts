export class Alert {
    id : String;
    message : String;
    cssClass : String;

    constructor(id : String, message: String, cssClass : String) {
        this.id = id;
        this.message = message;
        this.cssClass = cssClass;
    }
}
