const loggedIn = true;
const Dabitcard = false;

 if (loggedIn && Dabitcard) {   // must both are true then the code excute
    console.log("Welcome..");
    console.log("purchse your course");

} else {
    console.log("please Logged In first");
}

if (loggedIn || Dabitcard) {   //if one condition is true ,the cod eis excute  

    console.log("Welcome..");
    console.log("purchse your course");
}

else {
    console.log("please Logged In first");
}


