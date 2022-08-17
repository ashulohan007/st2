// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

let store2 = document.getElementById("tables");
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
