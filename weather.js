
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市名:", data.name);
  console.log("天気:", data.weather[0].description);
  console.log("最低気温:", data.main.temp_min + "℃");
  console.log("最高気温:", data.main.temp_max + "℃");
  console.log("湿度:", data.main.humidity + "%");
  console.log("風速:", data.wind.speed + " m/s");
  console.log("風向:", data.wind.deg + "°");
}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {
  let oldResult = document.querySelector("#result");
  if (oldResult) oldResult.remove();

  let resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.body.appendChild(resultDiv);

  let name = document.createElement("p");
  name.textContent = "都市名: " + data.name;
  resultDiv.appendChild(name);

  let lon = document.createElement("p");
  lon.textContent = "経度: " + data.coord.lon;
  resultDiv.appendChild(lon);

  let lat = document.createElement("p");
  lat.textContent = "緯度: " + data.coord.lat;
  resultDiv.appendChild(lat);

  let weather = document.createElement("p");
  weather.textContent = "天気: " + data.weather[0].description;
  resultDiv.appendChild(weather);

  let tempMin = document.createElement("p");
  tempMin.textContent = "最低気温: " + data.main.temp_min + "℃";
  resultDiv.appendChild(tempMin);

  let tempMax = document.createElement("p");
  tempMax.textContent = "最高気温: " + data.main.temp_max + "℃";
  resultDiv.appendChild(tempMax);

  let humidity = document.createElement("p");
  humidity.textContent = "湿度: " + data.main.humidity + "%";
  resultDiv.appendChild(humidity);

  let windSpeed = document.createElement("p");
  windSpeed.textContent = "風速: " + data.wind.speed + " m/s";
  resultDiv.appendChild(windSpeed);

  let windDeg = document.createElement("p");
  windDeg.textContent = "風向: " + data.wind.deg + "°";
  resultDiv.appendChild(windDeg);
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
let btn = document.querySelector("#searchBtn");
btn.addEventListener("click", sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let input = document.querySelector("#searchBox").value.trim();
  console.log("検索キー:", input);

  const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${input}.json`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("データの取得に失敗しました");
      return response.json();
    })
    .then(showResult)
    .catch(showError)
    .finally(finish);
}


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  print(resp);
  printDom(resp);
}


// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

// 都市選択メニューのクリック処理
document.querySelectorAll("#cityMenu li").forEach(item => {
  item.addEventListener("click", () => {
    const cityId = item.dataset.id;
    document.querySelector("#searchBox").value = cityId;
    sendRequest(); // 入力欄にIDを入れて検索実行
  });
});

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること

