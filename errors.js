class ElementNotFoundError extends Error{
    constructor(message){
        super(message)
    }
}

class EmptyArrayError extends Error{
    constructor(message){
        super(message)
    }
}

class multiplicatorUnitFailure extends Error{
    constructor(){
        super('klunk')
    }
}
