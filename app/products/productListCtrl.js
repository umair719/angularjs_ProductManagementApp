/**
 * Created by Umair on 10/10/2014.
 */

(function () {
    "use strict";
    angular.module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);

    function ProductListCtrl() {
        var vm = this;
        vm.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "leaf rake with 18-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "leaf rake with 18-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous.png"
            }
        ];

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }

    }


}());