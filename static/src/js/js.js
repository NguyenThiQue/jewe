// import options from 'web_editor.snippets.options';
// options.registry.ExploreCitiesOptions = options.Class.extend({
//     start() {
//         let carouselWidth = this.$target.find('.carousel-inner').scrollWidth
//         var cardWidth =  this.$target.find(".carousel-item").width();
//         var scrollPosition = 0;
//         $(".carousel-control-next").on("click", function () {
//             if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
//               scrollPosition += cardWidth;  //update scroll position
//               $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
//             }
//           });
        
//           $(".carousel-control-prev").on("click", function () {
//             if (scrollPosition > 0) {
//               scrollPosition -= cardWidth;
//               $(".carousel-inner").animate(
//                 { scrollLeft: scrollPosition },
//                 600
//               );
//             }
//           });
//     }
// })
// // var carouselWidth = $(".carousel-inner")[0].scrollWidth;
// // var cardWidth = $(".carousel-item").width();
// // var scrollPosition = 0;
// // $(".carousel-control-next").on("click", function () {
// //     if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
// //       scrollPosition += cardWidth;  //update scroll position
// //       $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
// //     }
// //   });

// //   $(".carousel-control-prev").on("click", function () {
// //     if (scrollPosition > 0) {
// //       scrollPosition -= cardWidth;
// //       $(".carousel-inner").animate(
// //         { scrollLeft: scrollPosition },
// //         600
// //       );
// //     }
// //   });