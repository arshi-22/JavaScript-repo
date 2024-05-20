function timeConversion(timeString) {
  let time = timeString.toLowerCase().split(":");
  if (timeString.toLowerCase().includes("pm")) {
    time[0] = (parseInt(time[0]) != 12) ? (parseInt(time[0]) + 12).toString():time[0];
    timeString = time.join(":").replace("pm", "");
    return timeString;
  } else {
    time[0] = time[0] == 12 ? "00" : time[0];
    timeString = time.join(":").replace("am", "");
    return timeString;
  }
}

console.log(timeConversion("12:45:13pm"));
