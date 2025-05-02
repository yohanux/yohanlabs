// 음식 데이터 로드
const foodList = [
    { "name": "비빔밥", "category": "한식", "ingredient": "밥류" },
    { "name": "불고기덮밥", "category": "한식", "ingredient": "밥류" },
    { "name": "갈비탕", "category": "한식", "ingredient": "밥류" },
    { "name": "제육덮밥", "category": "한식", "ingredient": "밥류" },
    { "name": "김치찌개", "category": "한식", "ingredient": "밥류" },
    { "name": "된장찌개", "category": "한식", "ingredient": "밥류" },
    { "name": "찜닭", "category": "한식", "ingredient": "밥류" },
    { "name": "순두부찌개", "category": "한식", "ingredient": "밥류" },
    { "name": "돌솥비빔밥", "category": "한식", "ingredient": "밥류" },
    { "name": "돈까스", "category": "한식", "ingredient": "밥류" },
    { "name": "불고기볶음밥", "category": "한식", "ingredient": "밥류" },
    { "name": "잡곡밥", "category": "한식", "ingredient": "밥류" },
    { "name": "오징어볶음밥", "category": "한식", "ingredient": "밥류" },
    { "name": "참치김치볶음밥", "category": "한식", "ingredient": "밥류" },
    { "name": "김밥", "category": "한식", "ingredient": "밥류" },
    { "name": "돼지국밥", "category": "한식", "ingredient": "밥류" },
    { "name": "제육볶음", "category": "한식", "ingredient": "밥류" },
    { "name": "삼겹살", "category": "한식", "ingredient": "밥류" },
    { "name": "차돌박이", "category": "한식", "ingredient": "밥류" },
    { "name": "갈비찜", "category": "한식", "ingredient": "밥류" },
    { "name": "청국장", "category": "한식", "ingredient": "밥류" },
    { "name": "쭈꾸미볶음", "category": "한식", "ingredient": "밥류" },
    { "name": "쌈밥", "category": "한식", "ingredient": "밥류" },
    { "name": "만두국", "category": "한식", "ingredient": "밥류" },
    { "name": "족발", "category": "한식", "ingredient": "밥류" },
    { "name": "동태찌개", "category": "한식", "ingredient": "밥류" },
    { "name": "감자탕", "category": "한식", "ingredient": "밥류" },
    { "name": "닭볶음탕", "category": "한식", "ingredient": "밥류" },
    { "name": "육개장", "category": "한식", "ingredient": "밥류" },
    { "name": "뼈해장국", "category": "한식", "ingredient": "밥류" },
    { "name": "순대국", "category": "한식", "ingredient": "밥류" },
    { "name": "오리백숙", "category": "한식", "ingredient": "밥류" },
    { "name": "보쌈", "category": "한식", "ingredient": "밥류" },
    { "name": "한정식", "category": "한식", "ingredient": "밥류" },
    { "name": "김치볶음밥", "category": "한식", "ingredient": "밥류" },
    { "name": "나물비빔밥", "category": "한식", "ingredient": "밥류" },
    { "name": "죽", "category": "한식", "ingredient": "밥류" },
    { "name": "동태국", "category": "한식", "ingredient": "밥류" },
    { "name": "고추장찌개", "category": "한식", "ingredient": "밥류" },
    { "name": "부대찌개", "category": "한식", "ingredient": "밥류" },
    { "name": "돼지갈비", "category": "한식", "ingredient": "밥류" },
    { "name": "편백찜", "category": "한식", "ingredient": "밥류" },
    { "name": "회덮밥", "category": "한식", "ingredient": "밥류" },

    { "name": "칼국수", "category": "한식", "ingredient": "면류" },
    { "name": "냉면", "category": "한식", "ingredient": "면류" },
    { "name": "쌀국수", "category": "한식", "ingredient": "면류" },
    { "name": "잔치국수", "category": "한식", "ingredient": "면류" },
    { "name": "콩국수", "category": "한식", "ingredient": "면류" },
    { "name": "메밀면", "category": "한식", "ingredient": "면류" },
    { "name": "비빔국수", "category": "한식", "ingredient": "면류" },
    { "name": "온면", "category": "한식", "ingredient": "면류" },


    
    { "name": "초밥", "category": "일식", "ingredient": "밥류" },
    { "name": "돈부리", "category": "일식", "ingredient": "밥류" },
    { "name": "규동", "category": "일식", "ingredient": "밥류" },
    { "name": "텐동", "category": "일식", "ingredient": "밥류" },
    { "name": "가츠동", "category": "일식", "ingredient": "밥류" },
    { "name": "사케동", "category": "일식", "ingredient": "밥류" },
    { "name": "나베", "category": "일식", "ingredient": "밥류" },
    { "name": "가츠나베", "category": "일식", "ingredient": "밥류" },
    { "name": "스시롤", "category": "일식", "ingredient": "밥류" },
    { "name": "유부초밥", "category": "일식", "ingredient": "밥류" },
    { "name": "차슈덮밥", "category": "일식", "ingredient": "밥류" },
    { "name": "야키니쿠", "category": "일식", "ingredient": "밥류" },
    { "name": "돈카츠", "category": "일식", "ingredient": "밥류" },
    { "name": "규카츠", "category": "일식", "ingredient": "밥류" },
    { "name": "하이라이스", "category": "일식", "ingredient": "밥류" },
    { "name": "샤브샤브", "category": "일식", "ingredient": "밥류" },

    { "name": "우동", "category": "일식", "ingredient": "면류" },
    { "name": "라멘", "category": "일식", "ingredient": "면류" },
    { "name": "메밀소바", "category": "일식", "ingredient": "면류" },
    { "name": "츠케멘", "category": "일식", "ingredient": "면류" },



    { "name": "볶음밥", "category": "중식", "ingredient": "밥류" },
    { "name": "마파두부", "category": "중식", "ingredient": "밥류" },
    { "name": "잡채밥", "category": "중식", "ingredient": "밥류" },
    { "name": "양장피", "category": "중식", "ingredient": "밥류" },
    { "name": "짜장밥", "category": "중식", "ingredient": "면류" },
    { "name": "짬뽕밥", "category": "중식", "ingredient": "면류" },
    { "name": "마라탕", "category": "중식", "ingredient": "밥류" },
    { "name": "양꼬치", "category": "중식", "ingredient": "밥류" },
    { "name": "탕수육", "category": "중식", "ingredient": "밥류" },
    { "name": "잡탕밥", "category": "중식", "ingredient": "밥류" },
    { "name": "돼지고기덮밥", "category": "중식", "ingredient": "밥류" },

    { "name": "쟁반짜장", "category": "중식", "ingredient": "면류" },
    { "name": "볶음국수", "category": "중식", "ingredient": "면류" },
    { "name": "마라탕", "category": "중식", "ingredient": "면류" },
    { "name": "마라샹궈", "category": "중식", "ingredient": "면류" },
    { "name": "짜장면", "category": "중식", "ingredient": "면류" },
    { "name": "짬뽕", "category": "중식", "ingredient": "면류" },
    { "name": "칭차오면", "category": "중식", "ingredient": "면류" },
    { "name": "완탕면", "category": "중식", "ingredient": "면류" },



    { "name": "라자냐", "category": "양식", "ingredient": "밥류" },
    { "name": "리조또", "category": "양식", "ingredient": "밥류" },
    { "name": "치킨 파르마", "category": "양식", "ingredient": "밥류" },
    { "name": "수제버거", "category": "양식", "ingredient": "밥류" },
    { "name": "스테이크", "category": "양식", "ingredient": "밥류" },
    { "name": "피자", "category": "양식", "ingredient": "밥류" },
    { "name": "샐러드", "category": "양식", "ingredient": "밥류" },
    { "name": "오믈렛", "category": "양식", "ingredient": "밥류" },

    { "name": "알리오 올리오", "category": "양식", "ingredient": "면류" },
    { "name": "스파게티", "category": "양식", "ingredient": "면류" },
    { "name": "까르보나라", "category": "양식", "ingredient": "면류" },
    { "name": "볼로네제", "category": "양식", "ingredient": "면류" },
    { "name": "봉골레 파스타", "category": "양식", "ingredient": "면류" },
    { "name": "미트볼 스파게티", "category": "양식", "ingredient": "면류" },
    

    
    { "name": "반미", "category": "아시아", "ingredient": "밥류" },
    { "name": "치킨카레", "category": "아시아", "ingredient": "밥류" },
    { "name": "커리", "category": "아시아", "ingredient": "밥류" },
    { "name": "카오팟", "category": "아시아", "ingredient": "밥류" },
    { "name": "샤브샤브", "category": "아시아", "ingredient": "밥류" },
    { "name": "해산물 볶음밥", "category": "아시아", "ingredient": "밥류" },
    { "name": "나시고렝", "category": "아시아", "ingredient": "밥류" },

    { "name": "팟타이", "category": "아시아", "ingredient": "면류" },
    { "name": "똠얌꿍", "category": "아시아", "ingredient": "면류" },
    { "name": "사천식 볶음면", "category": "아시아", "ingredient": "면류" },
    { "name": "쌀국수", "category": "아시아", "ingredient": "면류" },
    { "name": "미고렝", "category": "아시아", "ingredient": "면류" },
    { "name": "분짜", "category": "아시아", "ingredient": "면류" }
];

