'use strict!'
let agents = [
    {
        name: "Genevieve",
        codeName: "Scary Canary",
        img: "images/genevieve.jpg",
        html: "handlers.loadGenevieve()"
    }, {
        name: "Jacky",
        codeName: "Iron Falcon",
        img: "profiles/jacky/img/jacky-cosplay-thumbnail.jpg",
        imgBackground: "profiles/jacky/img/dinosaurbird.jpeg",
        html: "handlers.loadJacky()"
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
        html: "handlers.loadDan()"
    }, {
        name: "Greg",
        codeName: "Sleepy Eagle",
        img: "profiles/greg/img/greg.jpg",
        html: "handlers.loadAgent(this)",
        myHtml: function () {
            return htmlGreg;
        }
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
        
    },
    loadAgent (obj) {
        let index = Number(obj.parentNode.id);
        document.querySelector('title').innerText = agents[index].codeName;
        document.getElementById('pageInfo').innerHTML = agents[index].myHtml();
    },
    // loadGreg (obj) {
    //     let index = Number(obj.parentNode.id);
    //     document.querySelector('title').innerText = agents[index].codeName;
    //     document.getElementById('pageInfo').innerHTML = htmlGreg;
    // },
    loadDan () {
        document.querySelector('title').innerText = agents[4].codeName;
        document.getElementById('pageInfo').innerHTML = htmlDan;
    },
    loadGenevieve () {
        document.querySelector('title').innerText = agents[0].codeName;
        document.getElementById('pageInfo').innerHTML = htmlGenevieve;
    },
    loadJacky () {
        document.querySelector('title').innerText = agents[1].codeName;
        document.getElementById('pageInfo').innerHTML = htmlJacky;
    }
}

let view = {
    loadAgents: function() {
        let agentsList =  document.getElementById('pageInfo');
        let agentsImageDiv = document.createElement('div');
        agents.forEach(function(agent, position){
            let agentHtml = document.createElement('div');
            agentHtml.classList.add("col-md-3", "col-sm-6", "col-xs-6");
            agentHtml.innerHTML = `<span onclick=" ${ agent.html } ">
            <img src=" ${ agent.img } " class="fade" alt=" ${ agent.codeName } "></span>`;
            agentHtml.id = position;
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
        agents.forEach(function(agent, position){
            let myLi = document.createElement('li');
            myLi.innerHTML = `<button onclick=" ${ agent.html }"> ${ agent.codeName } </button> `;
            myLi.id = position;
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
