// importaçao de bibliotecas
import * as http from "http";
import * as queryString from "query-string";
import * as url from "url";
import * as fs from "fs";

// Definiçao de porta
const port = 5000;

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    // Implementar codigo aqui
    response.end(`Hello World`);
  }
);

// Execuçao
server.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
