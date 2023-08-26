import { createServer } from "node:http";

import { createProxyServer } from "httpxy";

const proxy = createProxyServer({});

const handleProxy = async (req, res) => {
    try {
        await proxy.web(req, res, {
            target: "http://localhost:3001/api",
        });
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end("Proxy error: " + error.toString());
    }
}

const server = createServer(async (req, res) => {
    if (req.url.startsWith("/api")) {
        handleProxy(req, res)
    }else{
        res.statusCode = 200;
        res.end("server_path: "+ req.url)
    }

});
server.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
});
