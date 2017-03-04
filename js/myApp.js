'use strict!'
let agents = [
    {
        name: "Genevieve",
        codeName: "Scary Canary",
        img: "images/genevieve.jpg",
        html: "profiles/genevievecarter.html"
    }, {
        name: "Jacky",
        codeName: "Iron Eagle",
        img: "images/Jacky-cosplay-thumbnail.jpg",
        img: "images/Jacky-cosplay.jpeg",
        html: "profiles/jackylui.html"
    }, {
        name: "Matthew",
        codeName: "Courageous Condor",
        img: "images/genevieve.jpg",
        html: "profiles/matthew-burfield.html"
    }, {
        name: "Nimai",
        codeName: "Nobble Noddy",
        img: "images/nimai-profile1.jpg",
        html: "profiles/nimaiwalsh.html"
    }, {
        name: "Daniel",
        codeName: "Dangerous Dodo",
        img: "images/dangerous-dodo-200.png",
        html: "profiles/daniel.html"
    }, {
        name: "Greg",
        codeName: "Sleepy Eagle",
        img: "profiles/greg/img/greg.jpg",
        html: "profiles/greg/greg.html"
    }
];

function loadAgents() {
    let agentsList =  document.getElementById('agentsList');
    agents.forEach(function(agent){
        let agentHtml = document.createElement('div');
        agentHtml.classList.add("col-md-3", "col-sm-6", "col-xs-6");
        agentHtml.innerHTML = `<a href=" ${ agent.html } ">
        <img src=" ${ agent.img } " class="fade" alt=" ${ agent.codeName } "></a>`;
        agentsList.appendChild(agentHtml);
    });
}
if (document.querySelector('title').innerText === "Formidable Falcon"){
    loadAgents();
}