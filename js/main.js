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

// 토글 버튼 로직 (중복 선택/전체 버튼 예외 처리)
function setupMultiToggleButtons(buttons) {
    const btnArr = Array.from(buttons);
    const allBtn = btnArr[0]; // 첫 번째가 전체 버튼

    btnArr.forEach((btn, idx) => {
        btn.addEventListener('click', function() {
            if (idx === 0) {
                // 전체 버튼 클릭: 전체만 on, 나머지 off
                btnArr.forEach((b, i) => {
                    if (i === 0) b.classList.add('active');
                    else b.classList.remove('active');
                });
            } else {
                // 전체 버튼 off, 해당 버튼 토글
                allBtn.classList.remove('active');
                btn.classList.toggle('active');
                // 전체 외 버튼이 모두 off면 전체 버튼 on
                const anyActive = btnArr.slice(1).some(b => b.classList.contains('active'));
                if (!anyActive) allBtn.classList.add('active');
            }
            hideResult();
        });
    });
}

// 여러 개의 active 값을 반환하는 함수
function getActiveFiltersMulti() {
    // nation
    const nationBtns = document.querySelectorAll('.nation .toggle-button');
    const nationActive = [];
    nationBtns.forEach((btn, idx) => {
        if (btn.classList.contains('active')) {
            nationActive.push(btn.querySelector('span').textContent);
        }
    });
    // style
    const styleBtns = document.querySelectorAll('.style .toggle-button');
    const styleActive = [];
    styleBtns.forEach((btn, idx) => {
        if (btn.classList.contains('active')) {
            styleActive.push(btn.querySelector('span').textContent);
        }
    });
    return { nation: nationActive, style: styleActive };
}

// 여러 active 값 필터링
function getFilteredFoodsMulti(filters) {
    return foodList.filter(food => {
        const nationAll = filters.nation.includes('전체');
        const nationMatch = nationAll || filters.nation.includes(food.category);
        const styleAll = filters.style.includes('전체');
        const styleMatch = styleAll || filters.style.includes(food.ingredient);
        return nationMatch && styleMatch;
    });
}

// 랜덤 음식 선택 함수
function getRandomFood(foods) {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
}

// 결과 텍스트 표시/숨김 함수
function showResult(foodName) {
    resultText.innerHTML = `<span style="color:#FF5500">${foodName}</span> 어때요?`;
    resultText.classList.add('show');
}
function hideResult() {
    resultText.classList.remove('show');
}

// 추천받기 버튼 클릭 이벤트
randomButton.addEventListener('click', () => {
    const filters = getActiveFiltersMulti();
    const filteredFoods = getFilteredFoodsMulti(filters);

    if (filteredFoods.length === 0) {
        showResult('해당하는 메뉴가 없습니다.');
        return;
    }
    const selectedFood = getRandomFood(filteredFoods);
    showResult(selectedFood.name);
});

// nation/style 토글 버튼 모두에 적용
setupMultiToggleButtons(nationButtons);
setupMultiToggleButtons(styleButtons);

// 초기 상태: 전체 버튼만 active
nationButtons[0].classList.add('active');
styleButtons[0].classList.add('active'); 
