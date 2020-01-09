$(document).ready(function()
{
    var $item = $('li');

    $item.first().addClass('active');
    var button1 = document.getElementById("a33");
    var val = document.getElementById('myNumber1').value; 
    var Change_img = setTimeout(function tick()
        {

            var index = $item.filter('.active').index();
            if(index == $item.length - 1){
                index = -1
            }
            $item.eq(index+1).addClass('active').siblings().removeClass('active');
            Change_img = setTimeout(tick,val*1000);
        },val*1000);  
     
   var valuev =  function()
        {
            val = document.getElementById('myNumber1').value;
            if(val<1){
                val=1
            }
        }
    button1.addEventListener('click',valuev)  
   setInterval(function(){
    var change_background = setTimeout(function reset()
    {    
            document.body.style.backgroundImage = "url('16.jpg')"
    },2000)
        var change_background1 = setTimeout(function reset1()
        {    
            document.body.style.backgroundImage = "url('15.jpg')"
        },4000)},4000)
}); 
