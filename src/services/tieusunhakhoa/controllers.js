import TieuSuNhaKhoa from './model';
import { read } from 'fs';

export const getAll = (req, res) => {
    TieuSuNhaKhoa.findAll({}).then((data, err) => {
        res.send(data);
    });
};

export const create = (req, res) => {
    const { MaSo, HoiMieng, ChayMauNuou, BenhLyNhaChu, NghienRang, LyDoDenKham, ThuocDaSuDung } = req.body;
    if (!MaSo) return res.json({ err: 'MaSo is undefined!' })
    TieuSuNhaKhoa.create({
        MaSo: req.body.MaSo,
        HoiMieng:  HoiMieng?Number(HoiMieng):0,
        ChayMauNuou: ChayMauNuou?Number(ChayMauNuou):0,
        BenhLyNhaChu: BenhLyNhaChu?Number(BenhLyNhaChu):0,
        NghienRang: NghienRang?Number(NghienRang):0,
        LyDoDenKham: LyDoDenKham?Number(LyDoDenKham):0,
        ThuocDaSuDung: LyDoDenKham?Number(ThuocDaSuDung):0,
    }).then((data, err) => {
        if (err) res.json({ err });
        res.send(data);
    });
};

// export const editbyMaSo = (req, res) => {
//     TieuSuNhaKhoa.update(
//         { ...req.body, },
//         { where: { MASO: req.params.MaSo } }
//     )
//     .then((data, err) => {
//         if (err) return res.send({ err });
//         res.send({ status: 1, message: 'Cập nhật hồ sơ bênh nhân!' });
//     })
// };

export const editbyMaSo = (req, res) => {
    TieuSuNhaKhoa.sequelize.query(
        `UPDATE TieuSuNhaKhoas
        SET
        ${req.body.HoiMieng
            ? 'HoiMieng = ' + req.body.HoiMieng + ','
            : ''
        }
        ${req.body.ChayMauNuou
            ? 'ChayMauNuou = ' + req.body.ChayMauNuou + ','
            : ''
        }
        ${req.body.BenhLyNhaChu
            ? 'BenhLyNhaChu = ' + req.body.BenhLyNhaChu + ','
            : ''
        }
        ${req.body.NghienRang
            ? 'NghienRang = ' + req.body.NghienRang + ','
            : ''
        }
        ${req.body.LyDoDenKham
            ? 'LyDoDenKham = ' + '"' + req.body.LyDoDenKham + '",'
            : ''
        }
        ${req.body.ThuocDaSuDung
            ? 'ThuocDaSuDung = ' + '"' + req.body.ThuocDaSuDung + '",'
            : ''
        }
        ID = TieuSuNhaKhoas.ID
        WHERE MaSo = ${req.params.MaSo}`
    )
    .then((data, err) => {
        if (err) res.json({ err });
        res.send(data);
    })
};
