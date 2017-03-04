for (var ii =0; ii < agents.length; ii++){
    var id = agents[ii].name;
    document.getElementById(id).innerText = agents[ii].codeName;
}

document.getElementById("imageBackSource").src = agents[1].imgBackground;
document.getElementById("JackyPic").src = agents[1].img;