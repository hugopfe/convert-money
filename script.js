const convertButton = document.querySelector(".convert-button");

function convertValues() {
  const inputCurrencyValue = document.querySelector("#input-currency").value; // Value entered by user
  const currencyValueToConvert = document.querySelector(
    "#currency-value-to-convert", // Value to convert paragraph
  );
  const currencyValueConverted = document.querySelector(
    "#currency-value-converted", // Value converted paragraph
  );

  const dolarToday = 5;

  const convertedValue = inputCurrencyValue / dolarToday;

  currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
  currencyValueConverted.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedValue);
}

convertButton.addEventListener("click", convertValues);
