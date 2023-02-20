import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
export interface ApplicationUser {
	accessToken: string;
	expiresIn: Date;
	username: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
	API_SERVER = "http://localhost:3000";

  // BehaviorSubject is both observer and type of observable.
// BehaviorSubject always need an initial/default value.
// Every observer on subscribe gets current value.
// Current value is either latest value emitted by source observable using next() method or initial/default value.
  private currentUserSubject: BehaviorSubject<ApplicationUser>;
	public currentUser: Observable<ApplicationUser>;

	constructor(private readonly http: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<ApplicationUser>(
			JSON.parse(localStorage.getItem('currentUser')!)	
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): ApplicationUser {
		return this.currentUserSubject.value;
	}

	login(username: string, password: string) {
		return this.http.post<any>(this.API_SERVER +'/auth/login', { username, password }).pipe(
      //  a project function is applied on each value on the source Observable and the same output is emitted as an Observable.
      // https://medium.com/@estherwavinya/rxjs-map-operator-in-angular-3c1b92d6ca21#:~:text=RxJS%20map()%20operator%20is,resulting%20values%20as%20an%20Observable.
        map(user => {
				// login successful if there's a jwt token in the response
				if (user && user.accessToken) {
					// store; user; details; and; jwt; token in local
					// storage; to; keep; user; logged in between; page; refreshes;

					localStorage.setItem('currentUser', JSON.stringify(user));
          // The subject next method is used to send messages to an observable which are then sent to all angular components that are subscribers of that observable.
					this.currentUserSubject.next(user);
				}

				return user;
			})
		);
	}

	logout() {
    let data: any= null;
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(data);
	}
}
