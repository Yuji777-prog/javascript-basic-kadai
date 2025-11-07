// 課題[条件分岐]

// 変数numへの代入
let num = 15;

//num = Math.floor(Math.random() * 15) + 1;
//console.log(num);

// 変数numの値が3の倍数かつ5の倍数であれば「3と5の倍数です」を出力する
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}
// 変数numの値が3の倍数であれば「3の倍数です」を出力する
else if (num % 3 === 0) {
    console.log('3の倍数です');
}
// 変数numの値が5の倍数であれば「5の倍数です」を出力する
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
// 変数numの値がいずれの条件に合致しない場合、変数numの値を出力する
else {
    console.log(num);
}