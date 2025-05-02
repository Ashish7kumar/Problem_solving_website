import { Request } from "express";

export default interface AuthenticationRequest extends Request {
  Role?: string; 
}
