class Database {
    connect() {}
    read() {}
    write() {}
}

class SqlDB extends Database {
    joinTables() {}
}

class NoSqlDB extends Database {

}

class MySqlDatabase extends SqlDB {
    override connect()  {}
    override read() {}
    override write() {}
    override joinTables() {}
}

class MongoDatabase extends NoSqlDB {
    override connect() {}
    override read() {}
    override write() {}
}
