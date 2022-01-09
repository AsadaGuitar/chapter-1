//DOMを取得
const $question = document.getElementById("question").getElementsByTagName("h2")[0];
const $answers_box = document.getElementById("answers-box");
const $answers = document.getElementsByClassName("answer");
const $result = document.getElementById("result");

//HTMLCollectionから配列を作成
const answer_collections = [].slice.call($answers);

//問題文を定義
const questions = ["1 + 0 = ?", "1 + 1 = ?", "1 + 2 = ?", "1 + 3 = ?"];
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



const change_text = function(n) {
	//問題文を設定
	$question.textContent = questions[n];
	//回答文を設定
	for (var i = 0; i < $answers.length; i++) {
		$answers[i].getElementsByTagName("h3")[0].textContent = answers_list[n][i];
	}
}
change_text(question_counter);


for (var i = 0; i < $answers.length; i++) {
	$answers[i].addEventListener("click", function(e) {
		
		var index = answer_collections.indexOf(e.target);
		
		if (index == correct_index_list[question_counter]) {
			correct_counter++;
		}
		
		if(question_counter < 3) {
			question_counter++;
			change_text(question_counter);
		} else {
			$question.textContent = "result";
			$answers_box.style.display = "none";
			$result.style.display = "flex";
			$result.getElementsByTagName("h3")[0].textContent = `Your result is ${correct_counter}/4 point.`;
		}
		
	});
}