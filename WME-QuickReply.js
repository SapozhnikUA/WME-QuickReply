// ==UserScript==
// @name         WME Quick Reply
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      https://*waze.com/*editor*
// @exclude      https://*waze.com/*user/editor*
// @updateURL    https://github.com/SapozhnikUA/WME-QuickReply/blob/master/WME-QuickReply.js
// @downloadURL  https://github.com/SapozhnikUA/WME-QuickReply/blob/master/WME-QuickReply.js
// @grant        none
// ==/UserScript==


// Ищем окно отчета
let UR_form = document.getElementById('panel-container');

// Нужно !!!! проверить есть ли ul? если нет то вставить первым
let UR_form_ul = UR_form.getElementsByTagName('ul');



// Ищем кол-во ul (???? не получается lastchild) //UR_form.getElementsByTagName('ul').lastchild
let UR_num = UR_form.getElementsByTagName('ul').length;

// Переходим к последней ul
let UR_form_ul_last = UR_form_ul[UR_num-1];

// Добавляем еще строку.
UR_form_ul_last.innerHTML += `<li class="comment" id = "comment_insert"><div class="comment-content">
<div class="text"><div><span>Добавляем строку</span></div></div>
</div></li>`;



