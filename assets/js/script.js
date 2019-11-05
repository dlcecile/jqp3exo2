$(function(){
var count=0;
$('#button1').click(function(){
count--;
$('#score').val(count);
});
$('#button2').click(function(){
count++;
$('#score').val(count);
});
});
