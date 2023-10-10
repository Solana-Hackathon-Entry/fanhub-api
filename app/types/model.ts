export interface ICommunityModel {
  name: string;
  description: string;
  image: string;
  deleted?: Boolean;
}

export interface IFollowingModel {
  user: string | IUserModel;
  community: string | ICommunityModel;
  deleted?: Boolean;
}

export interface IEventModel {
  name: string;
  description: string;
  image: string;
  date: Date;
  location: string;
  deleted?: Boolean;
}

export interface INftModel {
  name: string;
  description: string;
  image: string;
  symbol: string;
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
