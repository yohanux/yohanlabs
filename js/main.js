// 음식 목록
const foods = [
    '김치찌개',
    '된장찌개',
    '비빔밥',
    '불고기',
    '삼겹살',
    '치킨',
    '피자',
    '파스타',
    '햄버거',
    '초밥'
];

// DOM 요소
const randomButton = document.getElementById('randomButton');

// 랜덤 음식 선택 함수
function getRandomFood() {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
}

// 버튼 클릭 이벤트
randomButton.addEventListener('click', () => {
    const selectedFood = getRandomFood();
    alert(`오늘의 추천 음식은 "${selectedFood}" 입니다!`);
}); 