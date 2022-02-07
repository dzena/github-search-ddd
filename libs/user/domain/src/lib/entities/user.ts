export interface IUserListEntity {
  readonly id: string;
  readonly login: string;
  readonly avatar_url: string;
  readonly html_url: string;
  readonly url: string;
}

export interface IUser extends IUserListEntity {
  readonly name: string;
  readonly followers: number;
  readonly public_repos: number;
  readonly location: string;
}
