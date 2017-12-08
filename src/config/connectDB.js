import Sequelize from 'sequelize';
import env from 'dotenv';

env.config();

const dentistassistant = new Sequelize(process.env.DB_HOST);

export default dentistassistant;
