import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth-service.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import Repository from '../../models/repository';


@Injectable()
export class RepoService {
  readonly API_URL = 'https://api.github.com';

  Repositories = [];

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getRepos() {
    this.http.get<Repository[]>(`${this.API_URL}/users/${this.authService.ActiveUser.login}/repos`)
      .subscribe((repositories: Repository[]) => {
          console.log(repositories);
          this.Repositories = repositories;
          repositories = null;
        },
        (exception: HttpErrorResponse) => {
          this.Repositories = [];
          if (exception.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        });
  }


  public resetRepos() {
    console.log(this, this.Repositories);
    this.Repositories = [];
  }

}
