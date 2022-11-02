var x = setInterval(function() {
    // Set the date we're counting down to
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
  
    //time sence start of day
    var todayf = new Date();
    var today_abs = new Date();
    today_abs.setHours(0);
    today_abs.setMinutes(0);
    today_abs.setSeconds(0);
    today_secs = (todayf.getTime() - today_abs.getTime()) / 1000;
  
    if (today_secs < 27300){
      var meta = "School Has Not Started Yet";
      var countDownDate = new Date(today + " 07:35:00 AM").getTime();
      var fmeta = "";
    }
    if (today_secs > 27300 & today_secs < 30540){
      var meta = "First Period"
      var countDownDate = new Date(today + " 08:29:00 AM").getTime();
      var fmeta = "08:29:00 AM";
    }
    if (today_secs > 30540 & today_secs < 33720){
      var meta = "Second Period"
      var countDownDate = new Date(today + " 09:22:00 AM").getTime();
      var fmeta = "09:22:00 AM";
    }
    if (today_secs > 33720 & today_secs < 36900){
      var meta = "Third Period"
      var countDownDate = new Date(today + " 10:15:00 AM").getTime();
      var fmeta = "10:15:00 AM";
    }
    if (today_secs > 36900 & today_secs < 40080){
      var meta = "Fourth Period"
      var countDownDate = new Date(today + " 11:08:00 AM").getTime();
      var fmeta = "11:08:00 AM";
    }
    if (today_secs > 40080 & today_secs < 43260){
      var meta = "Fifth Period"
      var countDownDate = new Date(today + " 12:01:00 PM").getTime();
      var fmeta = "12:01:00 PM";
    }
    if (today_secs > 43260 & today_secs < 45840){
      var meta = "Sixth Period (Lunch)"
      var countDownDate = new Date(today + " 12:44:00 PM").getTime();
      var fmeta = "12:44:00 PM";
    }
    if (today_secs > 45840 & today_secs < 49020){
      var meta = "Seventh Period"
      var countDownDate = new Date(today + " 01:37:00 PM").getTime();
      var fmeta = "01:37:00 PM";
    }
    if (today_secs > 49020 & today_secs < 52200){
      var meta = "Eight Period"
      var countDownDate = new Date(today + " 02:30:00 PM").getTime();
      var fmeta = "02:30:00 PM";
    }
    if (today_secs > 52200){
      var meta = "School Has Ended"
      var countDownDate = new Date(today + " 02:30:00 PM").getTime();
      var fmeta = "";
    }
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (meta == "School Has Ended"){
      document.getElementById("meta").innerHTML = meta;
      document.getElementById("demo").innerHTML = "";
    }
    else if (meta == "School Has Not Started Yet") {
      document.getElementById("meta").innerHTML = meta;
      document.getElementById("fmeta").innerHTML = "School will start at 7:35:00 PM";
    } else{
      document.getElementById("meta").innerHTML = "It is " + meta;
      document.getElementById("fmeta").innerHTML = "The period ends at " + fmeta;
    }
  
    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "N/A";
    }
  }, 1000);
  
  //More info stuff
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  
  //Detect Phones
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var url= "mobile/period.html"
    window.location = url;
  }

  setInterval();