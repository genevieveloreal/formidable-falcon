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
        instructionsEle.innerHTML = ` 
                    <h2><b>Instructions</b></h2>
                    <p>You will need a github account and git installed on your computer. To contribute to the project <a href="profiles/genevievecarter.html">scaryCanary</a> will need to add you as a contributor.</p>
                    <ol class="instructions-list">
                        <li>Ensure you have an up to date version of the Formidable Falcon project on your computer</li>
                        <li>Create a new .html file in the profiles folder for your profile page</li>
                        <li>Add a link to your profile page and an image of yourself below</li>
                        <li>You will need to create your own css file in the 'css' folder titled with your name</li>
                        <li>Add information and style your profile page</li>
                        <li>Information you will need to include:
                            <ul>
                                <li>Your code name</li>
                                <li>A link to your github account</li>
                                <li>A photo of yourself</li>
                                <li>A description</li>
                                <li>Hobbies, or favourite sayings</li>
                            </ul>
                        </li>
                        <li>Commit your changes to the Formidable Falcon project</li>
                        <li>Ask for feedback on your profile page!</li>
                    </ol>
                    <p><b>Bonus Challenge!</b></p>
                    <p>For an added usability challenge, provide a way for the user to navigate back to the home page for Formidable Falcon, as well as a way to view the other member's pages.</p>`;
    }
}

if (document.querySelector('title').innerText === "Formidable Falcon"){
    view.loadAgents();
}
view.buildNav();

//<br><p class="text-center instructions-link"><button onclick="handlers.loadInstructions()> >>> View the instructions <<< </button></p>