// DOM 요소
const randomButton = document.getElementById('randomButton');
const resultText = document.getElementById('resultText');
const nationButtons = document.querySelectorAll('.nation .toggle-button');
const styleButtons = document.querySelectorAll('.style .toggle-button');

// 선택된 필터 가져오기
function getActiveFilters() {
    const nationButton = document.querySelector('.nation .toggle-button.active');
    const styleButton = document.querySelector('.style .toggle-button.active');
    
    const nation = nationButton ? nationButton.querySelector('span').textContent : '전체';
    const style = styleButton ? styleButton.querySelector('span').textContent : '전체';
    
    return { nation, style };
}

// 카테고리 매핑
const categoryMapping = {
    '전체': 'all',
    '한식': '한식',
    '일식': '일식',
    '중식': '중식',
    '양식': '양식',
    '아시아': '아시아'
};

const ingredientMapping = {
    '전체': 'all',
    '밥류': '밥류',
    '면류': '면류'
};

// 필터링된 음식 목록 가져오기
function getFilteredFoods(filters) {
    return foodList.filter(food => {
        const categoryMatch = filters.nation === '전체' || food.category === categoryMapping[filters.nation];
        const ingredientMatch = filters.style === '전체' || food.ingredient === ingredientMapping[filters.style];
        return categoryMatch && ingredientMatch;
    });
}

