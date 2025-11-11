// 課題：今日の日付を取得してコンソールに出力する。
// 　　　出力フォーマット、"yyyy年mm月dd日"

// 今日の日付を変数todayにDateオブジェクトで取得する
const today= new Date();

// 変数todayよりyear、month、date をそれぞれ抽出する 
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();

// 指定フォーマットでコンソールへ出力する
console.log(year + "年" + month + "月" + date + "日");