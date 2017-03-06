'use strict!'
let agents = [
    {
        name: "Genevieve",
        codeName: "Scary Canary",
        img: "images/genevieve.jpg",
        html: "profiles/genevievecarter.html"
    }, {
        name: "Jacky",
        codeName: "Iron Falcon",
        imgBackground: "../images/dinosaurbird.jpeg",
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

console.log('myapp');

let handlers = {
    loadInstructions: function () {
        view.loadInstructions();
    },
    home: function() {
        if (document.querySelector('title').innerText !== 'Formidable Falcon'){
            document.querySelector('title').innerText = 'Formidable Falcon';
            view.loadAgents();
        }
        
    }
}

let view = {
    loadAgents: function() {
        let agentsList =  document.getElementById('pageInfo');
        let agentsImageDiv = document.createElement('div');
        agents.forEach(function(agent){
            let agentHtml = document.createElement('div');
            agentHtml.classList.add("col-md-3", "col-sm-6", "col-xs-6");
            agentHtml.innerHTML = `<a href=" ${ agent.html } ">
            <img src=" ${ agent.img } " class="fade" alt=" ${ agent.codeName } "></a>`;
            agentsImageDiv.appendChild(agentHtml);
        });
        agentsImageDiv.classList.add('pictures', 'row', 'clearfix');
        agentsImageDiv.insertAdjacentHTML( 'beforeend', '<br><p class="text-center instructions-link"><button onclick="handlers.loadInstructions()"> >>> View the instructions <<< </button></p>');
        agentsList.innerHTML = '';
        agentsList.appendChild(agentsImageDiv); 
    },
    buildNav: function() {
        let myUl = document.getElementById('myNavbar');
        myUl.innerHTML = '';
        agents.forEach(function(agent){
            let myLi = document.createElement('li');
            myLi.innerHTML = `<a href="${ agent.html }"> ${ agent.codeName } </a> `;
            myUl.appendChild(myLi);
        });
    },
    loadInstructions: function() {
        document.querySelector('title').innerText = 'Instructions';
        let instructionsEle = document.getElementById('pageInfo');
        instructionsEle.innerHTML = htmlInstructions;
    }
}

if (document.querySelector('title').innerText === "Formidable Falcon"){
    view.loadAgents();
}
view.buildNav();

//<br><p class="text-center instructions-link"><button onclick="handlers.loadInstructions()> >>> View the instructions <<< </button></p>
