"use strict";
var ServerURLInterceptor = (function () {
    function ServerURLInterceptor() {
    }
    ServerURLInterceptor.prototype.interceptBefore = function (request) {
        if (localStorage.getItem('isLoggedIn') == "true") {
            console.log(request);
            request.options.headers.append("Authorization", "Bearer " + localStorage.getItem('token'));
        }
        return request;
    };
    ServerURLInterceptor.prototype.interceptAfter = function (response) {
        console.log(response);
        return response;
    };
    return ServerURLInterceptor;
}());
exports.ServerURLInterceptor = ServerURLInterceptor;
//# sourceMappingURL=interceptor.js.map