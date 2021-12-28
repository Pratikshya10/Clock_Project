function clock(){

    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am_pm = document.getElementById("am-img");

    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var ampm = hour >=12 ? "PM" : "AM";

    hour = hour%12;
    hour = hour ? hour:12; 

    if(hour>12){
        hour = hour-12;
    }
    if(hour == 0){
        hour = 12;
    }
    if(hour>12){
        am_pm = 'PM';
    }
    
    if(hour<10){
        hour = "0" + hour;
    }
    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }
   

    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    am_pm.innerHTML = ampm;
}

setInterval(clock,1000);

function Makediv(){

    var invalue1 = document.getElementById("setTimerwake");
    var invalue2 = document.getElementById("setTimelunch");
    var invalue3 = document.getElementById("setTimenap");

    var value1 = invalue1.options[invalue1.selectedIndex].text;
    var value2 = invalue2.options[invalue2.selectedIndex].text;
    var value3 = invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML= "Wake Up time : " +value1 +
        "<br/> Lunch Time :"+value2+ "<br/> Nap time :"+value3;
    document.getElementById("dynamic-block").style.display="block";

}


function settime(){
    var i = document.getElementById("setTimerwake").value;
    var j = document.getElementById("setTimelunch").value;
    var k = document.getElementById("setTimenap").value;

    var hrs = new Date().getHours();

    if(i == hrs){
        document.getElementById("img-container").style.backgroundImage = "url(wakeup.jpeg)";
        document.getElementById("text-container").innerHTML="Lets have some breakfast";
    }

    else if (j == hrs){
        document.getElementById("img-container").style.backgroundImage = "url(lunch.jpeg)";
        document.getElementById("text-container").innerHTML="Lets have some Lunch";
    }
   
    else if (k == hrs){
        document.getElementById("img-container").style.backgroundImage = "url(night.jpeg)";
        document.getElementById("text-container").innerHTML="Night Night !! Sweet Dream !!";
    }

    Makediv();
}