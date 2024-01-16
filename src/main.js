// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
// 함수 반환값이 원시값인지 객체가 반환되는지 반환값의 형태를 알고 있어야 한다.
document.addEventListener('scroll', () => {
// 스크롤 이벤트가 발생할때 하고 싶은것
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});