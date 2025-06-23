let inputs = document.querySelectorAll(".grade");
let button = document.querySelector(".input-btn");

button.addEventListener("click", calculateAverage);


function calculateAverage() {
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
            }
            sum += Number(value);
            count++;
        }
    }
    if (!hasValue) {
        let alertOrange = document.createElement("p");
        alertOrange.classList.add("alert-orange");
        alertOrange.textContent = "Введіть хоча б одну оцінку!";
        document.body.appendChild(alertOrange);
    } else if (isInvalid) {
        let alertRed = document.createElement("p");
        alertRed.classList.add("alert-red");
        alertRed.textContent = "Оцінки мають бути в діапазоні від 1 до 12!";
        document.body.appendChild(alertRed);

        for (let input of inputs) {
            if (input.value !== "") {
                let number = Number(input.value);
                if (number < 1 || number > 12) {
                    input.classList.add("border-red");
                } else {
                    input.classList.remove("border-red");
                }
            }


        }

    } else {
        let average = sum / count;
        let result = document.createElement("p");
        result.classList.add("result");
        result.textContent = `Середній бал: ${average}`;
        document.body.appendChild(result);
    }
}







