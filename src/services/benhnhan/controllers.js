import BenhNhan from './model';
// import sequelize from 'sequelize';

export const create = (req, res) => {
    // const { MaHoSo, MaSo, NgayBatDau, BacSi, Ho, Ten, NgaySinh, GioiTinh, DanToc,
    //     DiaChi, DienThoai, Email, Facebook, Twitter, Anh } = req.body;
    if (!req.body.MaSo || !req.body.MaHoSo) return res.json({ err: 'MaSo or MaHoSo is undefined!' })
    BenhNhan.create({
        ...req.body,
    }).then((data, err) => {
        if (err) res.json({ err });
        res.send({ status: 1, data, message: 'Tạo thành công!' });
    });
};

export const getAll = (req, res) => {
    BenhNhan.findAll({}).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
};

export const editbyMaSo = (req, res) => {
    BenhNhan.update(
        { ...req.body, },
        { where: { MASO: req.params.MaSo } }
    )
    .then((data, err) => {
        if (err) return res.send({ err });
        res.send({ status: 1, message: 'Cập nhật hồ sơ bênh nhân!' });
    })
};


// export const editbyMaSo = (req, res) => {
//     BenhNhan.sequelize.query(
//         `UPDATE BenhNhans
//         SET
//         ${req.body.NgayBatDau
//             ? 'NgayBatDau = ' + '"' + req.body.NgayBatDau + '",'
//             : ''
//         }
//         ${req.body.BacSi
//             ? 'BacSi = ' + '"' + req.body.BacSi + '",'
//             : ''
//         }
//         ${req.body.Ho
//             ? 'Ho = ' + '"' + req.body.Ho + '",'
//             : ''
//         }
//         ${req.body.Ten
//             ? 'Ten = ' + '"' + req.body.Ten + '",'
//             : ''
//         }
//         ${req.body.NgaySinh
//             ? 'NgaySinh = ' + '"' + req.body.NgaySinh + '",'
//             : ''
//         }
//         ${req.body.GioiTinh
//             ? 'GioiTinh = ' + '"' + req.body.GioiTinh + '",'
//             : ''
//         }
//         ${req.body.DanToc
//             ? 'DanToc = ' + '"' + req.body.DanToc + '",'
//             : ''
//         }
//         ${req.body.DiaChi
//             ? 'DiaChi = ' + '"' + req.body.DiaChi + '",'
//             : ''
//         }
//         ${req.body.DienThoai
//             ? 'DienThoai = ' + '"' + req.body.DienThoai + '",'
//             : ''
//         }
//         ${req.body.Email
//             ? 'Email = ' + '"' + req.body.Email + '",'
//             : ''
//         }
//         ${req.body.Facebook
//             ? 'Facebook = ' + '"' + req.body.Facebook + '",'
//             : ''
//         }
//         ${req.body.Twitter
//             ? 'Twitter = ' + '"' + req.body.Twitter + '",'
//             : ''
//         }
//         ${req.body.Anh
//             ? 'Anh = ' + '"' + req.body.Anh + '",'
//             : ''
//         }
//         ID = BenhNhans.ID
//         WHERE MaSo = ${req.params.MaSo}`
//     )
//     .then((data, err) => {
//         if (err) res.json({ err });
//         res.send(data);
//     })
// };
