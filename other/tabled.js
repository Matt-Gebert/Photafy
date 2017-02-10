function tabled(url, refs, names, category) {
  this.path = url;
  this.refs = refs;
  this.names = names;
  this.category = category;
  var crnt_pg = -1;


  //TODO: Update ALGORITHMSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  this.fill_page_options = function(){
    //Reset Element Contents:
    $('.subpagemenu').html("");
    for (var i = 0; i<this.refs.length; i++) {
      // document.getElementByClassName("subpagemenu")[0].innerHTML = "Test";
      $('.subpagemenu').append('<div class="row menuoption" id="'+this.refs[i]+
        '" onclick="control.load_page('+i+')"><span>'+this.names[i]+'</span></div>');
      //  += '<div class="row menuoption">'+names[i]+'</div>'
    }
  }

  this.load_page = function (i) {
    //1. Update CSS of subpage headers
    if (i != crnt_pg) {
      //Unmark Old marked page menuoption.
      if (crnt_pg!=-1) {
        $('#'+this.refs[crnt_pg]).hover(function(){
          $(this).css('background-color','rgba(255,255,255,0.8)').css('color','#114455');
        }, function(){
          $(this).css('background-color','rgba(0,0,0,0)').css('color','#FFFFFF');
        }).mouseout();
      }

      //Mark new Selection menuoption:
      $('#'+this.refs[i]).unbind('mouseenter').unbind('mouseleave')
      .css('background-color','rgba(255,255,255,0.8)')
      .css('color','#114455');
      //Update Tracker
      crnt_pg = i;
    }

    //2. Hide Current Content:
    $('#'+this.category+'_content').css('dispaly','none').css('opacity',0);
    //Bring up loading mask.
    $('.loadmask').css('display','table').animate({'opacity':1}, 400, function(){
      //Start Loading new page
      // alert(''.append(this.path,this.refs[i],'/index.html'));
      alert(this.path);
      // alert(this.refs[i]);
      // $("#"+this.category+"_content").load(''+this.path+this.refs[i]+'/index.html', function(){
      // //   //Upon load, remove mask
      //   alert('loaded');
      // //   $('#'+this.category+'_content').css('display','block').css('opacity',1);
      // //   $('.loadmask').delay(200).animate({'opacity':0}, 1000, function(){$(this).css('display','none');})
      // });
      // alert('ok');
    });
  }

  this.resize = function() {

  }
}
