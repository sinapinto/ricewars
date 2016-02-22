import Sequelize from 'sequelize';
import config from '../src/config';

export default new Sequelize(config.db.database,
                             config.db.username,
                             config.db.password,
                             config.db.config);
