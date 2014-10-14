/**
 * Created by Umair on 10/11/2014.
 */

(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource", ["$resource", productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }
}());