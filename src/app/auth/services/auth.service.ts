import { Injectable } from "@angular/core";
import { User, UserLogin } from "../../common/interfaces";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private router:Router){}

  private hasToken(): boolean {
    return !!sessionStorage.getItem('currentUser');
  }

  register(user: User): boolean {
    // Verificar si el usuario ya existe en localStorage
    const existingUser = JSON.parse(localStorage.getItem('users')?? '[]');
    if (existingUser && existingUser.find((u:any) => u.username === user.username)) {
      throw new Error('El usuario ya existe');
    }

    // Crear un nuevo usuario en localStorage
    const users = existingUser || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Guardar el usuario registrado en localStorage
    localStorage.setItem('registeredUser', JSON.stringify(user));

     if(localStorage.getItem('users') && localStorage.getItem('registeredUser')){
       return true;
     }else{
       return false;
     }

  }

  login(userLogin: UserLogin): boolean {
    const users = JSON.parse(localStorage.getItem('users') ?? '[]');
    const user = users.find((u: any) => u.username === userLogin.username && u.password === userLogin.password);

    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.loggedIn.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.loggedIn.next(false);

  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

}
