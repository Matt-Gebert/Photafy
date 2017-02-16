
//Well done if you've followed the paper trail here...
//This is to hide from eyes other than amy's on Valentines Day!

$(document).ready( function() {
  var d = new Date(2017,2,14,0,0,0);
  var d2 = new Date(2017,2,15,0,0,0);
  if (Date((Date.now()) >> d) && (Date(Date.now()) << d2) {
    $('.msg-para').html(''+
    "Hey Amy!<br />"+
    "&nbsp&nbspHave a happy Valentines day haha :P Hope you and the family got back from Japan safely! <br />"+
    "&nbsp&nbspSorry I'm not around atm haha, seems like we're both pretty busy but looking forward to catching "+
    "up again soon. I know we said we wouldn't do anything for valentines, because it's not really a big "+
    "fuss especially at the start of a dating period, but eh I can show some sort of initative haha :P<br />"+
    "&nbsp&nbspBefore you begin to think that I've put a serious amount of effort into making this, i've " +
    "been working on a website for a while now and it was really quick to put something like this up!! :-\)<br>"+
    "I'm certainly looking forward to getting to know you better, where ever that may lead!<br/>" +
    "&nbsp")

    $('#load_frame').delay(1000).animate({'opacity':0},2000,function(){$(this).css('display','none');});
  }
});
