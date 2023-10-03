export interface ICommunityModel {
  name: string;
  description: string;
  tags: string[];
  address: string;
  deleted?: Boolean;
}

export interface IUserModel {
  firstName: string;
  lastName: string;
  __t?: string;
  deleted?: Boolean;
}

export interface INftModel {
  address: string;
  deleted?: Boolean;
}
