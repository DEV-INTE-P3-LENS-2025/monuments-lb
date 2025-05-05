const mnmt_name = document.getElementById("mnmt_name");
const place = document.getElementById("place");
const desc = document.getElementById("desc");
const iframe = document.getElementById("map");

function change_content(num) {
    if (num == 1) {
        mnmt_name.innerHTML = "La Grande Pyramide de Gizeh";
        place.innerHTML = "Gizeh, Égypte";
        desc.innerHTML = "Située sur le plateau de Gizeh, près du Caire, la Grande Pyramide est l'un des monuments les plus emblématiques de l'Égypte ancienne et du monde entier. Construite vers 2 560 av. J.-C. pour servir de tombeau au pharaon Khéops, elle était à l'origine haute de près de 147 mètres, ce qui en faisait la plus haute construction humaine pendant près de 4 000 ans. Composée de millions de blocs de pierre pesant chacun plusieurs tonnes, la pyramide impressionne encore aujourd'hui par sa précision et son gigantisme. Elle est entourée de deux autres pyramides majeures et du célèbre Sphinx, formant un ensemble archéologique unique qui continue de fasciner archéologues et visiteurs.";
    }
    else if (num == 2) {
        mnmt_name.innerHTML = "Machu Picchu";
        place.innerHTML = "Cusco, Pérou";
        desc.innerHTML = "Le Machu Picchu est une ancienne cité inca perchée à environ 2 430 mètres d'altitude dans la cordillère des Andes, au Pérou. Redécouverte en 1911 par l'explorateur Hiram Bingham, cette cité mystique, longtemps restée cachée aux yeux du monde, offre un témoignage exceptionnel de la civilisation inca. On y trouve des temples, des terrasses agricoles, des fontaines et des bâtiments de pierre finement assemblés sans mortier. Son emplacement spectaculaire, entouré de montagnes escarpées et de forêts tropicales, ajoute à son mystère et à sa beauté. Le Machu Picchu est aujourd'hui classé au patrimoine mondial de l'UNESCO et considéré comme l'une des sept nouvelles merveilles du monde.";
    }
    else if (num == 3) {
        mnmt_name.innerHTML = "Porte de Brandebourg";
        place.innerHTML = "Berlin, Allemagne";
        desc.innerHTML = "Située à Berlin, la Porte de Brandebourg est l'un des symboles les plus forts de l'histoire allemande et européenne. Érigée entre 1788 et 1791 dans un style néoclassique inspiré des monuments de la Grèce antique, elle marquait autrefois l'entrée de la ville. Couronnée par le quadrige, un char tiré par quatre chevaux, elle est devenue le théâtre de nombreux événements historiques majeurs. Pendant la guerre froide, elle se trouvait dans la zone séparant Berlin-Est et Berlin-Ouest, au pied du Mur de Berlin, et symbolisait alors la division du pays. Après la chute du Mur en 1989, elle est redevenue un puissant symbole de paix, de liberté et de réunification.";
    }
    else if (num == 4) {
        mnmt_name.innerHTML = "Opéra de Sydney";
        place.innerHTML = "Sydney, Australie";
        desc.innerHTML = "L'Opéra de Sydney, situé sur la baie de Sydney en Australie, est l'un des exemples les plus remarquables de l'architecture moderne du XXe siècle. Conçu par l'architecte danois Jørn Utzon, il a été inauguré en 1973 après plus d'une décennie de travaux complexes. Sa silhouette audacieuse, formée de coques blanches évoquant des voiles ou des coquillages, s'intègre harmonieusement dans le paysage maritime et attire chaque année des millions de visiteurs. L'opéra abrite plusieurs salles de spectacle et accueille une grande variété d'événements artistiques : opéras, concerts, pièces de théâtre et ballets. Classé au patrimoine mondial de l'UNESCO, il incarne la créativité, la culture et l'ouverture australiennes.";
    }
    else if (num == 5) {
        mnmt_name.innerHTML = "Tour Eiffel";
        place.innerHTML = "Paris, France";
        desc.innerHTML = "Dominant la ville de Paris depuis plus d'un siècle, la Tour Eiffel est un symbole mondialement reconnu de la France. Construite par l'ingénieur Gustave Eiffel à l'occasion de l'Exposition universelle de 1889, elle devait initialement être démontée après l'événement, mais elle fut finalement conservée et est devenue un monument emblématique. Haute de 330 mètres avec ses antennes actuelles, elle fut longtemps la plus haute structure du monde. Entièrement composée de fer puddlé, elle étonne par sa légèreté apparente malgré sa masse imposante. Chaque année, des millions de visiteurs montent à ses différents étages pour admirer des vues spectaculaires sur la capitale, de jour comme de nuit. Elle incarne le génie technique, l'audace artistique et l'élégance parisienne.";
    }

    change_map(num);
    emphasis(num);
}

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

change_content(1); // Initialisation de la page avec le premier monument


/** IFrames Google Maps
 * 
 * Pyramide de Gizeh : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.339301213525!2d31.132635375111906!3d29.97688346642082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sfr!4v1746449537853!5m2!1sen!2sfr"
 * Machu Picchu : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9873295191783!2d-72.54783702418347!3d-13.163198787170083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sHistoric%20Sanctuary%20of%20Machu%20Picchu!5e0!3m2!1sen!2sfr!4v1746450138303!5m2!1sen!2sfr"
 * Porte de Brandebourg : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2327.684475322767!2d13.376948940856373!3d52.51612600922271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sfr!4v1746450244136!5m2!1sen!2sfr"
 * Opéra de Sydney : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7886.3632216911665!2d151.2155078394323!3d-33.85739241316858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20Opera%20House!5e0!3m2!1sen!2sfr!4v1746450300554!5m2!1sen!2sfr"
 * Tour Eiffel : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.1993152049118!2d2.2948744448593037!3d48.8582704231889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1746449432933!5m2!1sen!2sfr"
 * 
 */