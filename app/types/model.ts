export interface ICommunityModel {
  name: string;
  description: string;
  image: string;
  members: string | IUserModel[];
  followers: string | IUserModel[];
  deleted?: Boolean;
}

export interface IFollowingModel {
  user: string | IUserModel;
  community: string | ICommunityModel;
  deleted?: Boolean;
}

export interface IMembersModel {
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
  communities: string | ICommunityModel[];
  communityMember: string | ICommunityModel[];
  __t?: string;
  deleted?: Boolean;
}
export interface INftModel {
  address: string;
  deleted?: Boolean;
}
