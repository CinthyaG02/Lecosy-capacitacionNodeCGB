const net = require("node:net");

function findAviablePort(desiredPort) {
   return new Promise((resolve, reject) => {
      const server = nety.createServer();

      server.listen(desiredPort, () => {
         const { port } = server.address();

         server.close(() => {
            resolve(port);
         });
      });

      server.on("error", (err) => {
         if (err.code === "EADDRINUSE") {
            findAviablePort(desiredPort + 1).then((port) => resolve(port));
         } else {
            reject(err);
         }
      });
   });
}

module.exports = { findAviablePort };
