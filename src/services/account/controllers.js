// import md5 from 'md5';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtSecret';
var jwtDecode = require('jwt-decode');

import Account from './model';

export const getAllAccounts = (req, res) => {
    Account.findAll({
        attributes: ['ID', 'Username', 'HoTen', 'DienThoai', 'Email1', 'Email2', 'role'],
        order: [['createdAt', 'DESC']]
    }).then((data, err) => {
        if (err) return res.send({ status: 0, err });
        res.send({ status: 1, data });
    });
};

export const login = (req, res) => {
    console.log('-AnhNT-login', req.body);
    if (!req.body.Username || !req.body.Password) {
        return res.send({ status: 0, message: 'Bạn chưa nhập đầy đủ thông tin!' });
    }
    Account.findOne({
        where: {
            Username: req.body.Username,
            Password: req.body.Password,
        },
    }).then((data, err) => {
        if (err) res.send('Err');
        if (data === null) {
            return res.send({ status: 0, message: 'Tên đăng nhập hoặc mật khẩu sai!' })
        } else {
            const userData = {
                ID: data.ID,
                Username: data.Username,
                HoTen: data.HoTen,
                DienThoai: data.DienThoai,
                Email1: data.Email1,
                Email2: data.Email2,
                DiaChi: data.DiaChi,
                role : data.role
            };
            const token = jwt.sign({
                userData,
            }, jwtSecret.jwtSecret);
            req.session.token = token;
            req.session.role  = userData.role;
            res.send({
                status: 1,
                token,
            });
        }
    });
};

export const signup = (req, res) => {
    if (!req.body.Username || !req.body.Password) {
        return res.send({ status: 0, message: 'Bạn chưa nhập Username hoặc Password' });
    }
    Account.findOne({
        where: {
            Username: req.body.Username,
        },
    }).then((user, err) => {
        if (err) return res.send({ err });
        if (user !== null) {
            res.send({ status: 0, message: 'Username is existed!' })
        } else {
            Account.create({
                ...req.body,
                Password: md5(req.body.Password),
            }).then((data, error) => {
                if (error) res.send({ err: error });
                res.send({ status: 1, message: 'Sign up success!', data });
            });
        }
    });
};
// sửa thông tin dựa vào ID
export const edit = (req, res) => {
    Account.findOne({
        where: {
            ID: req.params.ID,
            Password: req.body.confirmPassword,
        },
    }).then((user, err) => {
        if (err) return res.send({ err });
        if (user === null) {
            return res.send({ status: 0, message: 'Sai mật khẩu!' });
        } else {
            Account.update( 
                { ...req.body },
                { where: { ID: req.params.ID } }
            ).then((data, error) => {
                if (error) res.send({ err: error });
                Account.findOne({
                    where: { ID: req.params.ID },
                }).then((data, err) => {
                    if (err) res.send('Err');
                    if (data === null) {
                        return res.send({ status: 0, message: 'Có lỗi xảy ra!' })
                    } else {
                        const userData = {
                            ID: data.ID,
                            Username: data.Username,
                            HoTen: data.HoTen,
                            DienThoai: data.DienThoai,
                            Email1: data.Email1,
                            Email2: data.Email2,
                            DiaChi: data.DiaChi,
                            role : data.role
                        };
                        const token = jwt.sign({
                            userData,
                        }, jwtSecret.jwtSecret);
                        res.send({
                            status: 1,
                            token,
                            message: 'Cập nhật thành công!',
                        });
                    }
                });
            });
        }
    });
};

export const changeRole = (req, res) => {
    Account.findOne({
        attributes: [ 'role' ],
        where: {
            Username: req.body.Username,
            Password: req.body.Password,
        },
    }).then((data, err) => {
        if (err) return res.send({ status: 0, message: 'Lỗi!' });
        (data && data.role === "admin")
        ? Account.update(
            { role: req.body.role },
            { where: { ID: req.body.ID } }
        ).then((data, err) => {
            if (err) return res.send({ status: 0 });
            return res.send({ status: 1 });
        })
        : res.send({ status: 0, message: 'Xác thực thất bại!' })
    });
}

export const requireRole = (roles) => (req, res, next) => {
    let userData = req.body.token;
    let decoded = jwtDecode(userData);
    if (req.body.token && (decoded.userData.role === 'admin'|| decoded.userData.role === roles)){
        next();
    } else {
        res.send({ status : 0, message: 'Not authenticate'});
    }
}

export const permission = (req, res) => {
    Account.findOne({
        where: {
            Username: req.body.Username,
        },
    }).then((user, err) => {
        if (err) return res.send({ err });
        if (user === null) {
            return res.send({ status: 0, message: 'Cannot update userdata!' })
        } else {
            Account.update( 
                { ...req.body, },
                { where: { Username: req.body.Username } }
            ).then((data, error) => {
                if (error) res.send({ err: error });
                res.send({ status: 1, message: 'Update up success!' });
            });
        }
    });
}