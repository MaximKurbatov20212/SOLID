class Database {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}

class MySqlDatabase extends Database {
    override connect()  {}
    override read() {}
    override write() {}
    override joinTables() {}
}

class MongoDatabase extends Database {
    override connect() {}
    override read() {}
    override write() {}

    // плохо
    override joinTables() {
         throw new Error("Нет такого метода")
    }
}
