import Sequelize from 'sequelize';
import dentistassistant from '../../config/connectDB';

const TieuSuNhaKhoa = dentistassistant.define('TieuSuNhaKhoa', {
    ID: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            len: [0, 18],
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
    HoiMieng: {
        type: Sequelize.BOOLEAN,
    },
    ChayMauNuou: {
        type: Sequelize.BOOLEAN,
    },
    BenhLyNhaChu: {
        type: Sequelize.BOOLEAN,
    },
    NghienRang: {
        type: Sequelize.BOOLEAN,
    },
    LyDoDenKham: {
        type: Sequelize.STRING,
    },
    ThuocDaSuDung: {
        type: Sequelize.STRING,
    },
});

export default TieuSuNhaKhoa;

