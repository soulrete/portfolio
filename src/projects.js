'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project'); // 모든 project 클래스를 가져와서 배열로 만듦
const projectsContainer = document.querySelector('.projects');
// 콜백함수의 코드는 코드 수행 후 브라우저에 한번에 업데이트 된다.
categories.addEventListener('click', (event) => {
    console.log(event);
    const filter = event.target.dataset.category;
    if(filter == null) {
        return;
    }
    
    handleActiveSelection(event.target);
    filterProjects(filter);
    
});

function handleActiveSelection(target) {
    // Active 메뉴를 재설정
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

function filterProjects(filter) {
    // 프로젝트 필터링
    projects.forEach((project) => {
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    projectsContainer.classList.add('anim-out');
    setTimeout(() =>{
        projectsContainer.classList.remove('anim-out');
    }, 250);
}