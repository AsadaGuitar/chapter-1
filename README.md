# chapter-1 解説

1. DOMの取得
2. テキスト定義
3. テキストの変更
4. イベントアクション

### ①DOMの取得
・*document.getElementById* 関数を使用しHTML要素を取得する。
```javascript
const $question = document.getElementById("question");
const $answers  = document.getElementById("answers");
const $result   = document.getElementById("result");
```

### ②テキスト定義
・問題文、回答文、解答番号の値を持つ連想配列を問題の数、配列内で定義する。
```javascript

/*
const map = {
	key1: "value1",
	key2: "value2",
};
console.log(map.key1) --> "value1"
 */

const question_list = [
	{
		question: "Which is the largest country in the world?",
		answer_list: ["America", "China", "Russia", "Canada"],
		correct_index: 2
	},
	{
		question: "Which is the richest country in the world?",
		answer_list: ["Qatar", "Switzerland", "America", "Japan"],
		correct_index: 0
	},
	{
		question: "Which country has the highest level of happiness in the world?",
		answer_list: ["Finland", "Switzerland", "Norway", "Sweden"],
		correct_index: 0
	},
	{
		question: "Which country has the most World Heritage Sites in the world?",
		answer_list: ["America", "Italy", "Canada", "China"],
		correct_index: 1
	}
];
```

### ③テキストの変更
・取得したHTML要素のテキストを *question_list* 変数を参照し変更する。
```javascript
const change_text = (n) => {
	//問題文を設定
	$question.textContent = question_list[n].question;
	//回答文を設定
	for (let i = 0; i < $answers.children.length; i++) {
		$answers.children[i].textContent = question_list[n].answer_list[i];
	}
}
```

### ④イベントアクション
・4択クイズなので回答数だけfor文を回し、各回答のHTML要素にイベントを追加する。<br>
・変更に強いプログラムにしたいので極力リテラル（直接プログラム内に数値などを入力する事）では書かない。
```javascript
//回答選択時のイベントを定義
for (let i = 0; i < $answers.children.length; i++) {
	$answers.children[i].addEventListener("click", (e) => {

		//問題の解答を取得
		let correct = question_list[question_counter].correct_index;

		//選択された要素が配列の何番目かを取得
		let answers = [].slice.call($answers.children);
		let index   = answers.indexOf(e.target);

		//正解時に正解数カウンターを加算
		if (index === correct) {
			correct_counter++;
		}
		
		//最後の問題時以外の場合問題文、回答文を表示
		if(question_counter < question_list.length -1) {
			question_counter++;
			change_text(question_counter);
		} 
		//最後の問題時、結果を表示
		else {
			$question.style.display = "none";
			$answers.style.display  = "none";
			$result.style.display   = "flex";
			$result.textContent     =
				`Your result is ${correct_counter}/${question_list.length} point.`;
		}
	});
}
```
