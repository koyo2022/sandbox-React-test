/**
 * const,let等の変数宣言
 */

// 旧 varで変数宣言
var val1 = "Var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// letで変数宣言
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可
// let val2 = "";

// constで変数宣言
const val3 = "const変数";
console.log(val3);

// constで変数は上書き再宣言不可

// constで定義したオブジェクトのプロパティは変更可能
const val4 = {
  name: "じゃけぇ",
  age: 28
};
val4.name = "jake";
val4.address = "Hirosihima";
console.log(val4);

// constで定義した配列は変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
