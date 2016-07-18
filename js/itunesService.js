angular.module('itunes').service('itunesService', function($http, $q) {

    // this.getArtist = function (artist){
    //
    //   var url = "https://itunes.apple.com/search?term=" + artist + '&callback=JSON_CALLBACK';
    //   return $http.jsonp(url).then(function(response){
    //     r = response.data.results;
    //     formattedArray = [];
    //     for (var index in r){
    //       formattedArray.push(new Prototype (r[index]));
    //       //response.data.results[]
    //     }
    //     return formattedArray;
    //   });
    // };
    //   // )};
    //
    // function Prototype (artist) {
    //   this.Artist = artist.artistName;
    //   this.AlbumArt = artist.artworkUrl60;
    //   this.Track = artist.trackName;
    //   this.Price = artist.trackPrice;
    //   this.Collection = artist.collectionName;
    // }

    this.getArtist = function(artist) {
        var url = "https://itunes.apple.com/search?term=" + artist + '&callback=JSON_CALLBACK';

        return $http.jsonp(url).then(function(response) {
            r = response.data.results;
            formattedArray = [];

            for (var index in r){
                formattedArray.push({
                  Artist : r[index].artistName,
                  AlbumArt : r[index].artworkUrl60,
                  Track : r[index].trackName,
                  Price : r[index].trackPrice,
                  Collection: r[index].collectionName,
                  Play : r[index].previewUrl
                });
            }

            return formattedArray;
        });

    };

});
