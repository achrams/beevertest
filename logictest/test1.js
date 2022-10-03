var words = 'beever';
// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever
var res = '';
for (var i = 0; i < words.length; i++) {
    res += words.charAt(i);
    console.log(res);
}
