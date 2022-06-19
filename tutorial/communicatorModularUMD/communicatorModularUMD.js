(function (root, factory) {
    if(typeof define === 'function' && define.amd){
        define([], factory);
    }
    else if(typeof exports === 'object' && module.exports){
        module.exports = factory();
    }
    else{
        root.communicatorModularUMD = factory();
    }
}(this, function(){
    function greet(message){
        return "<h1>" + message + "</h1>";
    }

    return {
        greet: greet
    }
}))