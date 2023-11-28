document.addEventListener("DOMContentLoaded", () => {
    var body = document.querySelector("body");
    var createBtn = document.getElementById("create-btn");
    var characterInput = document.getElementById("character-input");
    var img = document.querySelector("#character-img");
    var select = document.querySelector("#race-dropdown");
    var characterCreated = document.querySelector("#character-created");
    var fullName = document.querySelector("#fullname");
    var ageInfo = document.querySelector("#age-info");
    var submitCharacter = document.querySelector("#submit-character");
    var firstName = document.querySelector("#firstname");
    var lastName = document.querySelector("#lastname");
    var age = document.querySelector("#age");
    var raceInfo = document.querySelector("#race-info");
    var fillDetails = document.querySelector("#fill-details");
    var checkBox = document.querySelector("#checkbox");
    var raceDetails = document.querySelector("#race-details");

    // Prevent form submission globally
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
    });

    function updateImageAndRaceInfo(selectedOption) {
        switch (selectedOption) {
            case "warrior":
                img.src = "../media/character/pngegg.png";
                raceInfo.textContent = "Warrior";
                raceDetails.innerHTML = 
                "<h4>Warrior : </h4><span>The warrior, for us, is one who <br> sacrifices himself for the good of others. His task is <br> to take care of the elderly, the defenseless, those who <br> cannot provide for themselves, and above all, the children <br> - the future of humanity.</span>" ;
                break;
            case "dragon":
                img.src = "../media/character/pngegg (2).png";
                raceInfo.textContent = "Dragon";
                raceDetails.innerHTML = 
                "<h4>Dragon : </h4><span>a mythical monster resembling a giant reptile, <br> sometimes shown as having wings. In European tradition  <br>the dragon is typically fire-breathing and tends to symbolize <br> chaos or evil, whereas in East Asia it is usually a beneficent  <br>symbol of fertility, associated with water and the heavens.</span>" ;
                break;
            case "demon":
                img.src = "../media/character/pngegg (5).png";
                raceInfo.textContent = "Demon";
                raceDetails.innerHTML = 
                "<h4>Demon : </h4> <span> Demons are subordinate to the  absolute power of evil, <br>the Evil Will, embodied in Ahriman/Angra Manyu.<br> They are both corrupted and evil themselves.  <br>Demons possess no substance on their own and can only  <br>attach themselves to material agents. People who worship  <br>demons are blamed to give them power</span>";
                break;
            case "evil":
                img.src = "../media/character/pngegg (6).png";
                raceInfo.textContent = "Evil Being";
                raceDetails.innerHTML = 
                "<h4>Evil : </h4> <span>If you describe someone as evil, <br>you mean that they are very wicked by nature and take <br>pleasure in doing things that harm other people</span>";
                break;
            case "knight":
                img.src = "../media/character/pngegg (4).png";
                raceInfo.textContent = "Knight";
                raceDetails.innerHTML = 
                "<h4>Knight : </h4> <span>The Knight represents the best of <br>the nobility— he is honorable, polite, just, and very <br>competent at applying martial effort to protect his people, <br>country, and faith.</span>";
                break;
            default:
                break;
        }
    }

    createBtn.addEventListener("click", () => {
        if (body) {
            body.style.backgroundImage = 'url("../media/player-create-page.jpg")';
        }

        createBtn.style.display = "none";
        characterInput.style.display = "flex";
    });
    
    
    

    submitCharacter.addEventListener("click", () => {
        if (!firstName.value || !lastName.value || !age.value || !checkBox.checked) {
            fillDetails.textContent = "Please fill in all required fields";
            fillDetails.style.color = "green";
        } else {
            fillDetails.textContent = "";
            characterInput.style.display = "none";
            characterCreated.style.display = "flex";
            fullName.textContent = `${firstName.value} ${lastName.value}`;
            ageInfo.textContent = age.value;
            updateImageAndRaceInfo(select.value);
            raceInfo.style.color = "white";
            fullName.style.color = "white";
            ageInfo.style.color = "white";

        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var img = document.querySelector("img");
    var select = document.querySelector("#race-dropdown");

    select.addEventListener("change", function() {
        var selectedOption = select.value;

        if (selectedOption === "warrior") {
            img.src = "../media/character/pngegg.png";
        } else if (selectedOption === "dragon") {
            img.src = "../media/character/pngegg (2).png";
        } else if (selectedOption === "demon") {
            img.src = "../media/character/pngegg (5).png";
        } else if (selectedOption === "knight") {
            img.src = "../media/character/pngegg (4).png";
        } else if (selectedOption === "evil") {
            img.src = "../media/character/pngegg (6).png";
        }
    });
});
