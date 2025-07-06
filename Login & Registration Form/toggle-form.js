// toggle-form.js

// Wait until the DOM is ready
$(document).ready(function() {
  // When any <a> inside .message is clicked…
  $('.message a').click(function() {
    // …toggle the form’s height & opacity
    $('form').animate(
      { height: 'toggle', opacity: 'toggle' },
      'slow'
    );
  });
});
