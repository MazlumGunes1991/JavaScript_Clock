    // Print the entered name
let name = prompt("Adiniz Nedir?");
document.getElementById("myName").innerHTML = `<strong>${name}</strong>`;

// Receiving time information and printing it on the screen

function showTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    minute = checkTime(minute);
    second = checkTime(second);

    document.getElementById('myClock').innerHTML =  hour + ":" + minute + ":" + second;
    setTimeout(showTime, 1000);
    
  }
  
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

showTime()

