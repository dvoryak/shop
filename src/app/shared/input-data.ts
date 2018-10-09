export class InputData {

    public getData(): Array<string> {
        const out: Array<string> = [];

        for (let i = 65; i <= 90; i++) {
            out.push(String.fromCharCode(i));
        }

        for (let i = 101; i <= 132; i++) {
            out.push(String.fromCharCode(i));
        }

        for (let i = 0; i < 10; i++) {
            out.push(i.toString());
        }

        return out;
    }

}
