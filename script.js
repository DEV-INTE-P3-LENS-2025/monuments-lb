const mnmt_name = document.getElementById("mnmt_name");
const city = document.getElementById("city");
const country = document.getElementById("country");
const desc = document.getElementById("desc");
const iframe = document.getElementById("map");

let json_data;

function change_content(num) {
    console.log(json_data[num-1]);
    mnmt_name.innerHTML = json_data[num-1].name;
    city.innerHTML = json_data[num-1].city;
    country.innerHTML = json_data[num-1].country;
    desc.innerHTML = json_data[num-1].desc;

    change_map(num);
    emphasis(num);
}

fetch('./data.json')
.then(response => response.json())
.then(data => {
    json_data = Object.values(data)
    change_content(3)
})
.catch(error => {
    console.error('Erreur lors du fetch :', error)
});

function change_map(num) {
    const iframe_sources = 
    ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.339301213525!2d31.132635375111906!3d29.97688346642082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sfr!4v1746449537853!5m2!1sen!2sfr", 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9873295191783!2d-72.54783702418347!3d-13.163198787170083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sHistoric%20Sanctuary%20of%20Machu%20Picchu!5e0!3m2!1sen!2sfr!4v1746450138303!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2327.684475322767!2d13.376948940856373!3d52.51612600922271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sfr!4v1746450244136!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7886.3632216911665!2d151.2155078394323!3d-33.85739241316858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20Opera%20House!5e0!3m2!1sen!2sfr!4v1746450300554!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.1993152049118!2d2.2948744448593037!3d48.8582704231889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1746449432933!5m2!1sen!2sfr"];

    iframe.setAttribute("src", iframe_sources[num - 1]);
}

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