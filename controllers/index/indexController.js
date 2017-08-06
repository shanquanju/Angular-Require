define([

], function () {
    "use strict";

    var ctrl = ["$scope", "$state", "indexService", function ($scope, $state, indexService) {
        window.onresize = function () {
            window.location.reload();
        };

        $scope.$on('$stateChangeStart', function (event, toState) {
            // event.preventDefault();
            $scope.navigation.setSelected(toState.name);
        });

        $scope.fn = {
            onRenderFinish: function () {
                
            }
        }

        $scope.navigation = {
            current: 1,
            data: [
                { id: 1, name: "router1", state: "router1", title: "Router 1" },
                { id: 2, name: "router2", state: "router2", title: "Router 2" }
            ],
            onClick: function (nav) {
                this.current = nav.id;
                $state.go(nav.state);
            },
            setSelected: function (state) {
                var navigation = this;
                var navList = navigation.data.filter(function (element) {
                    return element.state == state;
                });

                if (!navList || navList.length == 0) {
                    return;
                }

                var nav = navList[0];
                navigation.current = nav.id;
            }
        }
    }];

    return ctrl;
});