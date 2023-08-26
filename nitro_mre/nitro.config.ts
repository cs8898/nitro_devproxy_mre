//https://nitro.unjs.io/config
export default defineNitroConfig({
    devProxy: {
        "/api": {
           target: "http://localhost:3001/api"
        },
        "/foo": "http://localhost:3001/foo"
    }
});
