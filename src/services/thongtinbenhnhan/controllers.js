import BenhNhan from '../benhnhan/model';
import TieuSuNhaKhoa from '../tieusunhakhoa/router';
import TieuSuYKhoa from '../tieusuykhoa/router';

import { editbyMaSo as editYKhoa } from '../tieusuykhoa/controllers';
import { editbyMaSo as editNhaKhoa } from '../tieusunhakhoa/controllers';


export const getByMaSo = (req, res) => {
    console.log('-AnhNT-', req.params);
    BenhNhan.sequelize.query(`
    select *
    from BenhNhans, TieuSuNhaKhoas, TieuSuYKhoas
    where TieuSuNhaKhoas.MaSo = BenhNhans.MaSo
        and TieuSuYKhoas.MaSo = BenhNhans.MaSo
        and BenhNhans.MaSo=${req.params.MaSo};
    `)
    .then(data => res.send(data))
}

export const editByMaSo = (req, res) => {
    res.send('ngu');
}
