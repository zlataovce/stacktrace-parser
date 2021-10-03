import * as utils from "./parserUtils";

export class Parser {
    lines: string[];

    constructor(lines: string[]) {
        this.lines = lines;
    }

    parse(): utils.Stacktrace[] {
        const stacks: utils.Stacktrace[] = [];
        let currentTrace: utils.Stacktrace | null = null;

        for (const ln of this.lines) {
            const s = ln.replaceAll(/[\r\n]/g, "") + "\n";
            if (currentTrace != null) {
                const elem: utils.StacktraceElement | null = utils.lineToElement(s);
                if (elem != null) {
                    currentTrace.traceElements.push(elem);
                    continue;
                } else {
                    stacks.push(currentTrace);
                    currentTrace = null;
                }
            }
            const line: RegExpExecArray | null = utils.errorMatcher.exec(s);
            if (line != null) {
                currentTrace = new utils.Stacktrace(line[1] + line[2], null);
                continue;
            }
            const longLine: RegExpExecArray | null = utils.longErrorMatcher.exec(s);
            if (longLine != null) {
                currentTrace = new utils.Stacktrace(longLine[1] + longLine[2], longLine[3]);
            }
        }
        if (currentTrace != null) {
            stacks.push(currentTrace);
            currentTrace = null;
        }
        return stacks;
    }
}