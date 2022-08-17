// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');
// const contactForm = document.getElementById('contact-form');
// const errorElement = document.getElementById('error');
// const successMsg = document.getElementById('success-msg');
// const submitBtn = document.getElementById('submit');
// const btn = document.getElementById('click');
  
// const validate = (e) => {
//   e.preventDefault();
 
//   if (name.value.length < 3) {
//     errorElement.innerHTML = 'Your name should be at least 3 characters long.';
//     return false;
//   } 
  
//   if (!(email.value.includes('.') && (email.value.includes('@')))) {
//     errorElement.innerHTML = 'Please enter a valid email address.';
//     return false;
//   } 

//   if (!emailIsValid(email.value)) {
//     errorElement.innerHTML = 'Please enter a valid email address.';
//     return false;
//   }

//   if (message.value.length < 15) {
//     errorElement.innerHTML = 'Please write a longer message.';
//     return false;
//   }

//   errorElement.innerHTML = '';
//   successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

//   e.preventDefault();
//   setTimeout(function () {
//     successMsg.innerHTML = '';
//     document.getElementById('contact-form').reset();
//   }, 6000);

//   return true;

// }

// const emailIsValid = email => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// submitBtn.addEventListener('click', validate);
// btn.addEventListener('click',loadDoc);

////////AJAX
let store = document.getElementById("persons");

let store2 = document.getElementById("tables");
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     var data = JSON.parse(xhttp.response);
//     console.log(data);

//     for (var i = 0; i < data.length; i++) {
//       let value = data[i];
//       console.log(value);
//       console.log(value.id);

//       const newDiv = document.createElement("div");
//       const ulList = document.createElement("ul");
//       const List1 = document.createElement("li");
//       const List2 = document.createElement("li");
//       const List3 = document.createElement("li");
//       const List4 = document.createElement("li");
//       const List5 = document.createElement("li");
//       const List6 = document.createElement("li");
//       const List7 = document.createElement("li");

//       const id = document.createTextNode("Id = " + value.id);
//       const name = document.createTextNode("Name = " + value.name);
//       const username = document.createTextNode("Username = " + value.username);
//       const email = document.createTextNode("Email = " + value.email);
//       const phone = document.createTextNode("Phone No = " + value.phone);
//       const website = document.createTextNode("Website = " + value.website);
//       const company = document.createTextNode(
//         "Company Name = " + value.company.name
//       );

//       List1.appendChild(id);
//       List2.appendChild(name);
//       List3.appendChild(username);
//       List4.appendChild(email);
//       List5.appendChild(phone);
//       List6.appendChild(website);
//       List7.appendChild(company);

//       ulList.appendChild(List1);
//       ulList.appendChild(List2);
//       ulList.appendChild(List3);
//       ulList.appendChild(List4);
//       ulList.appendChild(List5);
//       ulList.appendChild(List6);
//       ulList.appendChild(List7);
//       newDiv.appendChild(ulList);
//       store.appendChild(newDiv);
//     }
//   };
//   xhttp.open(
//     "GET",
//     "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11"
//   );
//   xhttp.send();
// }
function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var data = JSON.parse(xhttp.response);

    for (var i = 0; i <= data.length; i++) {
      let value = data[i - 1];

      const row = document.createElement("tr");

      if (i == 0) {
        const thId = document.createElement("th");
        const thName = document.createElement("th");
        const thEmail = document.createElement("th");
        const thPhone = document.createElement("th");
        const thCompany = document.createElement("th");

        thId.textContent = "ID";
        thName.textContent = "Name";
        thEmail.textContent = "Email";
        thPhone.textContent = "Phone No";
        thCompany.textContent = "Company Name";

        row.appendChild(thId);
        row.appendChild(thName);
        row.appendChild(thEmail);
        row.appendChild(thPhone);
        row.appendChild(thCompany);

        store2.appendChild(row);
      }

      if (i > 0) {
        const id = document.createElement("td");
        const name = document.createElement("td");
        const email = document.createElement("td");
        const phone = document.createElement("td");
        const company = document.createElement("td");

        id.innerHTML = value.id;
        name.innerHTML = value.name;
        email.innerHTML = value.email;
        phone.innerHTML = value.phone;
        company.innerHTML = value.company.name;

        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(phone);
        row.appendChild(company);

        store2.appendChild(row);
      }
    }
  };
  xhttp.open(
    "GET",
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11"
  );
  xhttp.send();
}
