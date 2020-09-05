var data = JSON.stringify({
  "field1": "xyz",
  "field2": "xyz"
});

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://darragh-3c6a.restdb.io/rest/woordjes");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", "5f53c4a3c5e01c1e033b8c8a");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
