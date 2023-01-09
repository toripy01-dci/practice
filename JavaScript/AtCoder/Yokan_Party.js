function main(input) {
    //入力値を取得
    const input_data = input.split("\n");
    const [n, l] = input_data[0].split(" ").map(Number);
    const k = Number(input_data[1]);
    const a = input_data[2].split(" ").map(Number);

    //関数定義
    const arymin = function (a, b) { return Math.min(a, b); }
    const score_merge = function (obj, index, num) {
        console.log(obj, index, num);
        if (index < num) {
            let obj_remove = obj.splice(index - 1, 2, obj[index - 1] + obj[index]);
        } else if (index + num > obj.length - 1) {
            let obj_remove = obj.splice(index, 2, obj[index] + obj[index + 1]);
        } else {
            if (obj[index - num] < obj[index + num]) {
                let obj_remove = obj.splice(index - 1, 2, obj[index - 1] + obj[index]);
            } else if (obj[index - num] > obj[index + num]) {
                let obj_remove = obj.splice(index, 2, obj[index] + obj[index + 1]);
            } else {
                console.log(obj, index, num);
                obj = score_merge(obj, index, num + 1);
            }
        }
        return obj;
    }

    //切れ目ごとのスコアを算出
    let score_list = [];
    for (let i = 0; i < a.length; i++) {
        if (i == 0) {
            score_list.push(a[i]);
        } else {
            score_list.push(a[i] - a[i - 1]);
        }
    }
    score_list.push(l - a[a.length - 1]);

    //要素数が「k+1」になるまで小さいスコアから順に隣接する要素のうちより小さい方と合算
    for (let i = score_list.length; i > k + 1; i--) {
        let min = score_list.reduce(arymin);
        let min_index = score_list.indexOf(min);
        if (min_index == 0) {
            let score_list_remove = score_list.splice(0, 2, score_list[0] + score_list[1]);
        } else if (min_index == score_list.length - 1) {
            let score_list_remove = score_list.splice(min_index - 1, 2, score_list[min_index - 1] + score_list[min_index]);
        } else {
            score_list = score_merge(score_list, min_index, 1);
        }
    }
    console.log(score_list.reduce(arymin));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));