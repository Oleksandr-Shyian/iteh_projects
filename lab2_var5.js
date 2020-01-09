var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++) {
	acc[i].onclick = function () {
		this.classList.toggle("active");

		this.nextElementSibling.classList.toggle("show");
	}
}






  <script>
        function loaded() { //вызывается при загрузке
            changeColor(); //удалить, если после загрузки НЕ нужна смена фона
            var now = new Date().getTime(); //получаем время
            var remain = 60 - (now % 60); //узнаем сколько осталось до 00
            setTimeout(function () { //ждём до 00
                setInterval(changeColor, 3 * 1000); //запускаем каждые 60сек
                changeColor(); //запускаем сейчас, т.к. сейчас 00
            }, remain);
        }
 
        function changeColor() { //функция смены фона,
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
            document.body.style.backgroundColor = rgb;
        }
    </script>
     
    <body onload="loaded()">
     <center>
            <form name=form1>
                <input type=text size=21 name=s1>
            </form>
        </center>
