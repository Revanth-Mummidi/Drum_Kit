var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var btn=this.innerHTML;
        makesound(btn);
        buttonanimation(btn);
    })
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
    buttonanimation(event.key);
})
function makesound(key)
{
    switch(key)
    {
       case "w":
       var ad1=new Audio("crash.mp3");
       ad1.play();
       break;
       case "a":
        var ad2=new Audio("kick-bass.mp3");
       ad2.play();
       break;
       case "s":
        var ad3=new Audio("snare.mp3");
       ad3.play();
       break;
       case "d":
        var ad4=new Audio("tom-1.mp3");
       ad4.play();
       break;
       case "j":
        var ad5=new Audio("tom-2.mp3");
       ad5.play();
       break;
       case "k":
        var ad6=new Audio("tom-3.mp3");
       ad6.play();
       break;
       case "l":
        var ad7=new Audio("tom-4.mp3");
       ad7.play();
       break;
       default:
        console.log(btn);
    }     
}
function buttonanimation(eventkey)
{
    var obj=document.querySelector("."+eventkey);
    obj.classList.add("pressed");
    setTimeout(function()
    {
        obj.classList.remove("pressed");
    },150);
}