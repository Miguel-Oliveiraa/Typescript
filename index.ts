// importaçao de bibliotecas
import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse } from "query-string";
import { writeFile } from "fs";
import * as url from "url";

// Definiçao de porta
const port = 5000;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    // Implementar codigo aqui
    const urlparse = url.parse(request.url ? request.url : "", true);

    let resposta;
    // receber informaçoes do usuario
    const params = parse(urlparse.search ? urlparse.search : "");

    // Criar um usuario - Atualizar um usuario
    if (urlparse.pathname == "/criar-atualizar-usuario") {
      // Salvar informacoes
      writeFile(
        `users/${params.id}.txt`,
        JSON.stringify(params),
        function (err: any) {
          if (err) throw err;
          resposta = "Usuario criado!";
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/plain");
          response.end(resposta);
        }
      );
    }
  }
);

// Execuçao
server.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
