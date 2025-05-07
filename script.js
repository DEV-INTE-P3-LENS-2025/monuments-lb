const mnmt_name = document.getElementById("mnmt_name");
const city = document.getElementById("city");
const country = document.getElementById("country");
const desc = document.getElementById("desc");
const iframe = document.getElementById("map");
const sort_btn = document.getElementById("sort_btn");
const filter_select = document.getElementById("filter_select");

// change le contenu général en fonction de l'objet num dans json_data
function change_content(num) {
    change_desc_content(num);
    change_map(num);
    emphasis(num);

    // faire une version avec change_content(obj, num)
}

fetch('./data.json')         // MODIFICATIONS POUR APRES
.then(response => response.json())
.then(data => {
    json_data = Object.values(data)
    // let json_length = json_data.length;
    // A CHANGER MATH RANDOM * 5 PAR MATH RANDOM * json_length
    // change_content(Math.ceil(Math.random()*json_length))
    change_content(Math.ceil(Math.random()*5))
    // A CHANGER MATH RANDOM * 5 PAR MATH RANDOM * json_length
    init();
})
.catch(error => {
    console.error('Erreur lors du fetch :', error)
});

function change_desc_content(num) {
    mnmt_name.innerHTML = json_data[num-1].name;
    city.innerHTML = json_data[num-1].city + ",";
    country.innerHTML = json_data[num-1].country;
    desc.innerHTML = json_data[num-1].desc;
}

// change le contenu de la carte en fonction du monument
function change_map(num) {
    const iframe_sources = 
    ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.339301213525!2d31.132635375111906!3d29.97688346642082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sfr!4v1746449537853!5m2!1sen!2sfr", 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9873295191783!2d-72.54783702418347!3d-13.163198787170083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sHistoric%20Sanctuary%20of%20Machu%20Picchu!5e0!3m2!1sen!2sfr!4v1746450138303!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2327.684475322767!2d13.376948940856373!3d52.51612600922271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sfr!4v1746450244136!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7886.3632216911665!2d151.2155078394323!3d-33.85739241316858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20Opera%20House!5e0!3m2!1sen!2sfr!4v1746450300554!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.1993152049118!2d2.2948744448593037!3d48.8582704231889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1746449432933!5m2!1sen!2sfr"];

    iframe.setAttribute("src", iframe_sources[num - 1]);
}

// change la classe greyscale des images pour les mettre en noir et blanc
function emphasis(num) {
    const table= document.querySelectorAll(".mnmt_img");
    for (let i = 0; i < table.length; i++) {
        if (i == num - 1) {
            table[i].classList.remove("greyscale");
        } else {
            table[i].classList.add("greyscale");
        }
    }
}

// gère les fonctions que le bouton de tri appelle
let sort_click_count = 1;
function sort_btn_onClick(obj) {
    sort_click_count++;
    // pour que le compteur ne dépasse pas 2
    if (sort_click_count==3) {sort_click_count=1;}
    if (sort_click_count == 1) {
        random_sort(obj);
        sort_btn.innerHTML = "Trier aléatoirement";
    } else if (sort_click_count == 2) {
        abc_sort(obj);
        sort_btn.innerHTML = "Trier par ordre alphabétique";
    }
}

// mélange les monuments de manière aléatoire
function random_sort(obj) {
    let table = [];
    for (let i = 1; i <= obj.length; i++) {
        table.push(i);
    }
    let random_order = [];
    for (let j = table.length; j > 0; j--) {
        let random_num = Math.floor(Math.random() * table.length);
        random_order.push(table[random_num]);
        // enlève le nombre de la liste pour ne pas le réutiliser
        table.splice(random_num, 1);
    }
    let random_sorted_objs = [];
    random_order.forEach ((k) => random_sorted_objs.push(json_data[k-1]));
    return random_sorted_objs;
}

// trie les monuments par ordre alphabétique
function abc_sort(obj) {
    let names = [];
    for (let i = 0; i < obj.length; i++) {
        names.push(obj[i].name);
    }
    names.sort();
    let abc_order = [];
    for (let j = 0; j < names.length; j++) {
        for (let k = 0; k < obj.length; k++) {
            if (names[j] == obj[k].name) {
                abc_order.push(obj[k].id);
            }
        }
    }
    let abc_sorted_objs = [];
    abc_order.forEach ((l) => abc_sorted_objs.push(json_data[l-1]));
    return abc_sorted_objs;
}

// filtre les monuments par pays
function country_filter(obj) {
    let country_filtered_objs = [];
    const country = filter_select.value;
    obj.forEach((elt) => {
        if (elt.country == country) {
            country_filtered_objs.push(elt);
        }
    });
    return country_filtered_objs;
}

// liste les pays des monuments dans obj
function list_countries(obj) {
    let countries = [];
    obj.forEach((elt) => {
        if (!countries.includes(elt.country)) {
            countries.push(elt.country);
        }
    });
    return countries;
}

// Initialisation
function init() {
    list_countries(json_data)     // liste les pays dans le select
        .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }))
        .forEach((country) => {
        const option = document.createElement("option");
        option.value = country;
        option.innerHTML = country;
        filter_select.appendChild(option);
    });
}

// change le contenu de du container cont par le contenu de l'objet json monument*num* (bouton + img)
function change_case(cont, num) {

}

// order : random avec une table qui prend un nombre random et qui l'enlève de la liste
// sort : bouton on clique pls fois pour cycle entre les choix
// filter : input liste pays des monuments
// liste pays : from all elements in json append pays when not in table
// clic mnmt : conduit vers la desc + map
// font size : clamp or w/ media queries