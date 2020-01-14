import { of } from 'rxjs';
import { take } from 'rxjs/operators';

// take(count: number): Observable
// 在完成前發出 N 個值(N 由參數決定)。
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/filtering/take.html

// 資料來源
const source$ = of(1, 2, 3, 4, 5);

source$.pipe(take(2)).subscribe(val => console.log(val));
