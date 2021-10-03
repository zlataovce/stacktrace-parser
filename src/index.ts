import {Parser} from "./parser";
import {path} from "./httpUtils";

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
    if (request.method == "POST" && path(request.url) == ("/" || "")) {
        return request.text()
            .then(e => e.split("\n"))
            .then(e => new Parser(e).parse())
            .then(e => JSON.stringify(e))
            .then(e => new Response(e, { headers: {"Content-Type": "application/json"} }))
    }
    return new Response("Not found", { status: 404 });
}
