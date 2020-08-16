$(document).ready(function(){
  $('#result1').click(function(){
    var real = document.getElementById("real").value;
    var imaginary = document.getElementById("imaginary").value;
    var radius = Math.sqrt(Math.pow(real,2)+Math.pow(imaginary,2));
    var angle = Math.atan(imaginary/real);
    if(real<0 && imaginary<0){
      angle = angle-3.141592;
    } else if(real<0 && imaginary>0){
      angle = angle+3.141592;
    }
    document.getElementsByClassName("result_rad")[0].innerText = radius;
    document.getElementsByClassName("result_ang")[0].innerText = angle;
    document.getElementsByClassName("result_deg")[0].innerText = angle*180/3.141592;
  });
  $('#result2').click(function(){
    var radius = document.getElementById("radius").value;
    var angle = document.getElementById("angle").value;
    var real = radius*Math.cos(angle);
    var imaginary = radius*Math.sin(angle);
    document.getElementsByClassName("result_real")[0].innerText = real;
    document.getElementsByClassName("result_imaginary")[0].innerText = imaginary;
  });
})
