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