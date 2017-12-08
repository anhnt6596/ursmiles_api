import TieuSuYKhoa from './model';

export const getAll = (req, res) => {
    TieuSuYKhoa.findAll({}).then((data, err) => {
        res.send(data);
    });
};

export const create = (req, res) => {
    const { MaSo, DaPhauThuat, UongThuocNguaThai, HenSuyen, MauKhoDong, HoaTriLieu, XaTri, 
        BenhLyHoHap, BenhLyTieuHoa, Lao, ChoConBu, CoThai, TieuDuong, DongKinh, HuyetHuu,
        CaoHuyetAp, BenhLyTuanHoan, HIV, DiUng } = req.body;
    try {
        if (!MaSo) return res.json({ err: 'MaSo is undefined!' });
        TieuSuYKhoa.create({
            MaSo: req.body.MaSo,
            DaPhauThuat: DaPhauThuat?Number(req.body.DaPhauThuat):0,
            UongThuocNguaThai: UongThuocNguaThai?Number(UongThuocNguaThai):0,
            HenSuyen: HenSuyen?Number(HenSuyen):0,
            MauKhoDong: MauKhoDong?Number(MauKhoDong):0,
            HoaTriLieu: HoaTriLieu?Number(HoaTriLieu):0,
            XaTri: XaTri?Number(XaTri):0,
            BenhLyHoHap: BenhLyHoHap?Number(BenhLyHoHap):0,
            BenhLyTieuHoa: BenhLyTieuHoa?Number(BenhLyTieuHoa):0,
            Lao: Lao?Number(Lao):0,
            ChoConBu: ChoConBu?Number(ChoConBu):0,
            CoThai: CoThai?Number(CoThai):0,
            TieuDuong: TieuDuong?Number(TieuDuong):0,
            DongKinh: DongKinh?Number(DongKinh):0,
            HuyetHuu: HuyetHuu?Number(HuyetHuu):0,
            CaoHuyetAp: CaoHuyetAp?Number(CaoHuyetAp):0,
            BenhLyTuanHoan: BenhLyTuanHoan?Number(BenhLyTuanHoan):0,
            HIV: HIV?Number(HIV):0,
            DiUng: DiUng?Number(DiUng):0,
        }).then((data, err) => {
            if (err) res.json({ err });
            res.send(data);
        });
    } catch (error) {
        res.send(error)
    }
};

// export const editbyMaSo = (req, res) => {
//     TieuSuYKhoa.update(
//         { ...req.body, },
//         { where: { MaSo: req.params.MaSo } }
//     )
//     .then((data, err) => {
//         if (err) return res.send({ err });
//         res.send({ status: 1, message: 'Cập nhật hồ sơ bênh nhân!' });
//     })
// };

export const editbyMaSo = (req, res) => {
    TieuSuYKhoa.sequelize.query(
        `UPDATE TieuSuYKhoas
        SET
        ${req.body.DaPhauThuat
            ? 'DaPhauThuat = ' + req.body.DaPhauThuat + ','
            : ''
        }
        ${req.body.UongThuocNguaThai
            ? 'UongThuocNguaThai = ' + req.body.UongThuocNguaThai + ','
            : ''
        }
        ${req.body.HenSuyen
            ? 'HenSuyen = ' + req.body.HenSuyen + ','
            : ''
        }
        ${req.body.MauKhoDong
            ? 'MauKhoDong = ' + req.body.MauKhoDong + ','
            : ''
        }
        ${req.body.HoaTriLieu
            ? 'HoaTriLieu = ' + req.body.HoaTriLieu + ','
            : ''
        }
        ${req.body.XaTri
            ? 'XaTri = ' + req.body.XaTri + ','
            : ''
        }
        ${req.body.BenhLyHoHap
            ? 'BenhLyHoHap = ' + req.body.BenhLyHoHap + ','
            : ''
        }
        ${req.body.BenhLyTieuHoa
            ? 'BenhLyTieuHoa = ' + req.body.BenhLyTieuHoa + ','
            : ''
        }
        ${req.body.Lao
            ? 'Lao = ' + req.body.Lao + ','
            : ''
        }
        ${req.body.ChoConBu
            ? 'ChoConBu = ' + req.body.ChoConBu + ','
            : ''
        }
        ${req.body.CoThai
            ? 'CoThai = ' + req.body.CoThai + ','
            : ''
        }
        ${req.body.TieuDuong
            ? 'TieuDuong = ' + req.body.TieuDuong + ','
            : ''
        }
        ${req.body.DongKinh
            ? 'DongKinh = ' + req.body.DongKinh + ','
            : ''
        }
        ${req.body.HuyetHuu
            ? 'HuyetHuu = ' + req.body.HuyetHuu + ','
            : ''
        }
        ${req.body.CaoHuyetAp
            ? 'CaoHuyetAp = ' + req.body.CaoHuyetAp + ','
            : ''
        }
        ${req.body.BenhLyTuanHoan
            ? 'BenhLyTuanHoan = ' + req.body.BenhLyTuanHoan + ','
            : ''
        }
        ${req.body.HIV
            ? 'HIV = ' + req.body.HIV + ','
            : ''
        }
        ${req.body.DiUng
            ? 'DiUng = ' + req.body.DiUng + ','
            : ''
        }
        ID = TieuSuYKhoas.ID
        WHERE MaSo = ${req.params.MaSo}`
    )
    .then((data, err) => {
        if (err) res.json({ err });
        res.send(data);
    })
};
