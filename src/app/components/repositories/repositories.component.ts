import {Component, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo/repo-service.service';
import Repository from '../../models/repository';


@Component({
  selector: 'repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  constructor(private repoService: RepoService) {
    repoService.getRepos();
  }

  ngOnInit() {
  }
}
