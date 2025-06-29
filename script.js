let inputs = document.querySelectorAll(".grade");
let button = document.querySelector(".input-btn");

button.addEventListener("click", displayAverage);

function displayAverage() {
    document.querySelectorAll(".alert-orange, .alert-red, .result").forEach(el => el.remove());

    let hasValue = false;
    let isInvalid = false;
    let sum = 0;
    let count = 0;


    for (let input of inputs) {
        let value = input.value;
        if (value !== "") {
            hasValue = true;
            let number = Number(value)


            if (number < 1 || number > 12) {
                isInvalid = true;
                input.classList.add("border-red");
            } else {
                input.classList.remove("border-red");
            }
            sum += Number(value);
            count++;
        }
    }
    if (!hasValue) {
        displayWarning();
    } else if (isInvalid) {
        displayErrors();
    } else {
        calculateAverage(sum, count);
    }


    function displayWarning() {
        let alertOrange = createParagraph();
        alertOrange.classList.add("alert-orange");
        alertOrange.textContent = "Введіть хочі б одну оцінку"
        addElementToBody(alertOrange);
    }

    function displayErrors() {
        let alertRed = createParagraph();
        alertRed.classList.add("alert-red");
        alertRed.textContent = "Оцінки мають бути в діапазоні від 1 до 12!"
        addElementToBody(alertRed);
    }

    function createParagraph() {
        return document.createElement("p");
    }

    function addElementToBody(element) {
        document.body.appendChild(element);
    }

    function calculateAverage(sum, count) {
        let average = sum / count;
        let result = document.createElement("p");
        result.classList.add("result");
        result.textContent = `Середній бал: ${average}`;
        document.body.appendChild(result);
    }
}



