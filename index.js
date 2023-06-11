var hasGotEditButton = false;
var attemptCount = 0;
var maxAttemptTimes = 5;
var GITHUB_EASY_EDIT_BUTTON_CLASS_NAME = 'github-easy-edit-button'

// editButtonが取得できたりできなかったりしたため複数回試行する
// TODO: スタイルなんとかする
function loop() {
  setTimeout(function() {
    // TODO: これだと1つしかできない
    var editButton = document.getElementsByClassName('f5 text-normal')[0].parentNode.getElementsByClassName('dropdown-item btn-link js-comment-edit-button')[0]

    if (editButton != undefined) {
      var easyEditButton = editButton.cloneNode(true);
      easyEditButton.classList.add(GITHUB_EASY_EDIT_BUTTON_CLASS_NAME);
      document.getElementsByClassName('timeline-comment-header clearfix d-flex')[0].prepend(easyEditButton);
      var actionButton = document.getElementsByClassName('f5 text-normal')[0].parentNode.getElementsByClassName('timeline-comment-action Link--secondary Button--link Button--medium Button')[0];
      actionButton.click();
      hasGotEditButton = true;
    } else if (attemptCount < (maxAttemptTimes - 1) || !hasGotEditButton) {
      attemptCount++;
      setTimeout(loop, 0);
    }
  }, 100);
}

var actionButton = document.getElementsByClassName('f5 text-normal')[0].parentNode.getElementsByClassName('timeline-comment-action Link--secondary Button--link Button--medium Button')[0];
actionButton.click();
loop();
