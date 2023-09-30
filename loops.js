for (let i = 0; i < 10; i++) {
    console.log ("Hawo")
    
}

let count = 0;

while (count< 10) {
    console.log("Mohamed")
    count++
}

let today = "Saturday"

if (today == "Saturday") {
    console.log ("Come to the Coding School")
} else if (today == "Sunday") {
    console.log ("Sleep")
} else if (today == "Monday") {
    console.log ("Go to School")
} else {
    console.log("Do whatever you like")
}


switch (today) {
    case "Sturday":
        console.log("Coding time...")
        break;
    case "Sunday":
        console.log("Sleeping time...")
        break;
    case "Monday":
        console.log("School time...")
        break;

    default:
        console.log("Free time...")
        break;
}




do{
    console.log("Noor")
    count++;
} while (count <10);