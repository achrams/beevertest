/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/
function jumlahTabungan(_listHarga, _history) {
    // Write your code here
    var arr = _history.split('.');
    var harian = {};
    var res = {};
    res['TotalTabungan'] = 0;
    arr.forEach(function (el) {
        harian[el.split('-')[0]] = el.split('-')[1].split(',');
    });
    var _loop_1 = function (i) {
        console.log(harian[i]);
        res[i] = 10000;
        var _loop_2 = function (x) {
            hargaMakanan.forEach(function (el) {
                if (el.nama == harian[i][x]) {
                    res[i] -= el.harga;
                    res['TotalTabungan'] += res[i];
                }
            });
        };
        for (var x in harian[i]) {
            _loop_2(x);
        }
    };
    for (var i in harian) {
        _loop_1(i);
    }
    return res;
}
var hargaMakanan = [
    {
        nama: "ayam",
        harga: 5000
    },
    {
        nama: "nasi",
        harga: 2000
    },
    {
        nama: "cola",
        harga: 1000
    },
    {
        nama: "chiki",
        harga: 1500
    },
    {
        nama: "hotdog",
        harga: 3000
    },
    {
        nama: "aqua",
        harga: 2000
    }
];
var historyPembelian = "Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi";
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
