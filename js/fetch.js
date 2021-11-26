'use strict';

const url = 'https://dog.ceo/api/breeds/image/random';
// 短期間に集中的にアクセスするのはよくない 1秒~2秒は感覚をあけながら使う

const options = {
    method: 'GET'
};

// const fetchTest1 = fetch(url, options);
// console.log(fetchTest1);
// 返り値はPromise
// この状態では中見が確認できない

// APIがJSONで取得できるなら、response.json()でパースする

// const fetchTest2 = fetch(url, options)
// .then( response => response.json());
// console.log(fetchTest2);

// console.log(fetchTest2.message);

//　データの取得を待ってから処理をする
//Promise, async/await

function getDogImage(url, options) {
    return fetch(url, options)
    .then( response => response.json());
}

async function getImage(url, options) {
    const response = await getDogImage(url, options);
    // console.log(response.message);

    const imageElement = document.queryElement('img');
    imageElement.src = response.message;
}

getImage(url, options);


