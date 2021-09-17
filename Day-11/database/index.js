const Sequelize = require("sequelize");

const sequelize = new Sequelize("practice", "postgres", "123Amogh@", {
  dialect: "postgres",
  host: "localhost",
});

sequelize.sync()(async () => {
  try {
    await sequelize.authenticate();
    console.log("COnnected");
  } catch (err) {
      console.log("Unable to connect");
  }
});


module.exports=sequelize
