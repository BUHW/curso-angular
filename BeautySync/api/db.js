const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.kjgjylm.mongodb.net/?retryWrites=true&w=majority
        `);
        console.log("Conectado com sucesso")
    } catch (error) {
        console.error("Erro de conexão:", error);
    }
}

main().catch((err) => console.log("Erro de conexão: ", err))

module.exports = main;