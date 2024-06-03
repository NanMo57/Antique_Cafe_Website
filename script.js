$(document).ready(()=>{
    $('.fa-bars').click(()=>{
        $('header').toggleClass("BG")
        $('header ul').slideToggle("slow")
    })

    $('li a').click((e)=>{
        $('li a').removeClass('active');
        $(e.target).addClass('active');
    })

    $(window).scroll(()=>{
        $(window).scrollTop() >= 73 ? $('header').css("background-color","#3e2a1b") :$('header').css("background-color","transparent")         
        
        let section = document.querySelector('section')
        let content = document.querySelector('.CenterDiv')

         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;

        if (scrollTop >= sectionTop && scrollTop <= (sectionTop + sectionHeight)) {
            const scrollPercent = (scrollTop - sectionTop) / sectionHeight;
        
            content.style.transform = `translateY(-${scrollPercent*100}vh)`;
        }
    })

    
})
