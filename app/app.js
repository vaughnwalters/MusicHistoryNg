"use strict";


let songHolder;

// ********ANGULAR******

var app = angular.module("MusicHistory", []);

app.controller("Controller", function ($scope, $http) {
  $scope.newSong = {};
  $scope.showListView = true;
  $scope.viewMusic = function() {
    $scope.showListView = true;
  }
  $scope.addMusic = function() {
    $scope.showListView = false;
  }
  
// async call
  $http({
  method: 'GET',
  url: 'songs.json'
  }).then(function (cont) {
    songHolder = cont.data.songs;
    // items to iterate over with "thingy in items in index page"
    $scope.items = songHolder;
  }, function errorCallback(response) {
    console.log("dat shit broke yo");
  });
})

