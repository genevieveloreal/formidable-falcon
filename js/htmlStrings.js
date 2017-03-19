
let htmlInstructions = ` 
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

let htmlGreg = `<section>
          <h1 style="background-color: darkred;" >We have a Green Light ${ agents[4].codeName }</h1>
          <br>
          <button type="button" >Don't Click Me!</button>
       </section>`;

let htmlDan = `<div class="container">
      <img src="./images/dangerous-dodo.png" alt="Badass Dodo">
      <div id='dd-profile'>
        <span>codename: ${ agents[4].codeName }</span>
        <span>description: Dodo militant from the lost continent of Zealandia.</span>
        <span>hobbies: Coding, Dodoing, Stuff</span>
        <span>favourite saying: Survival separates the dodos from the beasts.</span>
        <span></span>
      </div>
    </div>`;

let htmlGenevieve = `<div class="parallax"></div>
           <div class="section1">
                
                <h1 class="text-center">${ agents[0].codeName }</h1>
                <div class="container">
                <div class="col-md-3">
                    <img src="images/genevieve.jpg">
                </div>
                <div class="col-md-9">
                    <div class="profile-information">
                    <p><span class="attribute">Codename:</span> scaryCanary</br>
                    <span class="attribute">Github:</span> <a href="http://github.com/genevieveloreal">genevieveloreal</a></br>
                    <span class="attribute">About:</span> scaryCanary and her sidekick pudgieBudgie are practically inseparable.</br>
                    <span class="attribute">Hobbies:</span> Bird-watching and the smell of old books.</br>
                    <span class="attribute">Favourite sayings:</span> <i>"The code works... but I don't know why."</i></br>
                    </p>
                    </div>
                </div>
                
                </div>
                
           </div>`;

let htmlJacky = `<div class="container">
    <img src="profiles/jacky/img/jacky-cosplay-thumbnail.jpg" alt="Iron Falcon">
    <p> Jacky is a small town guy who has big dreams for himself! He loves cliches and the old-school.
    He thinks that Dinosaurs 2.0 are overrated and is trying to revert back to a world of Dinosaurs 1.0 
    and Nokia 3310 brick phones.                      
    <br><br>
    In all seriousness, he is a web developer and wants to build the next Snappy Flamingo, Knifey Vegetables or 
    FaceSpace the social network.
    <br><br>
    His hobbies are making cultural references even though he knows nothing about culture and trying to come
    first at everything, but he may as well be in La La Land.</p>
    </div>`; // make me tidy please

