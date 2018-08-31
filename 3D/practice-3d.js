function rotate(){
	var x = document.getElementById("rotatex").value;
    var y = document.getElementById("rotatey").value;
    var z = document.getElementById("rotatez").value;
    document.getElementById('block3d').style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg) rotateZ("+z+"deg)";

    document.getElementById('x').innerText = x;
    document.getElementById('y').innerText = y;
    document.getElementById('z').innerText = z;
}