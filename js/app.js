$(document).ready(function(){
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['./assets/assets/Img_05.png','./assets/assets/Img_06.png']

    $(document).on('keypress',function(e){
        // console.log(e.which);
        if(e.which == 13){
            $($surface).toggleClass('movecar');
            $($car).toggleClass('suspension');
        }
    })
    $(document).on('keypress',function(e){
       if(e.which == 119){
           if(flag){
               flag = false;
               $img.attr('src',cars[0])
           }else{
               flag = true;
               $img.attr('src',cars[1])
           }
       }
    })
})