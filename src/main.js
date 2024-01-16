// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
// 함수 반환값이 원시값인지 객체가 반환되는지 반환값의 형태를 알고 있어야 한다.
document.addEventListener('scroll', () => {
// 스크롤 이벤트가 발생할때 하고 싶은것
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    /* 
        계산식 도출
        scrollY   homeHeight   opacity
           0         100          1(불투명)
          50         100         0.5
          100        100          0(투명) 
        이렇게 써보고 계산식 도출하기.
    */
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});
