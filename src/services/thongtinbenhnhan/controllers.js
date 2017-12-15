import BenhNhan from '../benhnhan/model';
import TieuSuNhaKhoa from '../tieusunhakhoa/model';
import TieuSuYKhoa from '../tieusuykhoa/model';
import KhamNgoaiMat from '../khamngoaimat/model';
import KhamTrongMieng from '../khamtrongmieng/model';
import ThongTinBenhNhan from './model';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtSecret';

export const create = (req, res) => {
    // const { MaHoSo, MaSo, NgayBatDau, BacSi, Ho, Ten, NgaySinh, GioiTinh, DanToc,
    //     DiaChi, DienThoai, Email, Facebook, Twitter, Anh } = req.body;
    let MaSo;
    BenhNhan.findOne({
        limit: 1,
        attributes: [ 'MaSo' ],
        order: [['createdAt', 'DESC']]
    }).then((entries, err) => {
        if (entries.dataValues.MaSo) {
            const lastMaSo = entries.dataValues.MaSo;
            MaSo = Number(lastMaSo) + 1;
            MaSo = ('000000000000' + MaSo).slice(-12);
        } else {
            MaSo = '000000000';
        }
        if (!req.body.MaHoSo || !req.body.Ho || !req.body.Ten) return res.json({ status: 0, message: 'Bạn nhập thiếu thông tin!' });
        TieuSuNhaKhoa.create({ MaSo });
        TieuSuYKhoa.create({ MaSo });
        KhamNgoaiMat.create({ MaSo });
        KhamTrongMieng.create({ MaSo });
        BenhNhan.create({
            ...req.body,
            MaSo,
        }).then((data, err) => {
            if (err) res.json({ err });
            res.send({ status: 1, data, message: `Tạo thành công với Mã số: ${MaSo}` });
        });
    });
};

export const getByMaSo = (req, res) => {
    ThongTinBenhNhan.findOne({
        where: { MaSo: req.params.MaSo }
    }).then((data, err) => {
        const decode = jwt.verify(req.body.token, jwtSecret.jwtSecret);
        console.log('-AnhNT-', decode);
        if (decode.userData.role === 'admin' || data.IDBacSi === decode.userData.ID) {
            res.send({ status: 1, data });
        } else {
            res.send({ status: 0, message: 'Bạn không có quyền xem hồ sơ này!' });
        }
    });
}

export const editByMaSo = (req, res) => {
    const p1 = BenhNhan.update(
        { ...req.body },
        { where: { MaSo: req.body.MaSo } }
    );
    const p2 = TieuSuNhaKhoa.update(
        { ...req.body },
        { where: { MaSo: req.body.MaSo } }
    );
    const p3 = TieuSuYKhoa.update(
        { ...req.body },
        { where: { MaSo: req.body.MaSo } }
    );
    Promise.all([p1, p2, p3]).then((values, err) => { 
        if (err) return res.send({ status: 0, message: 'Lỗi không xác định' });
        res.send({ status: 1, message: 'Cập nhập thành công'});
    });
}

// export const checkBacSi = (req, res, next) => {
//     console.log('-AnhNT-', jwt.verify(req.body.token, jwtSecret.jwtSecret));
//     next();
// }
