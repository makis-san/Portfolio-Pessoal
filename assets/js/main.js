$(document).ready(function () {

    $('.menuButton').on('click', function () {
        console.log(':D');
        // open or close navbar
        $('.sidebar').toggleClass('s-active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    new TypeIt("#titleHeader", {
        speed: 50,
        startDelay: 0,
        waitUntilVisible: false,
        lifeLike: false,
        loop: true,
        loopDelay: 750
      })
      .type("Web <br><span>Designer</span>.", {delay: 800})
      .move(-11, {delay:1000})
      .delete(14, {speed: 100, delay:1000})
      .type("Graphics", {speed: 100,delay: 1000})
      .delete(8, {speed: 125, delay: 1000})
      .type("Motion", {speed: 100,delay: 1200})
      .delete(6, {speed: 125, delay: 1000})
      .type("Ui/Ux", {speed: 100,delay: 1200})
      .move(11, {delay:1000})
      .delete(17, {speed: 125, delay: 1000})
      .type("Static <br><span>Pages</span>.", {delay: 800})
      .move(-8, {delay:1000})
      .delete(6, {delay:1000})
      .type("Dynamic", {speed: 100,delay: 1200})
      .go();

});