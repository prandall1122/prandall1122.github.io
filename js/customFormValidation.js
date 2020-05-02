function validateForm() {
  console.log("validating form");
  if($('#subject').val().length) {
    // block bots
    return false;
  }
  return true;
}

$(document).ready(function () {
  $('form').submit(function (e) {
    if (validateForm()) {
      return;
    }
    e.preventDefault();
    return false;
  });
});