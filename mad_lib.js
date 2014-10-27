var name, chore, wakeup, madLib; // just declaring variables, they don't have a value or a datatype yet

name = prompt("What is your name?");
chore = prompt("What is your most dreaded chore?");
wakeup = prompt("What time do you wake up in the morning?");

wakeup = parseFloat(wakeup) - 2;
madLib = "Mom says: " + name + ", you will be " + chore + " tomorrow morning at " + wakeup + " am.";

console.log(madLib);
