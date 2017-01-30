// Testing d3.js scripting!
var data = [4,8,15,18,23,42];





//--------------DIV Graph Generation!-----------------
// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div").style("width", function(d) { return d * 10 + "px"; })
//     .text(function(d) { return d; });



//----------------Menu bar for home page ------------------

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
    $('.subpage').animate({opacity:1}, 500);
    scrollTillTop('.links','.information');
    load_page(0);

  } else {
    //Return to default view.
    $('.underline').css('background-color','rgba(0,0,0,0)');
    scrollTillTop('.space','.information');
    $('.subpage').animate({opacity:0}, 1000, function(){$(this).css('display','none');})
  }
};

// --------------------- Selection Between pages --------------------------
var refs = ['primsalg', '15puzzle']
var names = ['Prims Algorithm', '14-15 Puzzle'];
var crnt_phys_pg = -1;
function fill_page_options(){
  //Reset Element Contents:
  $('.subpagemenu').html("");

  for (var i = 0; i<refs.length; i++) {
    // document.getElementByClassName("subpagemenu")[0].innerHTML = "Test";
    $('.subpagemenu').append('<div class="row menuoption" id="'+refs[i]+'" onclick="load_page('+i+')"><span>'+names[i]+'</span></div>');
    //  += '<div class="row menuoption">'+names[i]+'</div>'
  }
}

function load_page(i) {
  //Unmark if different page num.
  if (i != crnt_phys_pg) {
    if (crnt_phys_pg!=-1) {
      $('#'+refs[crnt_phys_pg]).hover(function(){
        $(this).css('background-color','rgba(255,255,255,0.8)').css('color','#114455');
      }, function(){
        $(this).css('background-color','rgba(0,0,0,0)').css('color','#FFFFFF');
      }).mouseout();
    }

    // alert(refs[i]);
    //Mark Selection:
    $('#' + refs[i]).unbind('mouseenter').unbind('mouseleave')
                    .css('background-color','rgba(255,255,255,0.8)')
                    .css('color','#114455');
    //Update Tracker
    crnt_phys_pg = i;
  }

  //Hide Current Content:
  $('#content').css('dispaly','none').css('opacity',0);
  //Bring up loading mask.
  $('.loadmask').css('display','table').animate({opacity:1}, 400, function(){
    //Start Loading new page
    $("#content").load('comp_sci_apps/'+refs[i]+'/index.html', function(){
      //Upon load, remove mask
      $('#content').css('display','block').css('opacity',1);
      $('.loadmask').delay(200).animate({opacity:0}, 1000, function(){$(this).css('display','none');})
    });
  });

}



$(document).ready(function() {
  //On Doc Ready, Set the subpage height to a fixed amount.
  var pageBarHeight = $('.links').css('height').replace(/[^-\d\.]/g, '') + 2;
  var subpageHeight = $(document).height() - pageBarHeight
  $('.subpage').css('height', subpageHeight + 'px');

  //Temp: Setup Subpage Options - this should be done by database.
  fill_page_options();

})
