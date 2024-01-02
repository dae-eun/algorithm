function solution(s, t) {
    let answer = [];
    let p = 1000;

    let strItem = []; // 문자와 인덱스를 담을 객체
    let searchTInstrItem = []; // 주어진 t값이 있는 index를 담는 객체
    let compareItem = [];

    // 문자열 s 의 문자별 인덱스 값 추출
    s = s.split("");
    s.forEach((element, index) => {
        strItem = [...strItem, { element: element, index: index }];
    });

    // 주어진 t값에 일치하는 문자열과 인덱스를 가지는 배열 생성
    searchTInstrItem = strItem.filter((obj) => obj.element === t);

    for (let i = 0; i < strItem.length; i++) {
        for (let j = 0; j < searchTInstrItem.length; j++) {
            // 인덱스의 차 구하기
            let item = strItem[i].index - searchTInstrItem[j].index;
            // 절대값
            item = Math.abs(item);
            compareItem.push(item);
        }
        // 배열 내 최소값 구해 answer에 넣어주기
        answer.push(Math.min.apply(null, compareItem));
        compareItem = [];
    }
    answer = answer.join(" ");
    return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
