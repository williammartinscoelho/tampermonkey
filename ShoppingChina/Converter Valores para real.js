// ==UserScript==
// @name         Converter Valores p/ real
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://compras.shoppingchina.com.py/*
// @include      https://compras.shoppingchina.com.py/*
// @icon         https://www.google.com/s2/favicons?domain=shoppingchina.com.py
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
  
    // Your code here...
  
    fetch("https://economia.awesomeapi.com.br/json/PYG-BRL")
      .then((response) => response.json())
      .then((data) => {
        convert(data[0])
      });
  
  
      function convert(data) {
          const cotacao_guarani = parseFloat(data.bid);
  
          const value_list = $("h5.card-title");
  
          $(value_list).each(function (index, h5) {
            const valueText = $(h5)
              .text()
              .replace("G$ ", "")
              .replace(".", "")
              .replace(".", "");
  
            const value = parseFloat(valueText * cotacao_guarani);
  
            $(h5).text(`R$ ${value.toFixed(2)}`);
          });
      }
  })();
  