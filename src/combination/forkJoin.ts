import { Observable, forkJoin, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// forkJoin(...args, selector : function): Observable
// 當所有 observables 完成時，發出每個 observable 的最新值。
// 如同 Promise.all() 會於裡面的 observables 都完成後再一次回傳
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/combination/forkjoin.html

// 資料來源
const source1$ = timer(1000).pipe(mapTo('1s'));
const source2$ = timer(2000).pipe(mapTo('2s'));
const source3$ = timer(3000).pipe(mapTo('3s'));

forkJoin(source1$, source2$, source3$).subscribe(val => console.log(val));
