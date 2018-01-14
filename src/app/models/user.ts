export default interface User {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  type: string;
  name: string;
  company: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}
