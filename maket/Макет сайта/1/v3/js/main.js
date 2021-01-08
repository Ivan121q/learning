


jQuery(document).ready(function($){ 
    
    // $('.hide_box').hide();
     

   $('.contscts_button').click(function(i){
  	 i.preventDefault();
  	 if($('.hide_box').is('.hide_box:hidden')){
     	
     	$('.hide_box').show(200);
     }else{
     	$('.hide_box').hide(200);
     }
     
  });

    $('.hide_box').click(function(){
       if($('.hide_box').is('.hide_box:visible')){
     	$('.hide_box').hide(200);
     }
    });


 // GALERY BLOCK

   var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay = $('.overlay'),
      liIndex,
      targetImg;
  
  //preload images

  var imgSources = [
  'images/img-1-lg.jpg',
  'images/img-2-lg.jpg',
  'images/img-3-lg.jpg',
  'images/img-4-lg.jpg'
  ];

  var imgs = [];
  for (var i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }

  function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
  }

  function getHref(index) {
    return $li.eq(index).find('>a').attr('href');
  }

  function closeLigtbox() {
    $lightbox.fadeOut();
  }

  $overlay.click(closeLigtbox);

  $links.click(function(e) {
    e.preventDefault();
    targetImg = $(this).attr('href');
    liIndex = $(this).parent().index();
    replaceImg(targetImg);
    $lightbox.fadeIn();
  });

   $next.click( function() {  
    if ( (liIndex + 1) < $li.length ) { 
      targetImg = getHref(liIndex + 1);
      liIndex ++;
    } else {
      targetImg = getHref(0);
      liIndex = 0;
    }
    replaceImg(targetImg);
  });

   $prev.click( function() {  
    if ( (liIndex) > 0 ) { 
      targetImg = getHref(liIndex - 1);
      liIndex --;
    } else {
      targetImg = getHref($li.length - 1);
      liIndex = $li.length - 1;
    }
    replaceImg(targetImg);
  });

// WOW ANIMATE CSS =========================-

// ANIMATE CSS


    $(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop(); 

// ЦИФРА УКАЗЫВАЕТ НА КАКОМ ЗНАЧЕНИИ ПИКСЕЛЯ СРАБОТАЕТ АНИМАЦИЯ
      if (imagePos < topOfWindow+200) {


// ДОБАВИТЬ КЛАСС ИЗ ANIMATE.CSS ДЛЯ АНИМАЦИИ ЭЛЕМЕНТА
        $(this).addClass('zoomInRight');
      }
    });
  });  

 // WOW JS 
   new WOW().init();



  // NAVI BLOCK =========================-

   $('.openButton').hover(function() {
        if(!$('.openButton').hasClass('openDone'))
        {
            $('.openButton').addClass('openDone');
            $('nav').css("left", "0px");
        }
        else
        {
            $('.openButton').removeClass('openDone');
            $('nav').css("left", "-159px");
        }
    });
    
});