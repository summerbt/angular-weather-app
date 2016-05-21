angular.module('owmHistory', [])
    .controller('HistoryCtrl', ['owmHistory', '$scope', function (owmHistory, $scope) {
        $scope.listings = owmHistory.list();
    }])
    .factory('owmHistory', function () {
        var historyQueue = [];
        return {
            push: function (entry) {
                historyQueue.push(entry);
            },
            list: function (entry) {
                return historyQueue;
            }
        };
    });
