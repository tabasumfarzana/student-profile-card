// =========================
// Get Elements
// =========================

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const colorInput = document.getElementById("color");
const photoInput = document.getElementById("photo");

const createBtn = document.getElementById("createBtn");
const themeBtn = document.getElementById("themeBtn");
const hideBtn = document.getElementById("hideBtn");
const resetBtn = document.getElementById("resetBtn");

const profileCard = document.getElementById("profileCard");

const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileNameText = document.getElementById("profileNameText");
const profileAge = document.getElementById("profileAge");
const profileEmail = document.getElementById("profileEmail");
const profileSubject = document.getElementById("profileSubject");
const profileColor = document.getElementById("profileColor");

const colorPreview = document.getElementById("colorPreview");
const todayDate = document.getElementById("todayDate");
const greeting = document.getElementById("greeting");

// =========================
// Show Date
// =========================

const today = new Date();
todayDate.innerHTML = "📅 " + today.toDateString();

// =========================
// Greeting
// =========================

let hour = today.getHours();

if(hour < 12){
    greeting.innerHTML = "🌞 Good Morning!";
}
else if(hour < 18){
    greeting.innerHTML = "☀️ Good Afternoon!";
}
else{
    greeting.innerHTML = "🌙 Good Evening!";
}

// =========================
// Live Color Preview
// =========================

colorInput.addEventListener("input",function(){

    colorPreview.style.backgroundColor = colorInput.value;

});

// =========================
// Upload Image
// =========================

photoInput.addEventListener("change",function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            profileImage.src = e.target.result;

        }

        reader.readAsDataURL(file);

    }

});

// =========================
// Create Profile
// =========================

createBtn.addEventListener("click",function(){

    if(
        nameInput.value==="" ||
        ageInput.value==="" ||
        emailInput.value==="" ||
        subjectInput.value==="" ||
        colorInput.value===""
    ){

        alert("Please fill all fields.");

        return;

    }

    profileName.innerHTML = nameInput.value;
    profileNameText.innerHTML = nameInput.value;
    profileAge.innerHTML = ageInput.value;
    profileEmail.innerHTML = emailInput.value;
    profileSubject.innerHTML = subjectInput.value;
    profileColor.innerHTML = colorInput.value;

    profileCard.style.backgroundColor = colorInput.value;

});

// =========================
// Theme
// =========================

themeBtn.addEventListener("click",function(){

    document.body.classList.toggle("dark-mode");

});

// =========================
// Hide / Show
// =========================

hideBtn.addEventListener("click",function(){

    if(profileCard.style.display==="none"){

        profileCard.style.display="block";

        hideBtn.innerHTML="<i class='fa-solid fa-eye-slash'></i> Hide Profile";

    }
    else{

        profileCard.style.display="none";

        hideBtn.innerHTML="<i class='fa-solid fa-eye'></i> Show Profile";

    }

});

// =========================
// Reset
// =========================

resetBtn.addEventListener("click",function(){

    nameInput.value="";
    ageInput.value="";
    emailInput.value="";
    subjectInput.value="";
    colorInput.value="";
    photoInput.value="";

    profileName.innerHTML="Student Name";
    profileNameText.innerHTML="Your Name";
    profileAge.innerHTML="Age";
    profileEmail.innerHTML="Email";
    profileSubject.innerHTML="Favourite Subject";
    profileColor.innerHTML="Favourite Color";

    profileImage.src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    profileCard.style.backgroundColor="#f8f0ff";

    colorPreview.style.backgroundColor="black";

    profileCard.style.display="block";

    hideBtn.innerHTML="<i class='fa-solid fa-eye-slash'></i> Hide Profile";

    document.body.classList.remove("dark-mode");

});