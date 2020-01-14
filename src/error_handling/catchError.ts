import { throwError, of } from 'rxjs'; // RxJS v6+
import { catchError } from 'rxjs/operators';

// catchError(project : function): Observable
// 使用 catchError 時，一定要在最後回傳一個 observable
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/error_handling/catch.html

// 發出錯誤
const source$ = throwError('This is an error!');
// 使用 cacheError 處理錯誤，並回傳帶有錯誤訊息的 observable
const sourceObject$ = source$.pipe(catchError(val => of(`I caught: ${val}`)));
sourceObject$.subscribe(val => console.log(val));
