import {interval} from 'rxjs/Observable/interval';
import {of} from 'rxjs/Observable/of';
import {mapTo, merge} from 'rxjs/operators';

// merge(input: Observable): Observable
// 將多個 observables 轉換成單個 observable。
// 產生值的順序不是首要考慮的。
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/combination/merge.html

// 資料來源
// 每 1 秒發出值
const source1$ = interval(1000).pipe(mapTo('1s'));
// 每 2.5 秒發出值
const source2$ = interval(2500).pipe(mapTo('2.5s'));

// ---1s--1s--2.5s--1s--1s---
source1$.pipe(merge(source2$)).subscribe(val => console.log(val));
