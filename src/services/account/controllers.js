import md5 from 'md5';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtSecret';

import Account from './model';

export const getAllAccounts = (req, res) => {
    Account.findAll({}).then((data, err) => {
        if (err) return res.send({ err });
        res.send(data);
    });
};

export const login = (req, res) => {
    console.log('-AnhNT-login', req.body);
    if (!req.body.Username || !req.body.Password || !req.body.HoTen) {
        return res.send({ status: 0, message: 'Bạn chưa nhập đầy đủ thông tin!' });
    }
    Account.findOne({
        where: {
            Username: req.body.Username,
            Password: md5(req.body.Password),
        },
    }).then((data, err) => {
        if (err) res.send('Err');
        if (data === null) {
            return res.send({ status: 0, message: 'Incorrect username or password!' })
        } else {
            const userData = {
                ID: data.ID,
                Username: data.Username,
                Hoten: data.Hoten,
                DienThoai: data.DienThoai,
                Email1: data.Email1,
                Email2: data.Email2,
                DiaChi: data.DiaChi,
            };
            const token = jwt.sign({
                userData,
            }, jwtSecret.jwtSecret);
            req.session.token = token;
            console.log('decode >>>>>>>', jwt.verify(token, jwtSecret.jwtSecret));
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

export const edit = (req, res) => {
    Account.findOne({
        where: {
            ID: req.params.ID,
        },
    }).then((user, err) => {
        if (err) return res.send({ err });
        if (user === null) {
            return res.send({ status: 0, message: 'Cannot update userdata!' })
        } else {
            Account.update( 
                { ...req.body, },
                { where: { ID: req.params.ID } }
            ).then((data, error) => {
                if (error) res.send({ err: error });
                res.send({ status: 1, message: 'Update up success!', data });
            });
        }
    });
};