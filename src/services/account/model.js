import Sequelize from 'sequelize';
import dentistassistant from '../../config/connectDB';

const Account = dentistassistant.define('Account', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    Username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: {
                args: [6, 255],
                msg: 'Please enter a username with at least 6 chars.'
            }
        }
    },
    HoTen: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DienThoai: {
        type: Sequelize.STRING,
    },
    Email1: {
        type: Sequelize.STRING,
    },
    Email2: {
        type: Sequelize.STRING,
    },
    DiaChi: {
        type: Sequelize.STRING,
    }
});

export default Account;

