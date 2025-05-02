// 음식 데이터 로드
let foodList = [];

// 카테고리 매핑
const categoryMapping = {
    '전체': null,
    '한식': '한식',
    '일식': '일식',
    '중식': '중식',
    '양식': '양식',
    '아시아': '아시아'
};

const ingredientMapping = {
    '전체': null,
    '밥류': '밥류',
    '면류': '면류'
};

// DOM 요소
const randomButton = document.getElementById('randomButton');
const resultText = document.getElementById('resultText');
const nationButtons = document.querySelectorAll('.nation .toggle-button');
const styleButtons = document.querySelectorAll('.style .toggle-button');

// 선택된 필터 가져오기
function getActiveFilters() {
    const nationButton = document.querySelector('.nation .toggle-button.active');
    const styleButton = document.querySelector('.style .toggle-button.active');
    
    return {
        nation: nationButton ? nationButton.querySelector('span').textContent : '전체',
        style: styleButton ? styleButton.querySelector('span').textContent : '전체'
    };
}

// 필터링된 음식 목록 가져오기
function getFilteredFoods(filters) {
    return foodList.filter(food => {
        // 카테고리 매칭 (전체 선택 시 모든 카테고리 포함)
        const categoryMatch = categoryMapping[filters.nation] === null || 
                            food.category === categoryMapping[filters.nation];
        
        // 종류 매칭 (전체 선택 시 모든 종류 포함)
        const ingredientMatch = ingredientMapping[filters.style] === null || 
                              food.ingredient === ingredientMapping[filters.style];
        
        return categoryMatch && ingredientMatch;
    });
}

// 랜덤 음식 선택 함수
function getRandomFood(foods) {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
}

// 토글 버튼 기능
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
        });
    });
}

// 초기 데이터 로드 및 이벤트 설정
async function initialize() {
    try {
        // 데이터 로드
        const response = await fetch('./json/food_list.json');
        foodList = await response.json();

        // 버튼 이벤트 설정
        randomButton.addEventListener('click', () => {
            const filters = getActiveFilters();
            const filteredFoods = getFilteredFoods(filters);
            
            if (filteredFoods.length === 0) {
                resultText.textContent = '해당하는 메뉴가 없습니다.';
                return;
            }
            
            const selectedFood = getRandomFood(filteredFoods);
            resultText.textContent = `오늘의 추천 메뉴는 "${selectedFood.name}" 입니다!`;
        });

        // 토글 버튼 설정
        setupToggleButtons(nationButtons);
        setupToggleButtons(styleButtons);

        // 초기 상태 설정 - '전체' 버튼 활성화
        document.querySelector('.nation .toggle-button').classList.add('active');
        document.querySelector('.style .toggle-button').classList.add('active');

    } catch (error) {
        console.error('초기화 중 오류 발생:', error);
        resultText.textContent = '데이터를 불러오는 중 오류가 발생했습니다.';
    }
}

// 초기화 실행
initialize();
