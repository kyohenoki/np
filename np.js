console.log("hey");
var tl = "abcdefghijklmnopqrstuvwxyz";
var nl = "1234567890";
var il = 16;
var id = "";
while (il > id.length) {
    var rn = random() % 2;
    if (rn == 1) {
        rn = random() % 36;
        id += tl[rn];
    }
    else {
        rn = random() % 10;
        id += nl[rn];
    }
    if (il == id.length) {
        console.log(id);
    }
}
function random() {
    // ChatGPT
    // セキュアな乱数を生成
    var array = new Uint32Array(1);
    crypto.getRandomValues(array);
    // console.log(array[0]);
    // Me
    return (array[0]);
}
