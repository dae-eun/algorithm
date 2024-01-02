function solution(arr) {
    let answer = 0;

    // 봉우리는 상하좌우를 비교해 4가지보다 클 때 봉우리
    // 2차원 배열로 들어오는 값들을 비교 2중 for문으로 2차원 배열 비교
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // arr[i][j]에서 i의 배열이 존재하지 않는 값은 javascript에서 처리가 불가능함.
            // try catch문을 통해  error가 나는 i가 존재하지 않는 값을 0과 비교
            try {
                // 상하좌우 중 빈 값이 있다면 0으로 비교
                // 비교하려면 같은 열 +1 -1 같은 행 +1 -1 값을 비교해야함.
                if (
                    arr[i][j] > arr[i - 1][j] &&
                    arr[i][j] > arr[i + 1][j] &&
                    arr[i][j] > (arr[i][j - 1] === undefined ? 0 : arr[i][j - 1]) &&
                    arr[i][j] > (arr[i][j + 1] === undefined ? 0 : arr[i][j + 1])
                ) {
                    answer++;
                }
            } catch (error) {
                if (
                    arr[i][j] > 0 &&
                    arr[i][j] > 0 &&
                    arr[i][j] > (arr[i][j - 1] === undefined ? 0 : arr[i][j - 1]) &&
                    arr[i][j] > (arr[i][j + 1] === undefined ? 0 : arr[i][j + 1])
                ) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];
console.log(solution(arr));
