


$('.slider-content').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   nextArrow: "",
   prevArrow: "",
   responsive: [

        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
  ]
});


// for mbl nav
$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
    $('.tohide').toggleClass('show');
  });
});



$('#press').on('click', 'a', function() {
   $('.tohide').toggleClass('show');
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
});


window.setTimeout(()=>{

  console.log("done")
  document.body.classList.remove("stop-scrolling")
  const counters = document.querySelectorAll('.counter');
  const speed = 1000; // The lower the slower

  counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = Math.floor(target / speed);

    console.log(inc);
    console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc ;
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

},7000)


// var btns=document.getElementById("mylist");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// Wrap every letter in a span

 var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


var textWrapper = document.querySelector('.ml1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


 