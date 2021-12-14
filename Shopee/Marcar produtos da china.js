// ==UserScript==
// @name         Marcar produtos da china
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://shopee.com.br/search*
// @include      https://shopee.com.br/search*
// @icon         https://www.google.com/s2/favicons?domain=shopee.com.br
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  setTimeout(function () {
    document.querySelector(".shopee-sort-by-options").innerHTML +=
      "<button class='marcarChina' style='z-index:1000; position:fixed; top:0; right:0'>Marcar China</button>";

    document
      .querySelector(".marcarChina")
      .addEventListener("click", function () {
        const cardList = document.querySelectorAll("._1w5FgK");

        cardList.forEach(function (card) {
          if (card.innerHTML === "China Continental") {
            card.parentNode.style.backgroundColor = "rgba(0,0,0,0.4)";
          }
        });
      });
  }, 5000);
})();
