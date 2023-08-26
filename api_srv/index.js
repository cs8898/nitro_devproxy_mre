import { createServer } from "node:http";

const target = createServer((req, res) => {
    res.statusCode = 200;
    res.end(`api_path: ${req.url}`)
});
target.listen(3001, () =>  {
    console.log("api_srv is listening on http://localhost:3001");
});
