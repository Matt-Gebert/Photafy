// Testing d3.js scripting!
var data = [4,8,15,18,23,42];





//--------------DIV Graph Generation!-----------------
// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div").style("width", function(d) { return d * 10 + "px"; })
//     .text(function(d) { return d; });



// Writing a program to show a menu bar for home page, rather than standard.

var crnt_pg = -1; //No page selected
var ids = ['christian', 'physicist', 'musician'];
function subpg(pgnum) {

  //First, makes div static on hover, then sets static colors.
  if (pgnum != crnt_pg) {
    $('#' + ids[pgnum]).unbind('mouseenter').unbind('mouseleave')
    .css('background-color','rgba(255,255,255,0.8)')
    .children().children().css('color','#114455');
  }

  //Secondly, reset old page element if selected.
  if (crnt_pg !== -1) {
    $('#' + ids[crnt_pg]).hover(function(){
      $(this).css('background-color','rgba(255,255,255,0.8)')
      .children().children('i').css('color','#114455')
      .parents().children('span').css('color','#114455');
    }, function(){
      $(this).css('background-color','rgba(0,0,0,0)')
      .children().children('i').css('color','#77EEEE')
      .parents().children('span').css('color','#FFFFFF');
    }).mouseout();
  }

  //Thirdly, keep track of selected page.
  if (crnt_pg == pgnum) {
    crnt_pg = -1;
  } else {
    crnt_pg = pgnum;
  }

  //Lastly, change view between frontpage and specific page.
  if (crnt_pg != -1) {
    //Generate specific page.
    $('.underline').css('background-color','rgba(255,255,255,0.8)');
    $('.subpage').css('display','block');
    scrollTillTop('.links','.information');
  } else {
    //Return to default view.
    $('.underline').css('background-color','rgba(0,0,0,0)');
    scrollTillTop('.space','.information');
  }

};

$(document).ready(function() {
  var pageBarHeight = $('.links').css('height').replace(/[^-\d\.]/g, '') + 2;
  var subpageHeight = $(document).height() - pageBarHeight
  $('.subpage').css('height', subpageHeight + 'px');

})
