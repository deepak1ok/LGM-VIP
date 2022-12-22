let name1 = document.querySelector("#name");
let email = document.querySelector("#email");
let website = document.querySelector("#website");
let image = document.querySelector("#image_link");
let genders = document.querySelectorAll("input[type=radio]");
let skills = document.querySelectorAll("input[type=checkbox]");
let submit = document.querySelector("#submit");
let clear = document.querySelector("#clear");


function clearAll() {
    name1.value = '';
    email.value = '';
    website.value = '';
    image.value = '';
    for (let gen of genders) {
        gen.checked = false;
    }
    for (let skill of skills) {
        skill.checked = false;
    }
}

function enroll_students() {
    var tr = document.createElement('tr');
    var td0 = tr.appendChild(document.createElement('td'));
    td0.classList.add('.padding_details');
    td0.classList.add('.select_td');
    var td1 = tr.appendChild(document.createElement('td'));
    td1.classList.add('.padding_details');
    var td2 = tr.appendChild(document.createElement('td'));
    td2.classList.add('img-col');
    tr.classList.add('.row-details');

    var check = document.createElement('input');
    check.type = 'checkbox';
    check.name = 'input_check';

    td0.appendChild(check);
    td0.style.textAlign = 'center';

    //name
    let p_name = document.createElement('p')
    p_name.innerHTML = `${name1.value}`;

    //gender
    let p_gen = document.createElement('p')
    for (let gen of genders) {
        // console.log(gen.id);
        if (gen.checked === true) {
            if (gen.id === 'M') {
                p_gen.innerHTML = "Male";
            } else {
                p_gen.innerHTML = "Female";
            }
        }

    }

    //email
    let p_email = document.createElement('p');
    p_email.innerHTML = `${email.value}`;

    //website
    let a_website = document.createElement('a');
    a_website.href = `https://${website.value}`;
    a_website.target = "_blank"
    a_website.innerHTML = `https://${website.value}`;

    //skills
    let p_skill = document.createElement('p');
    for (let skill of skills) {
        if (skill.checked == true) {
            p_skill.innerHTML += `${skill.id}, `;

        }
    }

    // col-1
    td1.appendChild(p_name);
    td1.appendChild(p_gen);
    td1.appendChild(p_email);
    td1.appendChild(a_website);
    td1.appendChild(p_skill);

    //image
    let img = document.createElement('img');
    img.src = `${image.value}`;
    img.style.width = "85px";
    img.style.height = "100px";
    //col-2
    td2.appendChild(img);
    document.getElementById('tb2').appendChild(tr);

}
document.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        enroll_students();
    }
});
submit.addEventListener('click', (e) => {
    enroll_students();
})


function delete_details() {
    var checks = document.getElementsByName('input_check');

    for (let c = 0; c < checks.length; c++) {

        if (checks[c].checked == true) {
            checks[c].parentElement.parentElement.remove();
            checks = document.getElementsByName('input_check');
            c--;
        }
    }
}