app.config(function($stateProvider, $sceProvider) {
    
    $sceProvider.enabled(false);
    
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'app/components/home.html'
        })
        .state('2', {
            url: '/2',
            templateUrl: 'app/components/page-two.html'
        })
});