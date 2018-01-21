const net = require('net');

module.exports = function (cmd) {

  return new Promise((resolve, reject) => {
    let client = new net.Socket();
    client.connect(process.env.ETHMINER_PORT || 3000, process.env.ETHMINER_HOST || '127.0.0.1', _ => {
      client.write(JSON.stringify({
        id: 0,
        jsonrpc: "2.0",
        method: cmd
      }) + '\n');
    });

    client.on('data', data => {
      resolve(JSON.parse(data))
      client.destroy(); // kill client after server's response
    });

    client.on('error', err => reject(err))
  })

}
