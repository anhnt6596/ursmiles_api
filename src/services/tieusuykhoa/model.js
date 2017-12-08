import Sequelize from 'sequelize';
import dentistassistant from '../../config/connectDB';

const TieuSuYKhoa = dentistassistant.define('TieuSuYKhoa', {
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
    DaPhauThuat: {
        type: Sequelize.BOOLEAN,
    },
    UongThuocNguaThai: {
        type: Sequelize.BOOLEAN,
    },
    HenSuyen: {
        type: Sequelize.BOOLEAN,
    },
    MauKhoDong: {
        type: Sequelize.BOOLEAN,
    },
    HoaTriLieu: {
        type: Sequelize.BOOLEAN,
    },
    XaTri: {
        type: Sequelize.BOOLEAN,
    },
    BenhLyHoHap: {
        type: Sequelize.BOOLEAN,
    },
    BenhLyTieuHoa: {
        type: Sequelize.BOOLEAN,
    },
    Lao: {
        type: Sequelize.BOOLEAN,
    },
    ChoConBu: {
        type: Sequelize.BOOLEAN,
    },
    CoThai: {
        type: Sequelize.BOOLEAN,
    },
    TieuDuong: {
        type: Sequelize.BOOLEAN,
    },
    DongKinh: {
        type: Sequelize.BOOLEAN,
    },
    HuyetHuu: {
        type: Sequelize.BOOLEAN,
    },
    CaoHuyetAp: {
        type: Sequelize.BOOLEAN,
    },
    BenhLyTuanHoan: {
        type: Sequelize.BOOLEAN,
    },
    HIV: {
        type: Sequelize.BOOLEAN,
    },
    DiUng: {
        type: Sequelize.BOOLEAN,
    },
    
});

export default TieuSuYKhoa;

