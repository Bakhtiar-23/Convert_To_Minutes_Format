const convertToMinutesFormat = (hoursInHundredths) => {
    const hours = Math.floor(hoursInHundredths);
    const minutes = Math.round((hoursInHundredths % 1) * 60);
  
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
    return `${formattedHours}:${formattedMinutes}`;
  };
  
  const convertToMinutes = () => {
    const hoursInput = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("result");
  
    if (hoursInput && !isNaN(parseFloat(hoursInput))) {
      const convertedTime = convertToMinutesFormat(parseFloat(hoursInput));
      resultDiv.textContent = `${hoursInput} hours are in hours and minutes equal to ${convertedTime}`;
    } else {
      resultDiv.textContent = "Invalid input. Please enter a valid number.";
    }
  };
  