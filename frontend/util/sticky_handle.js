const handleSticky = () => {
  const $header1 = $('#header1');
  console.log($(window).scrollTop());
  if ($header1) {
    if ($(window).scrollTop() >= 522.7272338867188) { // I got this by checking on window console
      $header1.addClass("hidden-header");
    }
  }
};
export default handleSticky;
