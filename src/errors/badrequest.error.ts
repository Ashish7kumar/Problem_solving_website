const BaseError=require('./baseError.js');
export default class BadRequest extends BaseError{
   constructor(property_name : string,details:string){
         super('BadRequest',404,`wrong structure for ${property_name}`);
   }
}
