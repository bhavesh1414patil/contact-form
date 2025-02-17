const firebaseConfig = {
  apiKey: "AIzaSyAY43SDaXkYWpVgsllPal5ZDYCDiG9Hfws",
    authDomain: "contactform-f63d8.firebaseapp.com",
    databaseURL: "https://contactform-f63d8-default-rtdb.firebaseio.com",
    projectId: "contactform-f63d8",
    storageBucket: "contactform-f63d8.firebasestorage.app",
    messagingSenderId: "569083896628",
    appId: "1:569083896628:web:dabcf6afa7b0733976fb61"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
