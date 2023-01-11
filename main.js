const drink = prompt("Quelle boisson souhaitez-vous commander (eau, jus d'orange, limonade, café, thé) ?");
switch (drink) {
    case 'eau' :
        console.log("Voici votre eau. Bonne dégustation");
        break;
    case "jus d'orange" :
        console.log("Voici votre jus d'orange. Bonne dégustation");
        break;
    case "limonade" :
        console.log("Voici votre limonade. Bonne dégustation");
        break;
    case "café" :
        console.log("Voici votre café. Bonne dégustation");
        break;
    case "thé" :
        console.log("Voici votre thé. Bonne dégustation");
        break;
    default :
        console.log("Nous n'avons pas cette boisson");
        break;
}