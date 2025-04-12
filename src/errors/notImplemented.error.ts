import BaseError from "./baseError.error.js";

export default class NotImplemented extends BaseError
{
    constructor(feature_name:string)
    {
        super('Not Implemented',501,`${feature_name} not implemented yet`,'');
    }
}