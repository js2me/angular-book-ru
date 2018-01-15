import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth-service.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  authFormShowed = false;
  showFullUserPhoto = false;
  usernameInputRegExp = new RegExp(/((?!.*(-){2,}.*)[a-z0-9][a-z0-9-]{0,38}[a-z0-9])/);

  constructor(public authService: AuthService) {
  }

  showAuthForm() {
    this.authFormShowed = !this.authFormShowed;
  }

  showHideUserPhoto(show) {
    this.showFullUserPhoto = show;
  }

  validateForm(username: HTMLInputElement) {
    username.classList.remove('pristine');
    if (username.value === '' || !this.usernameInputRegExp.test(username.value)) {
      username.classList.add('invalid');
    } else {
      username.classList.remove('invalid');
    }
  }

  auth(username: HTMLInputElement) {
    if (this.authService.ActiveUser === null) {
      this.authService.getUser(username.value);
    } else {
      this.authService.ActiveUser = null;
    }
  }

  ngOnInit() {
  }
}
