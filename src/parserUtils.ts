const elementMatcher = new RegExp(/[ \t]*at ((?:[A-Za-z0-9$_]+\.)+)([A-Za-z0-9$_]+)\(((?:Native Method)|(?:Unknown Source)|(?:[A-Za-z0-9]+\.[A-Za-z]+:[0-9]+))\)/g);
export const errorMatcher = new RegExp(/((?:[A-Za-z0-9$_]+\.)+)([A-Za-z0-9$_]+)[\r\n]/g);
export const longErrorMatcher = new RegExp(/((?:[A-Za-z0-9$_]+\.)+)([A-Za-z0-9$_]+): (.+)[\r\n]/g);

export function lineToElement(line: string): StacktraceElement | null {
    const result: RegExpExecArray | null = elementMatcher.exec(line);
    // are you kidding me
    elementMatcher.lastIndex = 0;
    if (result == null) return null;
    return new StacktraceElement(
        result[1].slice(0, -1), result[2], (result[3] == "Native Method" || result[3] == "Unknown Source") ? null : result[3].split(":")[0],
        (result[3] == "Native Method" || result[3] == "Unknown Source") ? null : +result[3].split(":")[1],
        result[3] == "Native Method"
    );
}

export class Stacktrace {
    traceClass: string;
    traceError: string | null;
    traceElements: StacktraceElement[] = [];

    constructor(traceClass: string, traceError: string | null) {
        this.traceClass = traceClass;
        this.traceError = traceError;
    }
}

export class StacktraceElement {
    elementClass: string;
    elementMethod: string;
    elementFile: string | null;
    elementFileLine: number | null;
    isNative: boolean;

    constructor(elementClass: string, elementMethod: string, elementFile: string | null, elementFileLine: number | null, isNative: boolean) {
        this.elementClass = elementClass;
        this.elementMethod = elementMethod;
        this.elementFile = elementFile;
        this.elementFileLine = elementFileLine;
        this.isNative = isNative;
    }
}