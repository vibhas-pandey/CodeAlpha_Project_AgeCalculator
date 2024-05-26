function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
  
    if (days < 0) {
      var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days = prevMonth.getDate() - dob.getDate() + today.getDate();
      months--;
    }
  
    var result = '';
  
    if (years > 0) {
      result += years + ' year(s), ';
    }
  
    if (months > 0) {
      result += months + ' month(s), ';
    }
  
    result += days + ' day(s)';
  
    document.getElementById('result').innerHTML = 'Your exact age is: ' + result;
  }