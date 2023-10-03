import * as MODEL from "./model";

export interface IAddUserDto {
  firstName: string;
  lastName: string;
  type?: string;
  deleted?: Boolean;
}

export { MODEL };
