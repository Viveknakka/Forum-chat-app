class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
    ){
        super(message);
        this.statusCode=statusCode;
        this.success=false;
        this.data=null;
        this.success=false;
    }
}

export {ApiError}