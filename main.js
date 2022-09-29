$('p').on("DOMSubtreeModified",function(){
    var char = $('p').text().length;
    $('.count').val(char);
})