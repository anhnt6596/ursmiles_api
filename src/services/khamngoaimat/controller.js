import KhamNgoaiMat from './model';
var jwtDecode = require('jwt-decode');

export const getAll = (req, res) => {
    KhamNgoaiMat.findAll({}).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
}

export const create = (req,res) => {
    if (!req.body.MaSo) return res.json({ err: 'MaSo is undefined!' })
    KhamNgoaiMat.create({
        ...req.body,
    }).then((data, err) => {
        if (err) res.json({ err });
        res.send({ status: 1, data, message: 'Tạo thành công!' });
    });
}

export const editbyMaSo = (req, res) => {
    console.log(req.body);
    KhamNgoaiMat.update(
        { ...req.body },
        { where: { MaSo: req.params.MaSo } }
    )
    .then((data, err) => {
        if (err) return res.send({ status: 0, message: 'Lỗi không xác định'});
        res.send({ status: 1, message: 'Cập nhật hồ sơ bênh nhân!' });
    })
}

export const getByMaSo = (req, res) => {
    KhamNgoaiMat.findOne({
        where: { MaSo: req.params.MaSo }
    }).then((data, err) => res.send(data))
}

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