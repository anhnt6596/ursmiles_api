import BenhNhan from './model';
var jwtDecode = require('jwt-decode');

// import sequelize from 'sequelize';

export const getAll = (req, res) => {
    BenhNhan.findAll({}).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
};

export const getByIDBacSi = (req, res) => {
    BenhNhan.findAll({
        where: { IDBacSi: req.params.IDBacSi },
        order: [['createdAt', 'DESC']]
    }).then((data, err) => {
        if (err) res.send({ status: 1, err, message: 'Có lỗi xảy ra!' });
        res.send({ status: 1, data });
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

export const requireRole = (roles) => {
    return function(req, res, next) {
        let userData = req.body.token;
        let decoded = jwtDecode(userData);
        if (req.body.token && (decoded.role === 'admin'|| decoded.role === roles)){
            next();
        } else {
            res.send({ status : 0, message: 'Not authenticate'});
        }
    }
}

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
