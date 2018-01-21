# ethminer-http-api

> A simple http api for ethminer

## Install

```bash
npm i -g ethminer-http-api
```

## Usage

```bash
PORT=8888 ETHMINER_PORT=3000 ETHMINER_HOST=localhost ehtminer-http-server
```
The http server will listen on PORT and communicate with `ethminer` at `ETHMINER_HOST` on `ETHMINER_PORT`.

Note that `ethminer` must be started with the `--api-port` option. (`ethminer --api-port 3000 [...]`)
