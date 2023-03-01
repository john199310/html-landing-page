


 jQuery(document).ready(function($){
 $('.color1').on({
     'click': function(){
         $('#change-image').attr('src','../../assets/images/brand/logo-3.png');
     }
 });
 
$('.color2').on({
     'click': function(){
        $('#change-image').attr('src','../../assets/images/brand/logo-red.png');
     }
 });
 
$('.color3').on({
     'click': function(){
         $('#change-image').attr('src','../../assets/images/brand/logo-green.png');
     }
 });
 
$('.color4').on({
     'click': function(){
         $('#change-image').attr('src','../../assets/images/brand/logo-blue.png');
     }
 });
 $('.color5').on({
     'click': function(){
         $('#change-image').attr('src','../../assets/images/brand/logo-orange.png');
     }
 });
});