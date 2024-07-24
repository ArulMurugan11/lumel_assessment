const dbConfig = {
  database: process.env.DB_NAME,
  username: process.env.DB_USR_NAME,
  password: process.env.DB_PASS,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DATABASE_DIALECT
}
module.exports = dbConfig
