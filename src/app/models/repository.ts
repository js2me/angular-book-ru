import User from './user';

export default interface Repository {
  name: string;
  owner: User;
  description: string;
  size: number;
  language: string;
  watchers_count: number;
  homepage: string;
  open_issues: number;
  watchers: number;
  default_branch: string;
  forks: number;
  license: string;
  following: number;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  private;
}
