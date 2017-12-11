import BenhNhan from '../benhnhan/model';
import TieuSuNhaKhoa from '../tieusunhakhoa/router';
import TieuSuYKhoa from '../tieusuykhoa/router';


export const getByMaSo = (req,res) => {
    console.log('-AnhNT-', req.params);
    BenhNhan.sequelize.query(`
    select *
    from BenhNhans, TieuSuNhaKhoas
    where TieuSuNhaKhoas.MaSo = BenhNhans.MaSo
        
        and BenhNhans.MaSo='005';
    `)
    .then(data => res.send(data))
}

// select *
// from BenhNhans
// INNER JOIN TieuSuNhaKhoas
//     ON BenhNhans.MaSo=${req.params.MaSo}
//     AND BenhNhans.MaSo=TieuSuNhaKhoas.MaSo;