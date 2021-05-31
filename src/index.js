const arr = ["Sociedad","1","3","2"]

function nrandom(min, max) {
    return  Math.floor(Math.random() * (max - min)) + min;
}

const sayHello = () => {
    var text1 = document.getElementById("text1");
    console.log(arr[nrandom(0,arr.length)]);
    text1.innerHTML = arr[nrandom(0,arr.length)];
}