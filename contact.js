/*document.querySelector("contact_form").addEventListener("Submit",Submit);

function Submit(e)
{e.preventDefault();}

let fname = document.querySelector(".fname").value;
let country = document.querySelector(".country").value;
let subject = document.querySelector(".subject").value;

console.log(fname,country,subject)*/

const firebaseConfig = {
  apiKey: "AIzaSyBXd4m30iOuu6lcBOH4Yi-WerVLcziEiN8",
  authDomain: "html-comments.firebaseapp.com",
  databaseURL: "https://html-comments-default-rtdb.firebaseio.com",
  projectId: "html-comments",
  storageBucket: "html-comments.appspot.com",
  messagingSenderId: "890787090055",
  appId: "1:890787090055:web:6dbd6937aac2d63eadb222",
  measurementId: "G-SCLG88HEPQ"
};

 
  firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("Comment_Blog");


document.querySelector(".blog-form").addEventListener("submit",Comment);


function Comment(e)
{
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;


  saveContactInfo(name,email,subject,message);

  document.querySelector(".blog-form").reset();
}

function saveContactInfo(name,email,subject,message)
{
  let newContactInfo = contactInfo.push();



  newContactInfo.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
  retrieveInfos();
  window.location.reload();
}


function retrieveInfos()
{
  let ref = firebase.database().ref("Comment_Blog");
  ref.on("value",gotData);
}



function gotData(data)
{
  let info = data.val();
  let keys = Object.keys(info);

  for(let i = 0; i < keys.length; i++)
  {
      let infoData = keys[i];
      let name = info[infoData].name;
      let email = info[infoData].email;
      let subject = info[infoData].subject;
      let message = info[infoData].message;

      console.log(name,email,subject,message);
      
      let infosResults = document.querySelector(".infosResults");

    infosResults.innerHTML += `<div>
    <p><strong>Name: <strong/>${name} <br/>
    <a><strong>Email: <strong/>${email}</a> <br/>
    <a><strong>Subject: <strong/>${subject}</a> <br/>
    <a><strong>Message: <strong/>${message}</a> 
    </p>
    </div>`;
  }
}

retrieveInfos();






 








/*document.querySelector(".blog-form-2").addEventListener("submit",Comment);


function Comment_2(e)
{
  e.preventDefault();
  //console.log();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;

  // console.log(name,email,subject,message);

  saveContactInfo_2(name,email,subject,message);

  document.querySelector(".blog-form-2").reset();
}

function saveContactInfo_2(name,email,subject,message)
{
  let newContactInfo = contactInfo.push();



  newContactInfo.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
  retrieveInfos_2();
  window.location.reload();
}


function retrieveInfos_2()
{
  let ref = firebase.database().ref("Comment_Blog_2");
  ref.on("value",gotData);
}



function gotData_2(data)
{
  let info = data.val();
  let keys = Object.keys(info);

  for(let i = 0; i < keys.length; i++)
  {
      let infoData = keys[i];
      let name = info[infoData].name;
      let email = info[infoData].email;
      let subject = info[infoData].subject;
      let message = info[infoData].message;

      console.log(name,email,subject,message);
      
      let infosResults = document.querySelector(".infosResults2");

    infosResults.innerHTML += `<div>
    <p><strong>Name: <strong/>${name} <br/>
    <a><strong>Email: <strong/>${email}</a> <br/>
    <a><strong>Subject: <strong/>${subject}</a> <br/>
    <a><strong>Message: <strong/>${message}</a> 
    </p>
    </div>`;
  }
}

retrieveInfos_2();*/