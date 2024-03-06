const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.HOST || "localhost",
    user: process.env.DATAUSER || "root",
    password: process.env.PASSWORD || "Praveen@123",
    database: process.env.DATABASE || "food_manu",
  },
});

knex.schema
  .createTable("user", (table) => {
    table.increments("user_id").notNullable();
    table.string("username").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("phoneNo").notNullable().unique();
    table.timestamp("create_at").defaultTo(knex.fn.now());
  })
  .then((result) => {
    console.log("table user created");
  })
  .catch((err) => {
    // console.log(err);
  });

  knex.schema
  .createTable("Foodstoreg", (table) => {
    table.increments("id").notNullable();
    table.string("user_id").notNullable();
    table.string("foodtype").notNullable();
    table.string("imageURL").notNullable();
    table.string("foodName").notNullable();
    table.string("price").notNullable();
    table.string("foodinfo").notNullable();
    table.timestamp("create_at").defaultTo(knex.fn.now());
  })
  .then((result) => {
    console.log("table Foodstoreg created");
  })
  .catch((err) => {
    // console.log(err);
  });

  knex.schema
  .createTable("OrderCollection", (table) => {
    table.increments("id").notNullable();
    table.string("user_id").notNullable();
    table.string("food_id").notNullable();
    table.string("address").notNullable();
    table.string("Customer Name").notNullable();
    table.timestamp("create_at").defaultTo(knex.fn.now());
  })
  .then((result) => {
    console.log("table OrderCollection created");
  })
  .catch((err) => {
    // console.log(err);
  });
module.exports = knex;