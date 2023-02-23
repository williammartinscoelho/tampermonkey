// ==UserScript==
// @name         chicorei
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adicionar botão para abrir imagem art do site chico rei
// @author       You
// @match        https://chicorei.com/roupas/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chicorei.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('Inciado')

    setTimeout(function() {
        console.log('executando script...')


        const paginationList = document.querySelectorAll('.cr-pagination li')

        paginationList.forEach(el => {
            el.addEventListener('click', function() {
                setTimeout(function () {location.reload()}, 1000)
            })
        })

        const artList = document.querySelectorAll('.product-list-item-art')

        artList.forEach(el => {
            try {
                let src = el.dataset.src

                if (src !== undefined) {
                    src = src.match(/https%3A%2F%2Fchicorei.*?\.(png|gif)/i)

                    if (src !== null) {
                        src = src[0].replace('%3A', ':').replaceAll('%2F', '/')
                    }
                }


                const li = el.parentElement.parentElement.parentElement.parentElement
                li.innerHTML = li.innerHTML + `<button onclick="window.open('${src}')">Abrir link</button>`
            } catch (error) {
                alert('dfasd')
            }


        })
    }, 1000)
})();