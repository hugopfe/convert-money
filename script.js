const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("#select-target-currecy")

function convertValues() {
  const inputCurrencyValue = document.querySelector("#input-currency").value // Value entered by user
  const currencyValueToConvert = document.querySelector(
    "#currency-value-to-convert", // Value to convert paragraph
  )
  const currencyValueConverted = document.querySelector(
    "#currency-value-converted", // Value converted paragraph
  )

  const currencyInfos = {}

  function setCurrencyInfos(currencyValue, locale, currency) {
    currencyInfos.valueToday = currencyValue
    currencyInfos.format = {
      lang: locale,
      options: {
        style: "currency",
        currency: currency,
      },
    }
  }

  switch (currencySelect.value) {
    case "dollar":
      setCurrencyInfos(4, "en-US", "USD")
      break
    case "euro":
      setCurrencyInfos(5, "de-DE", "EUR")
      break
    case "libra":
      setCurrencyInfos(3, "en-US", "GBP")
      break
    case "bitcoin":
      setCurrencyInfos(310863.161, "en-US", "XBT")
      break
  }

  const convertedValue = inputCurrencyValue / currencyInfos.valueToday

  currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue)
  currencyValueConverted.innerText = new Intl.NumberFormat(
    currencyInfos.format.name,
    currencyInfos.format.options,
  ).format(convertedValue)
}

function changeCurrency() {
  const currencyConvertedFlag = document.querySelector(
    "#currency-converted-flag",
  )
  const currencyConvertedName = document.querySelector(
    ".currency-converted-name",
  )

  function updateCurrency(name) {
    currencyConvertedFlag.src = `./assets/${currencySelect.value}.png`
    currencyConvertedName.innerText = name
  }

  switch (currencySelect.value) {
    case "dollar":
        updateCurrency("Dólar americano")
      break
    case "euro":
        updateCurrency("Euro")
      break
    case "libra":
        updateCurrency("Libra")
      break
    case "bitcoin":
        updateCurrency("BitCoin")
      break
  }

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
