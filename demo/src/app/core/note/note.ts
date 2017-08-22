export class Note {
    public voice?: string;
    public text?: string;
    constructor(
        voice?: string,
        text?: string
    ) {
        this.voice = voice;
        this.text = text;
    }
}
