import { interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

// interval(period: number, scheduler: Scheduler): Observable
// 基於給定時間間隔發出數字序列。
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/creation/interval.html

// 資料來源：每 1 秒發出數字序列中的值
const source$ = interval(1000);
// 只取前 5 個元素，不然會一直取下去...
// ---0--1--2--3--4|
source$.pipe(take(5)).subscribe(val => console.log(val));
