import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    ) {}

    username = new FormControl('exbinario');
    password = new FormControl('12345');
    hide = true;

  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.className = "selector";
  }

  ngOnDestroy(){
    document.body.className="";
  }

// Método que se ejecuta al hacer clic en el botón de inicio de sesión
login() { 
const user = {
  username: this.username.value,
  password: this.password.value
}
console.log(user);
this.router.navigate(["/"]);
}

}
