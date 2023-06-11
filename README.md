# github-easy-edit
make editing pr description/comment on GitHub easier

# dev memo(後で消す)
1. document.getElementsByClassName('f5 text-normal')[0].parentNode.getElementsByClassName('timeline-comment-actions') // dropdown-item btn-link js-comment-edit-button で直接とれるかも
`document.getElementsByClassName('f5 text-normal')[0].parentNode.getElementsByClassName('dropdown-item btn-link js-comment-edit-button')[0].click()`
1. easyEditButtonのhtmlを定義
1. easyEditButtonのonclickにb.click()を仕込んでおく
1. `f5 text-normal`にeasyEditButtonをappendChildする
    `document.getElementsByClassName('f5 text-normal')[0].appendChild(bb)`
