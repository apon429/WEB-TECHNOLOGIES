
function add(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let d = document.getElementById("display");

    try {
        if (!/^[0-9+\-*/. ]+$/.test(d.value)) {
            throw new Error();
        }

        d.value = eval(d.value);
    } catch {
        d.value = "Error";
    }
}
