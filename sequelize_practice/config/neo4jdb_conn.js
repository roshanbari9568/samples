var neo4j = require("neo4j");
require('dotenv').config();
const { NEO4J_HOST, NEO4J_PORT } = process.env;
const logger = require('../services/winston');

function connectNeo4j() {
  //Example : db = new neo4j.GraphDatabase("http://localhost:7474/");
  var db = new neo4j.GraphDatabase(`http://${NEO4J_HOST}:${NEO4J_PORT}/`);
  // console.log(db);
  if (!db) {
    logger.debug("Neo4j Not Connected 🚨")
  } else {
    logger.debug("Neo4j Connected ✅");
  }
  return db;
}
module.exports = connectNeo4j();