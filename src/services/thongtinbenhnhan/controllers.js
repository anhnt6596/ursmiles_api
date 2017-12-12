import BenhNhan from '../benhnhan/model';
import TieuSuNhaKhoa from '../tieusunhakhoa/router';
import TieuSuYKhoa from '../tieusuykhoa/router';
import ThongTinBenhNhan from './model';

export const getByMaSo = (req, res) => {
    ThongTinBenhNhan.findOne({
        where: { MaSo: req.params.MaSo }
    }).then((data, err) => res.send(data))
}

export const editByMaSo = (req, res) => {
    // const updateBenhNhan = BenhNhan.update(
    //     { ...req.body, },
    //     { where: { MaSo: req.params.MaSo } }
    // );
    res.send('doing...');
}
