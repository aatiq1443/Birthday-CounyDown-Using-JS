  endDate = "10 May 2023 00:00 AM"

  document.getElementById("end-date").innerHTML = endDate;

  const inputs = document.querySelectorAll("input")


  function clock() {
      const end = new Date(endDate)
      const now = new Date()
          //   console.log(end)
          //   console.log(now)
      const diff = (end - now) / 1000;
      //   console.log(diff);
      if (diff < 0) return;
      //   convert into daYS
      inputs[0].value = Math.floor(diff / 3600 / 24);

      // conert into hours
      inputs[1].value = Math.floor(diff / 3600 % 24);

      //   convert into minutes
      inputs[2].value = Math.floor(diff / 60) % 60;

      //   convert into seconds
      inputs[3].value = Math.floor(diff) % 60;
  }


  //   1 min = 60 seconds;
  //   1 hr = 60 minutes;
  //   1 hr = 3600 seconds;
  //   1 sec = 1 / 3600 hr;
  //   1 day = 24 hr;


  clock()

  setInterval(() => {
      clock();
  }, 1000);