// 랜덤 음식 선택 함수
function getRandomFood(foods) {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
}

// 결과 텍스트 표시/숨김 함수
function showResult(text) {
    resultText.textContent = text;
    resultText.classList.add('show');
}

function hideResult() {
    resultText.classList.remove('show');
}

// 버튼 클릭 이벤트
randomButton.addEventListener('click', () => {
    const filters = getActiveFilters();
    const filteredFoods = getFilteredFoods(filters);
    
    if (filteredFoods.length === 0) {
        showResult('해당하는 메뉴가 없습니다.');
        return;
    }
    
    const selectedFood = getRandomFood(filteredFoods);
    showResult(`${selectedFood.name} 어때요?`);
});

// 토글 버튼 기능 수정
function setupToggleButtons(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 같은 그룹의 다른 버튼들의 active 클래스 제거
            const parent = this.closest('.nation, .style');
            parent.querySelectorAll('.toggle-button').forEach(btn => {
                btn.classList.remove('active');
            });
            // 현재 버튼 활성화
            this.classList.add('active');
            
            // 결과 텍스트 숨김
            hideResult();
        });
    });
}

// 초기화 시 결과 텍스트 숨김 상태로 시작
function initialize() {
    try {
        // ... 기존 초기화 코드 ...
        
        // 결과 텍스트 초기 상태 설정
        hideResult();
        
        // ... 나머지 초기화 코드 ...
    } catch (error) {
        console.error('Error during initialization:', error);
        showResult('데이터를 불러오는 중 오류가 발생했습니다.');
    }
}

// 토글 버튼 설정 적용
setupToggleButtons(nationButtons);
setupToggleButtons(styleButtons);

// 초기 상태 설정 - '전체' 버튼 활성화
document.querySelector('.nation .toggle-button').classList.add('active');
document.querySelector('.style .toggle-button').classList.add('active'); 
