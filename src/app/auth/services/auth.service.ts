import { Injectable } from "@angular/core";
import { User, UserLogin } from "../../shared/interfaces";
import { Router, NavigationEnd } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private timeOut:any;

  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.checkAuthStatus();
        this.checkCoreStatus();
      }
    })
  }

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
      this.timeOut = setTimeout(() => {
        this.logout();
      }, 3600000); //funciona
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    clearTimeout(this.timeOut);
    alert('Has cerrado sesión');

  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  checkAuthStatus(): void {
    if (this.getToken()) {
      const currentUrl = this.router.url;
      // console.log(currentUrl);
      if (currentUrl.startsWith('/auth/login') || currentUrl.startsWith('/auth/register')) {
        this.router.navigate(['/home']);
      }
    }
  }
  checkCoreStatus(): void {
    if (!this.getToken()) {
      const currentUrl = this.router.url;
      // console.log(currentUrl);
      if (currentUrl.startsWith('/core') ) {
        this.router.navigate(['/home']);
      }
    }
  }

  getToken(): boolean {
    return !!sessionStorage.getItem('currentUser');
  }

}
