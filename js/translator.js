async function fetchTranslate() {

 var text = document.querySelector("#inputText").value;
 var fromLang = document.querySelector("#fromLang").value;
 var toLang = document.querySelector("#toLang").value;

 if (text === "") {
  alert("Please enter text");
  return;
 }

 var url =
  `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(text)}`;

 var res = await fetch(url);
 var data = await res.json();

 var translatedText = "";

 for (var i = 0; i < data[0].length; i++) {
  translatedText += data[0][i][0];
 }

 document.querySelector("#outputText").value = translatedText;
}

document.querySelector("#translateBtn").addEventListener(
 "click",
 function () {
  fetchTranslate();
 }
);
