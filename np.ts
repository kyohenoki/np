console.log("hey");

const tl: string = "abcdefghijklmnopqrstuvwxyz";
const nl: string = "1234567890";
const il: number = 16;
let id: string = "";

while (il > id.length) {
    let rn = random() % 2;
    if (rn == 1) {
        rn = random() % 36;
        id += tl[rn];
    } else {
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
    let array = new Uint32Array(1);
    crypto.getRandomValues(array);
    // console.log(array[0]);
    // Me
    return (array[0]);
}
