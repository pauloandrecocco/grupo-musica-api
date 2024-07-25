import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres",
  "postgres",
  process.env.POSTGRES_PASSWORD,
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    define: {
      timestamps: true,
    },
    logging: false,
  }
);

export { sequelize };
