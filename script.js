const sort_btn = document.getElementById("sort_btn");
const filter_select = document.getElementById("filter_select");

const img_cont = document.getElementById("img_cont");
// Card content
const btn = document.getElementById("btn");

// Desc content
const desc_cont = document.getElementById("desc_cont");
const mnmt_name = document.getElementById("mnmt_name");
const city = document.getElementById("city");
const country = document.getElementById("country");
const desc = document.getElementById("desc");
const iframe = document.getElementById("map");

// change le contenu général en fonction de l'objet num dans json_data
function change_content(num) {
    change_desc_content(num);
    //emphasis(num);
    desc_cont.scrollIntoView({behavior: 'smooth'});
}

fetch('./data.json')         // MODIFICATIONS POUR APRES
.then(response => response.json())
.then(data => {
    json_data = Object.values(data);
    change_desc_content(Math.ceil(Math.random() * json_data.length));
    init();
})
.catch(error => {
    console.error('Erreur lors du fetch :', error)
});

// change le contenu de la description et de la carte en fonction du monument
function change_desc_content(num) {
    mnmt_name.innerHTML = json_data[num-1].name;
    city.innerHTML = json_data[num-1].city + ",";
    country.innerHTML = json_data[num-1].country;
    desc.innerHTML = json_data[num-1].desc;
    iframe.setAttribute("src", json_data[num-1].iframe);
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
        create_grid(random_sort(obj));
        sort_btn.innerHTML = "Trier par ordre alphabétique";
    } else if (sort_click_count == 2) {
        create_grid(abc_sort(obj));
        sort_btn.innerHTML = "Trier aléatoirement";
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
    if (country == "default") {return json_data;}
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
    create_grid(random_sort(json_data));

    list_countries(json_data)     // liste les pays dans le select
        .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }))
        .forEach((country) => {
        const option = document.createElement("option");
        option.value = country;
        option.innerHTML = country;
        filter_select.appendChild(option);
    });
}

// crée une grid adaptée au nombre d'objets enfants dans obj et la remplit avec chacun de leur contenu
function create_grid(obj) {
    document.querySelectorAll(".monument").forEach((elt) => {
        img_cont.removeChild(elt);
    });
    for (e in obj) {
        const section = document.createElement("section");
        section.classList.add("monument");
        const btn = document.createElement("button");
        btn.classList.add("btn");
        obj[e].shortName != undefined ? btn.innerHTML = obj[e].shortName : btn.innerHTML = obj[e].name;
        btn.setAttribute("onclick", "change_content("+obj[e].id+")");
        section.appendChild(btn);
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.setAttribute("src", obj[e].image);
        img.setAttribute("alt", obj[e].name);
        img.setAttribute("title", obj[e].name);
        img.setAttribute("onclick", "change_content("+obj[e].id+")");
        img.classList.add("mnmt_img");
        if (obj[e].id == 1) {img.id=("giza");}
        if (obj[e].id == 9) {img.id=("christ");}
        if (obj[e].id == 12) {img.id=("moai"); img.setAttribute("onmouseover", "easter_egg(this)");}
        if (obj[e].id == 14) {img.id=("stonehenge");}
        if (obj[e].id == 16) {img.id=("potala");}
        figure.appendChild(img);
        section.appendChild(figure);
        img_cont.appendChild(section);
    }
}

// EASTER EGG
function easter_egg(elt) {
    elt.src = "./images/chad.jpg";
    elt.style.objectPosition="0 0";
}


// TODO :
// clic monument : conduit vers la desc + map
// pb change_content highlight le mauvais monument
// changer les src des iframes
// font size : clamp or w/ media queries