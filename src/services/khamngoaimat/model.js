import Sequelize from 'sequelize';
import dentistassistant from '../../config/connectDB';

const KhamNgoaiMat = dentistassistant.define('KhamNgoaiMat', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    ID_BenhNha: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    DangMat: {
        type: Sequelize.INTEGER
    },
    CungCuoi: {
        type: Sequelize.INTEGER
    },
    MatNghieng: {
        type: Sequelize.INTEGER
    },
    DuongCuoi: {
        type: Sequelize.INTEGER
    },
    DuongGiuaHamTren: {
        type: Sequelize.INTEGER
    },
    HanhlangDen: {
        type: Sequelize.INTEGER
    },
    Moi: {
        type: Sequelize.INTEGER
    },
    RanhCam: {
        type: Sequelize.INTEGER
    },
    GocMuiMoi: {
        type: Sequelize.INTEGER
    },
    DoNuouKhiCuoi: {
        type: Sequelize.FLOAT
    },
    DoLoRangCuaLucNghi: {
        type: Sequelize.FLOAT
    }
})

export default KhamNgoaiMat;