import * as _ from 'lodash';

class Communicator {
    constructor() { }

    greet(message: string) {
        // return "<h1>" + message + "</h1>";
        return "<h1>" + _.toUpper(message) + "</hh1>";
    };
}

let communicator = new Communicator();
document!.body.innerHTML = communicator.greet("Hello Heaven!");