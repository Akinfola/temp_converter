// Functional approach for temperature conversions
const conversions = {
    Celsius: {
      Fahrenheit: (temp) => temp * 9/5 + 32,
      Kelvin: (temp) => temp + 273.15,
    },
    Fahrenheit: {
      Celsius: (temp) => (temp - 32) * 5/9,
      Kelvin: (temp) => (temp - 32) * 5/9 + 273.15,
    },
    Kelvin: {
      Celsius: (temp) => temp - 273.15,
      Fahrenheit: (temp) => (temp - 273.15) * 9/5 + 32,
    },
  };
  
  const enableButton = ({ temperature, fromUnit, toUnit }) =>
    Boolean(temperature && fromUnit && toUnit);
  
//   const convertTemperature = ({ temperature, fromUnit, toUnit }) => {
//     if (fromUnit === toUnit) return temperature; // Same unit, no conversion
//     return conversions[fromUnit]?.[toUnit]?.(parseFloat(temperature)) || NaN;
//   };
  
  // DOM-related functions
  const updateResult = (temp, from, to, converted) => {
    const resultElement = document.getElementById("result");
    resultElement.textContent =
      isNaN(converted)
        ? "Invalid conversion. Please check your input."
        : $('temp') ,$('from') ,is ,$('converted.toFixed(2)') ,$('to');
  };
  
  const handleInputChange = () => {
    const temperature = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const convertBtn = document.getElementById("convertBtn");
  
    const isEnabled = enableButton({ temperature, fromUnit, toUnit });
    convertBtn.disabled = !isEnabled;
  };
  
  const handleConvert = () => {
    const temperature = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    const convertedTemp = convertTemperature({ temperature, fromUnit, toUnit });
    updateResult(temperature, fromUnit, toUnit, convertedTemp);
  };
  
  // Event listeners
  document.getElementById("temperature").addEventListener("input", handleInputChange);
  document.getElementById("fromUnit").addEventListener("change", handleInputChange);
  document.getElementById("toUnit").addEventListener("change", handleInputChange);
  document.getElementById("convertBtn").addEventListener("click", handleConvert);

// second code 
const temperatureInput = document.getElementById("temperature");
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitSelect = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Enable/disable button
const enableConvertButton = () => {
  const isFilled =
    temperatureInput.value &&
    fromUnitSelect.value &&
    toUnitSelect.value &&
    fromUnitSelect.value !== toUnitSelect.value;
  convertBtn.disabled = !isFilled;
};

// Conversion logic
const convertTemperature = (temp, fromUnit, toUnit) => {
  if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
    return temp * 9/5 + 32;
  } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
    return temp + 273.15;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
    return (temp - 32) * 5/9;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
    return (temp - 32) * 5/9 + 273.15;
  } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
    return temp - 273.15;
  } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
    return (temp - 273.15) * 9/5 + 32;
  } else {
    return temp; // Same unit
  }
};

// Display result
const displayResult = () => {
  const temp = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  const convertedTemp = convertTemperature(temp, fromUnit, toUnit);
  result.textContent = `${temp} ${fromUnit} is ${convertedTemp.toFixed(
    2
  )} ${toUnit}`;
};

// Event listeners
temperatureInput.addEventListener("input", enableConvertButton);
fromUnitSelect.addEventListener("change", enableConvertButton);
toUnitSelect.addEventListener("change", enableConvertButton);
convertBtn.addEventListener("click", displayResult);