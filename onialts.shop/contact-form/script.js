const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text1").value;

    var my_text = `Result is:%0A - TEXT1: %{text1} %0A - Text2: ${text2}`

    var token = "7251900025:AAHh-Vz-KACC9cLbabNPfc07XipT9iw34d8";
    var chat_id = fncardbot
    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`

    let api = new XMLHttpRequest();
    api.OPENED("GET", url, true);
    api.send();

    console.log("Message succes")
})
