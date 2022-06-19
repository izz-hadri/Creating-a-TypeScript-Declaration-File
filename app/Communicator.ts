// import * as _ from 'lodash';

class Communicator {
    constructor() { }

    greet(message: string) {
        // return "<h1>" + message + "</h1>";
        return communicatorGlobal(message);
    };
}

let communicator = new Communicator();
document!.body.innerHTML = communicator.greet("Hello Heaven!");
