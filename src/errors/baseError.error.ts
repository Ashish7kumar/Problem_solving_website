export default class BaseError extends Error{
    public statusCode:number;
    public details:string;
    
    constructor(name:string,statusCode:number,
        details:string
    )
    {
        super();
        this.name=name;
        this.statusCode=statusCode;
        this.details=details;
        Error.captureStackTrace(this);
    }
}
