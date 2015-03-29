angular.module('starter')
	.controller('HomeCtrl', function ($scope, $ionicSlideBoxDelegate, $http, $interval) {
		
		$scope.slides = [];

		$http.get('http://www.futebits.com.br/ws/api/getJogos/14')
			.success(function(data) {
				for (var i = 0; i < data.length; i++) {
					$scope.slides.push(data[i]);
				};
			});

		$scope.nextSlide = function() {
			if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount() - 1) {
				$ionicSlideBoxDelegate.slide(0, 1000);
			} else {
				$ionicSlideBoxDelegate.slide($ionicSlideBoxDelegate.currentIndex() + 1, 1000);	
			}
		};

		$interval(function() {
			$scope.nextSlide();
		}, 5000);

	});