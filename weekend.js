var ch = document.querySelector(".ch")
var input = document.querySelector(".in")
var btn = document.querySelector(".b")
var day = new Date().getDay()
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
btn.addEventListener("click",weekend)
function weekend(){
    ch.innerHTML = "Hallo " + input.value + ". "+ " Today is " + days[day]+ "!." + " There is only " + (5 - day) + " Day to the Weekend"
    btn.style.display = "none"
    input.style.display = "none"
}
Collapse



