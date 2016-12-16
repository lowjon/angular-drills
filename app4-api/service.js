angular.module('apiApp').service('lukeServiceWalker',function ($http, $q) {
  var baseUrl = 'http://swapi.co/'
  this.getLuke = function(){
    var luke = {};
    var defer =$q.defer();
    $http({
      method: 'GET',
      url: baseUrl + 'api/people/1'
    })
    .then(function (response) {
      luke.name = response.data.name;
      luke.height = response.data.height;

      return $http({
          method: 'GET',
          url: response.data.species
        })


      }).then(function (res) {
        luke.species = res.data.name;
        console.log(luke)

        defer.resolve(luke)

      })

//some sfshdfkjshdfksjdh



    return defer.promise;
  }
})
