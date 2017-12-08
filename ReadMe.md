Cài đặt và Khởi động:
npm install
npm start
địa chỉ hoạt động: localhost:3000
_______________________________________________________________________
_______________________________________________________________________

login: /v1/account/login
req.body = {
    username,
    password,
}
_______________________________________________________________________
_______________________________________________________________________

create benhnhan: /v1/benhnhan/create
req.body = {
    MaSo,
    MaHoSo,
    thuocTinhCanTao: giaTri,
    ...
}

edit benhnhan: /v1/benhnhan/edit/:MaSo
req.body = {
    thuocTinhCanEdit: giaTri,
    ...
}
_______________________________________________________________________
_______________________________________________________________________

create tieusuykhoa: /v1/tieusuykhoa/create
req.body = {
    MaSo,
    thuocTinhCanTao: 1/0/null,
    ...
}

edit tieusuykhoa: /v1/tieusuykhoa/edit/:MaSo
req.body = {
    thuocTinhCanEdit: giaTri,
    ...
}
_______________________________________________________________________
_______________________________________________________________________

create tieusunhakhoa: /v1/tieusunhakhoa/create
req.body = {
    MaSo,
    thuocTinhCanTao: 1/0/null,
    ...
}

edit tieusunhakhoa: /v1/tieusunhakhoa/edit/:MaSo
req.body = {
    thuocTinhCanEdit: giaTri,
    ...
}
