

function turnOnLamp()
{
    document.getElementById('lamp').src="/img/pic_bulboff.gif";
       document.getElementById("temp1").style.background ="gray";
    return

 
}

function turnOffLamp()
{
    document.getElementById('lamp').src="/img/pic_bulbon.gif";
       document.getElementById("temp1").style.background ="white";
    return

 
}
const course= {
    CourseName:"Cname",
    CourseTeacher:"Cteacher",
    CourseCost:"Ccost",
    CourseDuration:"Cduration"
}
const Html = new course("html","MR farrok","12$","3weeks");
console.log(Html);


