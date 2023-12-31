var maxAttemptTimes = 5;
var GITHUB_EASY_EDIT_BUTTON_CLASS_NAME = 'github-easy-edit-button'

// editButtonが取得できたりできなかったりしたため複数回試行している
function loop(i) {
  var hasGotEditButton = false;
  var attemptCount = 0;
  console.log({ i, attemptCount, hasGotEditButton })
  setTimeout(function() {
    var editButton = document.getElementsByClassName('f5 text-normal')[i].parentNode.getElementsByClassName('dropdown-item btn-link js-comment-edit-button')[0]

    if (editButton != undefined) {
      var easyEditButton = editButton.cloneNode(true);
      easyEditButton.classList.add(GITHUB_EASY_EDIT_BUTTON_CLASS_NAME);
      document.getElementsByClassName('timeline-comment-header clearfix d-flex')[i].prepend(easyEditButton);

      hasGotEditButton = true;
    } else if (attemptCount < (maxAttemptTimes - 1) || !hasGotEditButton) {
      attemptCount++;
      setTimeout(loop(i), 0);
    }
  }, 100);
}

// FIXME: リロード・リンク直叩きしないと動かない https://github.com/kyu08/github-easy-edit/issues/2
for (let i = 0; i < document.getElementsByClassName('f5 text-normal').length; i++) {
  var actionButton = document.getElementsByClassName('f5 text-normal')[i].parentNode.getElementsByClassName('timeline-comment-action Link--secondary Button--link Button--medium Button')[0];
  actionButton.click();
  loop(i);
  actionButton.click();
}
