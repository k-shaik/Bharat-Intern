function convertTemperature() {
            const inputTemp = document.getElementById("inputTemp").value;
            const unit = document.getElementById("unit").value;
            const result = document.getElementById("result");

            if (unit === "celsius") {
                const fahrenheit = (inputTemp * 9/5) + 32;
                result.textContent = `${inputTemp}°C is ${fahrenheit.toFixed(2)}°F`;
            } else {
                const celsius = (inputTemp - 32) * 5/9;
                result.textContent = `${inputTemp}°F is ${celsius.toFixed(2)}°C`;
            }
        }