import Sequelize from 'sequelize';
import dentistassistant from '../../config/connectDB';

const KhamTrongMieng = dentistassistant.define('KhamTrongMieng', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    MaSo: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [0, 20],
        },
    },
    Hang: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    Chi: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    RangCoi_Trai: {
        type: Sequelize.FLOAT,
    },
    RangCoi_Phai: {
        type: Sequelize.FLOAT,
    },
    RangNanh_Trai: {
        type: Sequelize.FLOAT,
    },
    RangNanh_Phai: {
        type: Sequelize.FLOAT,
    },
    KhoangHamTren: {
        type: Sequelize.FLOAT,
    },
    KhoangHamDuoi: {
        type: Sequelize.FLOAT,
    },
    LechChucNang: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    HamTren_Phai: {
        type: Sequelize.FLOAT,
    },
    HamTren_Trai: {
        type: Sequelize.FLOAT
    },
    HamDuoi_Phai: {
        type: Sequelize.FLOAT,
    },
    HamDuoi_Trai: {
        type: Sequelize.FLOAT,
    },
    CanPhu: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    CanPhu_mm: {
        type: Sequelize.FLOAT
    },
    CanChia_mm: {
        type: Sequelize.FLOAT
    },
    NuoiRangNanhHD: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    DuongCongSpee: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    CungRang: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    GiaiDoanRang: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    },
    NuouVungRCDuoi: {
        type: Sequelize.STRING,
        validate: {
            len: [0,50]
        }
    }
})

export default KhamTrongMieng;