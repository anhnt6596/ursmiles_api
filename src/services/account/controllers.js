// import md5 from 'md5';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtSecret';

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
    const confirmPassword = jwt.verify(req.body.confirmPassword, jwtSecret.jwtSecret);
    Account.findOne({
        where: {
            ID: req.params.ID,
            Password: confirmPassword.token,
        },
    }).then((user, err) => {
        if (err) return res.send({ err });
        if (user === null) {
            return res.send({ status: 0, message: 'Sai mật khẩu!' });
        } else {
            const NewPassword = req.body.isChangePassword
            ? jwt.verify(req.body.Password, jwtSecret.jwtSecret)
            : confirmPassword;
            Account.update( 
                {
                    ...req.body,
                    Password: NewPassword.token,
                },
                { where: { ID: req.params.ID } }
            ).then((data, error) => {
                if (error) res.send({ err: error });
                Account.findOne({
                    where: {
                        ID: req.params.ID,
                    },
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
                        req.session.token = token;
                        req.session.role  = userData.role;
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
    const auth = jwt.verify(req.body.token, jwtSecret.jwtSecret);
    Account.findOne({
        attributes: [ 'role' ],
        where: {
            Username: auth.Username,
            Password: auth.Password,
        },
    }).then((data, err) => {
        if (err) return res.send({ status: 0 });
        data && data.role === "admin"
        && Account.update(
            { role: req.body.role },
            { where: { ID: req.body.ID } }
        ).then((data, err) => {
            if (err) return res.send({ status: 0 });
            return res.send({ status: 1 });
        });
    });
}

export const requireRole = (roles) => {
    return (req, res, next) => {
        if (req.session.token && req.session.role === roles) {
            next();
        } else {
            res.send({ status : 0, message: 'Not authenticate'});
        }
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