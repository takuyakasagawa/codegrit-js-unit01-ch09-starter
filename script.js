

//画像情報のオブジェクトを格納した配列
const picArray = [
{src: './images/pic_1.jpg', title: 'picture 1'},
{src: './images/pic_2.jpg', title: 'picture 2'},
{src: './images/pic_3.jpg', title: 'picture 3'},
{src: './images/pic_4.jpg', title: 'picture 4'},
{src: './images/pic_5.jpg', title: 'picture 5'},
{src: './images/pic_6.jpg', title: 'picture 6'}
];

picArray[0];// 画像1の取り出し
picArray[1];// 画像2の取り出し
picArray[2];// 画像3の取り出し
picArray[3];// 画像4の取り出し
picArray[4];// 画像5の取り出し
picArray[5];// 画像6の取り出し

//スライドショーが再生中かどうかを記録しておくためのグローバル変数
//写真を切り替える関数
//関数名「changePicture」
let counter = 0;
let playingID = 0;
function changePicture(){
    if (picArray.length > counter) {
        document.getElementById('pic-title').innerHTML = picArray[counter].title;
        document.getElementById('pics').src = picArray[counter].src;
        counter++;
    } else {
        document.getElementById('pic-title').innerHTML = picArray[0].title;
        document.getElementById('pics').src = picArray[0].src;
        counter = 1;
    }
}
// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」
function playSlidedeshow(){
    if (playingID == 0) {
        document.getElementById('playButton').innerHTML = 'STOP';
        playingID = setInterval(changePicture,2000);
    } else {
        clearInterval(playingID);
        document.getElementById('playButton').innerHTML = 'PLAY';
        playingID = 0;
    }
}