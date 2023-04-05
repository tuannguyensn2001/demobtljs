let inputUserCMT = document.querySelector('#input-user-comment');
let ulShow = document.querySelector("#ul-show-comment");
let commentUserShow = document.querySelector("#input-comment");

let valueInputUserCMT;

inputUserCMT.addEventListener("change" , (event)=> {
    const tagLi = document.querySelectorAll("#ul-show-comment li");

    valueInputUserCMT = inputUserCMT.value;

    let html = `<li>
                    <div class="action-comment-user">
                        <div class="left-action-comment-user">
                            <img src="./assets/images/glx_trade.png" alt="">
                        </div>
                            <div class="right-action-comment-user">
                                <div class="input-comment" id="input-comment">
                                    <p>${valueInputUserCMT}</p>
                                </div>
                        </div>
                     </div>
                </li>`;
    tagLi[tagLi.length -1].insertAdjacentHTML("afterend", html);

})


console.log(ulShow);

