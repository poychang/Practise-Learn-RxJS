# RxJS 練習曲

建議使用 VS Code 進行練習，並於環境中安裝 [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) 擴充套件，詳細資訊請參考 [Quokka.js 官方網站](https://quokkajs.com/)。

## 分類

* 組合 combination
* 條件 conditional
* 創建 creation
* 錯誤處理 error_handling
* 過濾 filtering
* 多播 multi casting
* 轉換 transformation
* 工具 utility

## 建立練習環境

練習幻境的建置安裝指令

```bash
mkdir LearnRxJS
cd LearnRxJS
git init
npm init

## 安裝 RxJS
npm install rxjs
```

使用 [Visual Studio Code](https://code.visualstudio.com/) 編輯器

安裝擴充套件：

* [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
    * 能夠幫助我們在編輯器中快速建立原型測試，包括了行內錯誤提示、代碼測試與覆蓋率提示、富文本輸出格式化等等
* [Clang-Format](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format)
    * 這個工具能夠自動化格式

## Marble Diagram

* `-`           一小段時間(10 frames)
* `n(0-9/a-z)`  送出的元素(next)         ---0--1--2--3---
* `|`           送出結束(complete)      ---0--1--2--3|
* `#`           送出錯誤(error)         ---0--1--2--3---#
* `()`          同步送出

範例：

* `Observable.of(1, 2, 3)`              -> `(123|)`
* `Observable.from([1, 2, 3])`          -> `(123|)`
* `Observable.interval(10)`             -> `-0123...`
* `Observable.fromEvent(DOM, 'click')`  -> `---e--e---e-e...`
* `Observable.interval(10)`             -> `-012...`
    `.take(3)`                          -> `-01(2|)`
    `.map(x => x + 1)`                  -> `-12(3|)`
    `.filter(x => x % 2 === 0)`         -> `--2|`

## 學習資源

* [RxJS 5 中文文檔](http://cn.rx.js.org/)
* [Learn RxJS](https://www.learnrxjs.io/)
* [学习 RxJS](https://rxjs-cn.github.io/learn-rxjs-operators/)
* [RxJS5基本原理](https://github.com/RxJS-CN/rxjs5-ultimate-cn/tree/master/ebook)
* [redux-observable 中文官方文檔](https://redux-observable-cn.js.org/)
