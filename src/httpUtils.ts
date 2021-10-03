const protocolPattern = new RegExp(/(?:http:\/\/)|(?:https:\/\/)/g);

function removeParams(url: string): string {
    return url.split("?")[0];
}

function removeProtocol(url: string): string {
    return url.replace(protocolPattern, "");
}

export function path(url: string): string {
    const urlParts: string[] = removeProtocol(removeParams(url)).split("/");
    urlParts.shift();
    return "/" + urlParts.join("/");
}