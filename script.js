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
  const currencyConvertedFlag = document.querySelector(
    "#currency-converted-flag",
  )
  const currencyConvertedName = document.querySelector(
    ".currency-converted-name",
  )

  const currencyInfos = {}

  function setCurrencyInfos(currencyValue, currencyName, locale, currency) {
    currencyInfos.valueToday = currencyValue
    currencyInfos.name = currencyName
    currencyInfos.imgPath = `./assets/${currencySelect.value}.png`
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
      setCurrencyInfos(4, "Dólar americano", "en-US", "USD")
      break
    case "euro":
      setCurrencyInfos(5, "Euro", "de-DE", "EUR")
      break
    case "libra":
      setCurrencyInfos(3, "Libra", "en-US", "GBP")
      break
    case "bitcoin":
      setCurrencyInfos(310863.161, "Bitcoin", "en-US", "XBT")
      break
  }

  const convertedValue = inputCurrencyValue / currencyInfos.valueToday

  currencyConvertedFlag.src = currencyInfos.imgPath
  currencyConvertedName.innerText = currencyInfos.name

  currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue)
  currencyValueConverted.innerText = new Intl.NumberFormat(
    currencyInfos.format.name,
    currencyInfos.format.options,
  ).format(convertedValue)
}

convertButton.addEventListener("click", convertValues)
