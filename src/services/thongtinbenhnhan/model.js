import Sequelize from 'sequelize';
import dentistassistant from '../../config/connectDB';

const ThongTinBenhNhan = dentistassistant.define('ThongTinBenhNhan', {
    MaHoSo: {
        type: Sequelize.STRING,
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
}, {
    timestamps: false,
});

export default ThongTinBenhNhan;

