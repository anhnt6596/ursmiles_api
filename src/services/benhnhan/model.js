import Sequelize from 'sequelize';
import dentistassistant from '../../config/connectDB';

const BenhNhan = dentistassistant.define('BenhNhan', {
    ID: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        validate: {
            len: [0, 18],
        },
    },
    MaHoSo: {
        type: Sequelize.STRING,
        // unique: true,
        validate: {
            len: [0, 20],
        },
    },
    MaSo: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [0, 20],
        },
    },
    NgayBatDau: {
        type: Sequelize.DATE,
    },
    BacSi: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 50],
        },
    },
    Ho: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 50],
        }
    },
    Ten: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 50],
        },
    },
    NgaySinh: {
        type: Sequelize.DATE,
    },
    GioiTinh: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 50],
        },
    },
    DanToc: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 50],
        },
    },
    DiaChi: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 200],
        },
    },
    DienThoai: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 100],
        },
    },
    Email: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 50],
        },
    },
    Facebook: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 100],
        },
    },
    Twitter: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 100],
        },
    },
    Anh: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 100],
        },
    },
});

export default BenhNhan;

