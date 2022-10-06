(($)=>{

  class pofo {
      init(){
        this.section1();
        this.section4();
        this.section5();

        this.header();
        this.parallax();
      }
      parallax(){

        const paralObj = {
            init(){
              this.header();
              this.section2();
              this.section3();
              this.section4();
              this.section5();
            },
            header(){

                //헤더영역
                //스크롤 방향 먼저 계산 위 / 아래
                let upDown = '';
                let scrollStart = 0;
                let scrollEnd = 0;

                //스크롤이벤트 : 스크롤이 발생하면 실행 콜백함수로 결고 돌려준다.
                $(window).scroll(function(){
                  //스크롤시작값 
                  //스크롤종료값
                  //결과변수 = (스크롤시작값-스크롤종료값) > 0 ? 'DOWN' : 'UP'
                  scrollStart = $(window).scrollTop();  //스크롤시작값

                  upDown = (scrollStart-scrollEnd) > 0 ? 'DOWN' : 'UP'
                    
                      if( upDown === 'DOWN' ){
                        $('#header').addClass('down');
                        $('#header').removeClass('event');
                      }  

                      if( upDown === 'UP' ){
                        $('#header').removeClass('down');
                        $('#header').addClass('event');
                      }

                      if( $(window).scrollTop() === 0 ){
                        $('#header').removeClass('event');
                      }

                  scrollEnd = scrollStart;  //처음 시작값을 종료에 넣어준다

                });


            },
            section2(){
                let winH = $(window).innerHeight();
                let sec2Top = $('#section2').offset().top-winH;
                let section2 = $('#section2');

                $(window).scroll(function(){

                  if( $(window).scrollTop() > sec2Top ){
                    section2.addClass('parallax');
                  }

                  if( $(window).scrollTop() === 0 ){
                    section2.removeClass('parallax');  
                  }

                });
            },
            section3(){
              let winH = $(window).height();
              let sec3Top = $('#section3').offset().top-winH;
              const section3 = $('#section3');

              $(window).scroll(function(){
                if($(this).scrollTop()===0){
                  section3.removeClass('parallax');
                }
                if($(this).scrollTop()>sec3Top){
                  section3.addClass('parallax');
                }
              });
            },
            section4(){
              let winH = $(window).height();
              let sec4Top = $('#section4').offset().top-winH;
              const section4 = $('#section4');
              let t = false; //토글변수

              $(window).scroll(function(){
                if($(this).scrollTop()===0){
                  section4.removeClass('on');
                  t=false;
                }
                if($(this).scrollTop()>sec4Top){
                  if(t===false){
                    t=true;
                    section4.addClass('on');
                  }
                }
              });
            },
            section5(){
              let winH = $(window).height();
              let sec5Top = $('#section5').offset().top-winH;
              const section5 = $('#section5');

              $(window).scroll(function(){
                if($(this).scrollTop()===0){
                  section5.removeClass('on');
                }
                if($(this).scrollTop()>sec5Top){
                  section5.addClass('on');
                }
              });
            }
        }
      

        paralObj.init();

      }
      header(){
        //메인메뉴 버튼위에 마우스 오버시 
        //해당 서브메뉴 페이드 인 효과로 나타난다.
        //선택자
        const mainBtn = $('.main-btn');
        const nav = $('#nav');
        const sub = $('.sub');
        const subBtn = $('.sub-btn');
        const subsub = $('.subsub');

          //모바일 버튼
          $('.mobile-btn').on({
            click: function(){
              $(this).toggleClass('on')
            }
          });

              mainBtn.on({
                mouseenter: function(){
                  sub.stop().fadeOut(0);
                  $(this).next().stop().fadeIn(300);
                }
              });

              nav.on({
                  mouseleave: function(){
                    sub.stop().fadeOut(300);
                  }
              });


              subBtn.on({
                mouseenter(){
                  subsub.stop().fadeOut(0);
                  $(this).next().stop().fadeIn(300);
                }
              });



      }
      section1(){
        //메인 슬라이드
        let cnt = 0;        
        const slideWrap = $('.slide-wrap');
        const pageBtn = $('.page-btn');
        let setId = 0;  //타이머 변수
        let slideW = $(window).width(); //슬라이드너비는 창너비

        //반응형 윈도우 크기 변경시 바로 반응한다.
        //슬라이드 너비가 1904px로 고정크기인데 이걸
        //창크기가 변하며 바로 슬라이드 너비도 자동으로 반응하도록 한다. 
        $(window).resize(function(){
          slideW = $(window).width();
          mainSlide();
        });


        //1-1 메인슬라이드 함수
        function mainSlide(){
            slideWrap.stop().animate({left:-slideW*cnt}, 600, 'easeInOutExpo',function(){
              if(cnt>2){cnt=0} //마지막보다 크면 처음 슬라이드로 이동
              if(cnt<0){cnt=2} //처음 이전이면 마지막 슬라이드로 이동
              slideWrap.stop().animate({left:-slideW*cnt}, 0);              
            });
            pageBtnEvent();
        }
        //1-2
        // 페이지버튼 이벤트 함수
        function pageBtnEvent(){
            pageBtn.removeClass('on'); //초기화
            pageBtn.eq(cnt>2?0:cnt).addClass('on'); //현재 슬라이드
        }
        // 페이지버튼 클릭 이벤트
        pageBtn.each(function(index){
          $(this).on({  //$(this) 사용  ==  pageBtn.eq(index)
            click (){
              cnt=index;
              mainSlide();
            }
          });
        })
       
        // pageBtn.each(function(index){
        //   pageBtn.eq(index).on({
        //     click (){
        //       cnt=index;
        //       mainSlide();
        //       console.log( index );
        //     }
        //   });
        // })

        // pageBtn.eq(0).on({
        //   click (){
        //     cnt=0;
        //     mainSlide();
        //   }
        // });
        // pageBtn.eq(1).on({
        //   click (){
        //     cnt=1;
        //     mainSlide();
        //   }
        // });
        // pageBtn.eq(2).on({
        //   click (){
        //     cnt=2;
        //     mainSlide();
        //   }
        // });

        //2. 다음카운트 함수
        function nextCount(){
            cnt++;
            mainSlide();
        }
        //2. 이전카운트 함수
        function prevCount(){
            cnt--;
            mainSlide();
        }

        //3. 자동타이머함수
        function autoTimer(){
          setId = setInterval(nextCount, 3000);
          // setInterval(prevCount, 3000); //왼쪽에서 오른쪽으로 이동
        }
        //autoTimer();






        // 터치 스와이프
        // 마우스의 방향에 따라 슬라이드를 다음슬라이드 또는 이전슬라이드를 구현한다.
        // mouseover == mouseenter /  mouseleave == mouseout,
        // mousedown / mouseup / mousemove 
        const slideContainer = $('.slide-container');
        let   mouseStart = 0;
        let   mouseEnd = 0;
        let   ds = null; //드래그 시작 Drag Start
        let   de = null; //드래그 끝   Drag End
        let   md = false; //마우스 다운상태  Mouse Down


              //pc용 마우스 이벤트
              //터치 스와이프 개발
              //드래그 앤 드롭
              slideContainer.on({
                mousedown: function(event){
                  mouseStart = event.clientX;   //마우스 터치시작  
                  // 드래그시작 drag start = ds
                  ds = event.clientX - slideWrap.offset().left-1903;
                  // 마우스 다운 mouse donw = md
                  md = true;
                },
                mouseleave: function(event){
                  if( md !== true){
                    return; //강제종료
                  }

                  mouseEnd = event.clientX; 
                  md = false;
                  if( mouseStart-mouseEnd > 0 ){ //다음슬라이드
                    clearInterval(setId);  //타이머중지
                    nextCount();
                  }                  
                  if( mouseStart-mouseEnd < 0 ){ //이전슬라이드
                    clearInterval(setId);  //타이머중지
                    prevCount();
                  }  
                },
                mouseup: function(event){
                  mouseEnd = event.clientX;      //마우스 터치끝
                  md = false;  //마우스 이동 끝나고 딸깍이 끝나면 노면은
                  // console.log( mouseStart-mouseEnd ); // 이동거리 = 터치시작 - 터치끝

                  if( mouseStart-mouseEnd > 0 ){ //다음슬라이드
                    clearInterval(setId);  //타이머중지
                    nextCount();
                  }                  
                  if( mouseStart-mouseEnd < 0 ){ //이전슬라이드
                    clearInterval(setId);  //타이머중지
                    prevCount();
                  }                  
                },
                mousemove: function(e){
                  //마우스 이동거리
                  //마우스가 다운상태에서만 
                  //드래그가 가능하게 만들어야한다.
                  // console.log( e.clientX );
                  if( md !== true){
                    return; //강제종료
                  }
                  //드래그 끝 drag end = de
                  de = e.clientX;


                  slideWrap.css({ left: de - ds });
                }
              });    

              //테블릿 모바일용 핑거(손가락) 터치 ㅐㅐㅐㅐㅐ이벤트
              //터치 스와이프 개발
              //드래그 앤 드롭
              slideContainer.on({
                touchstart: function(event){
                  mouseStart = event.originalEvent.changedTouches[0].clientX;  
                  ds = event.originalEvent.changedTouches[0].clientX - slideWrap.offset().left-slideW;
                  md = true;
                },
                touchend: function(event){
                  mouseEnd = event.originalEvent.changedTouches[0].clientX;  
                  md = false; 

                  if( mouseStart-mouseEnd > 0 ){ 
                    clearInterval(setId);  
                    nextCount();
                  }                  
                  if( mouseStart-mouseEnd < 0 ){ 
                    clearInterval(setId); 
                    prevCount();
                  }                  
                },
                touchmove: function(event){
                  if( md !== true){
                    return;
                  }
                  de = event.originalEvent.changedTouches[0].clientX;


                  slideWrap.css({ left: de - ds });
                }
              });    

      }
      section2(){
      
      }
      section3(){
      
      }
      section4(){
       //버튼 클릭 이벤트
       //6개의 버튼을 배여처리 이벤트 each();
       let rate = 650 / 800;            /* 이미지높이비율값 = 이미지높이 / 이미지너비 */
       let n = 8;                       /* 보이는 이미지 갤러리 갯수 (8개 기본) */
       let cols = 4;                    /* 칸수 기본 4칸 */
       let rows = Math.ceil(n/cols);    /* 줄수 기본 2줄 = Math.ceil 자리올림수 (n / cols) Math.ceil 자리올림 Math.floor 자리내림 */
       let winW = $(window).width();    /* 창너비 100% 인식*/         
       let imgW = winW / cols;          /* 이미지너비 = 창너비 / 칸수 */      
       let imgH = imgW * rate;          /* 이미지높이 = 이미지너비 * 이미지높이 비율값 */
       let idx = 0;

       $('.gallery-box ul li').stop().animate({width:imgW, height:imgH}, 300);

       $('.gallery-btn').each(function(index){
        $(this).on({
          click: function(event){
            event.preventDefault();
            idx = index; //클릭 버튼 번호
            mainGallery(); //클릭시 실행
            $('.gallery-btn').removeClass('on');
            $(this).addClass('on');
            
            //패럴럭스 위에서 토글변수로 on 클래스 추가 못하게 막고
            //이미 추가된 클래스 on 은 삭제한다.
            //그러면 애니메이셔 진행 못하게 막는다.
            $('#section4').removeClass('on');
          }
        });
       });

       //반응형 이벤트
        mainGallery(); //로딩시 실행
        $(window).resize(function(){ //평소는 실행 안됨!! 너비, 높이, 크기가 변경되면 실행
        mainGallery();
       });

        
       function mainGallery(){

        //창너비 해상도 별 칸의 갯수 4 3 2 1 cols(칸수) / rows(줄수)
        winW = $(window).width();

        if(winW>=1280){
          cols = 4;
        }
        else if(winW>=1024){
          cols = 3;
        }
        else if(winW>=600){
          cols = 2;
        }
        else{
          cols = 1;
        }

        imgW = winW / cols;
        imgH = imgW * rate;
        $('.img-box').css({width: imgW});
        $('.gallery-box ul li').css({width:imgW, height:imgH});

        ////////////////////
        $('.img-box').removeClass('on');

        if(idx===0){  //8개 클릭한 번호
          n = 8-0;
          switch(cols){
            case 4:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*0,left:imgW*3}, 300);
  
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*1,left:imgW*3}, 300);
              break;
            case 3:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
  
              $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1,left:imgW*2}, 300);
  
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*2,left:imgW*1}, 300);
              break;
            case 2:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
  
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
  
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*2,left:imgW*1}, 300);
  
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*3,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*3,left:imgW*1}, 300);
              break;
            case 1:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*3,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*4,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*5,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*6,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*7,left:imgW*0}, 300);
          }
        }

        else if(idx===1){  //2개
          n = 8-6;
          $('.gallery-box ul li').eq(0).hide();            
          $('.gallery-box ul li').eq(2).hide();
          $('.gallery-box ul li').eq(3).hide();
          $('.gallery-box ul li').eq(4).hide();
          $('.gallery-box ul li').eq(5).hide();
          $('.gallery-box ul li').eq(7).hide();

          switch(cols){
            case 4:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              break;
            case 3:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              break;
            case 2:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              break;
            case 1:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
          }     
        }
        
        else if(idx===2){  //6개
          n = 8-2;
          $('.gallery-box ul li').eq(3).hide();
          $('.gallery-box ul li').eq(7).hide();

          switch(cols){
            case 4:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0,left:imgW*3}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              break;
            case 3:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1,left:imgW*2}, 300);
              break;
            case 2:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*2,left:imgW*1}, 300);
              break;
            case 1:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*3,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*4,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*5,left:imgW*0}, 300);
          }
      
        }
        else if(idx===3){  //4개
          n = 8-4;
          $('.gallery-box ul li').eq(1).hide();
          $('.gallery-box ul li').eq(3).hide();
          $('.gallery-box ul li').eq(6).hide();
          $('.gallery-box ul li').eq(7).hide();

          switch(cols){
            case 4:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*0,left:imgW*3}, 300);
              break;
            case 3:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              break;
            case 2:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              break;
            case 1:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*3,left:imgW*0}, 300);
          }
            
        }
        else if(idx===4){  //5개
          n = 8-5;
          $('.gallery-box ul li').eq(1).hide();
          $('.gallery-box ul li').eq(3).hide();
          $('.gallery-box ul li').eq(4).hide();
          $('.gallery-box ul li').eq(6).hide();
          $('.gallery-box ul li').eq(7).hide();
          switch(cols){
            case 4:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              break;
            case 3:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              break;
            case 2:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              break;
            case 1:
              $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
          }
          
        }
        else {  //5 //3개
          n = 8-3;
          $('.gallery-box ul li').eq(0).hide();
          $('.gallery-box ul li').eq(3).hide();
          $('.gallery-box ul li').eq(5).hide();
          switch (cols){
            case 4:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0,left:imgW*3}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              break;
            case 3:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0,left:imgW*2}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              break;
            case 2:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1,left:imgW*1}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              break;
            case 1:
              $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*2,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*3,left:imgW*0}, 300);
              $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*4,left:imgW*0}, 300);
          }
        }

        //줄수 결정
        rows = Math.ceil(n/cols);
        $('.gallery-box ul').css({height: imgH*rows});
        $('.img-box').addClass('on');
        
       }

      }
      section5(){
        const svgCircle = $('.svg-front circle'); //SVG 원형 circle 4개 가져오기
        let svgArr = []; //SVG 원형 4개 길이 저장할 배열 변수
        let piece = []; //초당 작은 조각단위의 길이를 저장할 배열 변수
        let second = 6;
        let perSize = []; //퍼센트에 해당하는 길이를 저장할 배열 변수
        let percent = [.9, .75, .9, .62];
        let sum = [0,0,0,0]; //조각이 누적되는 배열변수 : 누적변수는 반드시 초기값이 0이 필요하다.
        let setId = []; //타이머 정지 변수

          svgAniFn();

          function svgAniFn(){
            $.each(svgCircle , function(idx, obj){
              //1. SVG원형 4개의 dash(점선) 길이를 배열처리
              svgArr[idx] = obj.getTotalLength();
    
              //2. 각 요소(원형) 전체 길이 대입 : 초기 설정
              $(obj).css({ strokeDasharray: svgArr[idx] }); //461.0681457519531
              $(obj).css({ strokeDashoffset: svgArr[idx] });
    
              //3. 각 요소(원형)의 길이를 10초간의 백분율로 구현하기 위해 작은 조각단위의 길이를 구한다
              //   1초 동안 원의 작은 조각 단위(piece chip)의 길이
              piece[idx] = svgArr[idx] / second / 100;
    
              //4. 퍼센트에 해당하는 길이를 구한다
              perSize[idx] = svgArr[idx] * percent[idx];
    
              //5. 조각단위를 누적하는 함수
              function sumfn(){
                sum[idx] += piece[idx]; //조각단위 누적 합
                if(sum[idx]>perSize[idx]){
                  clearInterval(setId[idx]);
                }
                else{ 
                  //원형 SVG 애니메이셔 구현
                  $(obj).css({ strokeDashoffset: svgArr[idx] - sum[idx] });
                  //타이머 퍼센트 숫자 카운트
                  $('.num').eq(idx).text( Math.ceil(sum[idx]/svgArr[idx]*100) + '%' );
                }
              }
    
              //6. 타이머
              setId[idx] = setInterval(sumfn, 10);
    
              });
          }









      }
      section6(){
      
      }
      section7(){
      
      }
      section8(){
      
      }
      section9(){
      
      }
      section10(){
      
      }
      section11(){
      
      }
      footer(){
      
      }   
  }
  const newpofo = new pofo();
  newpofo.init();


})(jQuery);