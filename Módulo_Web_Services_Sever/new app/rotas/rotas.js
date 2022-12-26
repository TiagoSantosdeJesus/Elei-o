const faker = require('faker');

let appRouter = function (app) {
    app.get("/", function(req, res){
        res.status(200).send("Bem vindo!");
    });

    app.get("/usuario", function(req, res){
        let dados_usuario= ({
            primeiroName: faker.name.firstName(),
            ultimoName: faker.name.lasttName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(dados_usuario);
    });

    app.get("/usuario/:num", function(req, res){
        let usuarios = [];
        let num = req.params.num;

        if (isFinite(num) && num > 0){
            for (i=0; i<= num-1; i++){
                usuarios.push({
                    primeiroName: faker.name.firstName(),
                    ultimoName: faker.name.lasttName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email()
                });
            }
            res.status(200).send(usuarios);
        } else {
            res.status(400).send('Número de usuário inválido');
        }
    });

    app.post("/", function(req, res){
        const usuarios = req.body.usuarios;
        if (usuario.userName != undefined && usuario.ultimoName !=undefined && usuario.userName !=undefined && usuario.email !=undefined){
            res.status(201).send('Usuário salvo com sucesso');
        }
        else{
            res.status(400).send('Faltam campos a serem preenchidos')
        }
    });
}

module.exports = appRouter;