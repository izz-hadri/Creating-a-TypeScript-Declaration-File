(function(window) {
    var defaultMessage = "Heh";
    if(typeof (window.communicatorGlobal) === "undefined"){
        window.communicatorGlobal = function(message) {
            if(message == "undefined"){
                message = defaultMessage;
            }

            return "<h1>" + message + "</h1>";
        };
    }
})(window);