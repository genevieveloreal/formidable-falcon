'use strict!'
let agents = [
    {
        name: "Genevieve",
        codeName: "Scary Canary",
        img: "images/genevieve.jpg",
        html: "profiles/genevievecarter.html"
    }, {
        name: "Jacky-Lui",
        codeName: "Iron Eagle",
        img: "images/matthew.jpg",
        html: "profiles/jacky-lui.html"
    }, {
        name: "Matthew",
        codeName: "Courageous Condor",
        img: "images/jacky.jpg",
        html: "profiles/matthew-burfield.html"
    }, {
        name: "Nimai",
        codeName: "Nobble Noddy",
        img: "images/nimai.jpg",
        html: "profiles/nimaiwalsh.html"
    }, {
        name: "Daniel",
        codeName: "Dangerous Dodo",
        img: "images/daniel.jpg",
        html: "profiles/daniel.html"
    }, {
        name: "Greg",
        codeName: "Sleepy Eagle",
        img: "images/greg.jpg",
        html: "profiles/greg.html"
    }
];

function loadAgents() {
    let agentsList =  document.getElementById('agentsList');
    agents.forEach(function(agent){
        let agentHtml = document.createElement('div');
        agentHtml.classList.add("col-md-3", "col-sm-6");
        agentHtml.innerHTML = `<a href=" ${ agent.html } ">
        <img src=" ${ agent.img } " class="fade" alt=" ${ agent.codeName } "></a>`;
        agentsList.appendChild(agentHtml);
    });
}
loadAgents();
