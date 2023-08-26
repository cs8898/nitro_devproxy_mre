# DEV Proxy Minimal Reproducable Example

MRE for https://github.com/unjs/nitro/issues/1643

## Problem

Nitro devProxy drops basepath of proxied server (only accepts Protocol, Host and Port of URL)

### Config

```ts
{
    devProxy: {
        "/api": {
           target: "http://localhost:3001/api"
        }
    }
}
```

### Expected

```raw
http://nitro:3000/api/foo => http://server:3001/api/foo
```

### Observed

```raw
http://nitro:3000/api/foo => http://server:3001/foo
```

## MRE

### api_srv

Simple HTTP Server listening on 3001 responding with `api_path: ${req.url}`

### httpxy_mre ✔️

Simple HTTP Server elevating httpxy to server `/api` via Proxy

### nitor_mre ❌

Nitro stater sample, with devProxy
