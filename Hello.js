//DOMを取得
const $question = document.getElementById("question");
const $answers_box = document.getElementById("answers-box");
const $answers = document.getElementsByClassName("answer");
const $result = document.getElementById("result");

//問題文を定義
const questions = [
	"1 + 0 = ?", 
	"1 + 1 = ?", 
	"1 + 2 = ?", 
	"1 + 3 = ?"
];

//回答文のリストを定義
const answers_list = [
	["1", "2", "3", "4"],
	["1", "2", "3", "4"],
	["1", "2", "3", "4"],
	["1", "2", "3", "4"]
];

//解答を添字で定義
const correct_index_list = [0, 1, 2, 3];

//カウンター変数を定義
var question_counter = 0;
var correct_counter = 0;


/**
 * メソッド名		change_text
 * 機能　　　		問題文と回答のテキストを変更
 * 引数　　　		int n	クイズ番号
 */
const change_text = function(n) {
	//問題文を設定
	$question.getElementsByTagName("h2")[0].textContent = questions[n];
	//回答文を設定
	for (var i = 0; i < $answers.length; i++) {
		$answers[i].getElementsByTagName("h3")[0].textContent = answers_list[n][i];
	}
}


//読込時実行
change_text(question_counter);

//回答選択時のイベントを定義
for (var i = 0; i < $answers.length; i++) {
	$answers[i].addEventListener("click", function(e) {
		
		//選択された要素が配列の何番目かを取得
		const answer_collections = [].slice.call($answers);
		var index = answer_collections.indexOf(e.target);
		
		//正解時に正解数カウンターを加算
		if (index == correct_index_list[question_counter]) {
			correct_counter++;
		}
		
		//最後の問題時以外の場合問題文、回答文を表示
		if(question_counter < 3) {
			question_counter++;
			change_text(question_counter);
		} 
		//最後の問題児、結果を表示
		else {
			$question.getElementsByTagName("h2")[0].textContent = "result";
			$answers_box.style.display = "none";
			$result.style.display = "flex";
			$result.getElementsByTagName("h3")[0].textContent = `Your result is ${correct_counter}/4 point.`;
		}
	});
}