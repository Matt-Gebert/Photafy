function tabled(url, refs, names) {
  this.directory = url;
  this.refs = refs;
  this.names = names;


  //TODO: Update ALGORITHMSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  this.fill_page_options = function (pgid){
    //Reset Element Contents:
    $('.subpagemenu').html("");

    var pgname = ids[pgid];
    for (var i = 0; i<refs[pgname].length; i++) {
      // document.getElementByClassName("subpagemenu")[0].innerHTML = "Test";
      $('.subpagemenu').append('<div class="row menuoption" id="'+refs[pgname][i]+
        '" onclick="load_page('+i+')"><span>'+names[pgname][i]+'</span></div>');
      //  += '<div class="row menuoption">'+names[i]+'</div>'
    }
  }

  this.load_page = function (i) {
    var pgname = ids[crnt_pg];
    //1. Update CSS of subpage headers
    if (i != crnt_pg) {
      //Unmark Old marked page.
      if (crnt_pg!=-1) {
        $('#'+refs[pgname][i]+'_content').hover(function(){
          $(this).css('background-color','rgba(255,255,255,0.8)').css('color','#114455');
        }, function(){
          $(this).css('background-color','rgba(0,0,0,0)').css('color','#FFFFFF');
        }).mouseout();
      }


      //Mark new Selection:
      $('#'+refs[pgname][i]+'_content').unbind('mouseenter').unbind('mouseleave')
      .css('background-color','rgba(255,255,255,0.8)')
      .css('color','#114455');
      //Update Tracker
      crnt_pg = i;
    }

    //2. Hide Current Content:
    $('.content').css('dispaly','none').css('opacity',0);
    //Bring up loading mask.
    $('.loadmask').css('display','table').animate({opacity:1}, 400, function(){
      //Start Loading new page
      $("#"+pagename+"_content").load(''+pgname+'/'+refs[pgname][i]+'/index.html', function(){
        //Upon load, remove mask
        $('#'+pagename+'_content').css('display','block').css('opacity',1);
        $('.loadmask').delay(200).animate({opacity:0}, 1000, function(){$(this).css('display','none');})
      });
    });
  }
}
