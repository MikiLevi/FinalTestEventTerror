import { Schema } from "mongoose";

export interface IEvent {
  _id: Schema.Types.ObjectId;
  eventid: number;
  iyear: number;
  imonth: number;
  iday: number;
  country_txt: string;
  region_txt: string;
  city: string;
  latitude: number;
  longitude: number;
  attacktype1_txt: string;
  targtype1_txt: string;
  target1: string;
  gname: string;
  weaptype1_txt: string;
  nkill: number;
  nwound: number;
  ransomamt: number;
  summary: string;
}

export interface AttackData {
  _id: string;
  total: number;
}

export interface casualty {
  _id: string;
  region_txt: IEvent;
}
