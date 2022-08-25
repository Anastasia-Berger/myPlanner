class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        tasks: 'https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks'
        // image: "http://localhost:8080/api/cats/images/"
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        tasks: 'aws.moshe.com'
        // image: "http://localhost:8080/api/cats/images/"
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;