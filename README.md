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

### Exemples
  * Ethminer docker and ethminer-http-api docker
```bash
# Create a network
docker network create --driver=bridge -o "com.docker.network.bridge.enable_icc"="true" miners
# Start ethminer
nvidia-docker run --rm --name=miner1 --network=miners -p "3000:3000" -d anthonytatowicz/eth-cuda-miner -S eu1.ethermine.org:4444 --api-port 3000 -FS us1.ethermine.org:4444 -O 0x27b0aac47a62d63e759c8271e0370cdc021843bf.github
# Start the api
docker run --network=miners -e ETHMINER_HOST=miner1 -e ETHMINER_PORT=3000 -p "8888:8888" -d cgarnier/ethminer-http-api
```

Access to the api on `http://localhost:8888`

### Http endpoints

 * `GET /stats` - display the miner stats
 * `POST /restart` - restart the miner
