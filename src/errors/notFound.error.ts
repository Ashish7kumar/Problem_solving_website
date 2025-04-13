import BaseError from "./baseError.error.js";

export default class NotFound extends BaseError{
    constructor(resource_name:string)
    {
         super('Not_Found',404,` can't found ${resource_name}`,);
    }
}