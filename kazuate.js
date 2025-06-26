let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let finished = false;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#presult');
b.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  document.querySelector("#status").style.display = "block";
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('#santaro');
  let yoso = parseInt(i.value);

  let result = document.querySelector("#result");
  let spanKaisu = document.querySelector("#kaisu");
  let spanAnswer = document.querySelector("#answer");

  kaisu += 1;


  spanKaisu.textContent = kaisu;
  spanAnswer.textContent = yoso;
  // 課題3-1: 正解判定する

    if (finished) {
    result.textContent = "答えは" + kotae + "でした。ゲームはすでに終了しています ";
    return;  // 可以选择 return，也可以不 return，取决于你是否还想再显示其他内容
  }

if (yoso === kotae) {
    result.textContent= "正解です！おめでとう！";
    finished = true;
// 正解したら終了扱いにする（次回からゲーム終了メッセージ）
  } else {
  // kotae と yoso が一致するかどうか調べて結果を出力
     if (kaisu === 3) {
      result.textContent = "まちがい。残念でした 答えは " + kotae + " です。";
      finished = true;
    } else if (yoso < kotae) {
      result.textContent = "まちがい。答えはもっと大きいですよ";
    } else {
      result.textContent = "まちがい。答えはもっと小さいですよ";
    }
}
}
  // 課題3-1における出力先はコンソール
