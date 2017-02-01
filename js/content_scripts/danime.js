console.log("danime store movie");

var cb = new Codebird;
cb.setConsumerKey(consumer_key, consumer_secret);
cb.setToken(oauth_token, oauth_token_secret);
cb.setUseProxy(false);

var video = $("#video").get(0);
video.addEventListener("ended", function(e){
  console.log("ended", e);

  var animeTitle = $(".backInfoTxt1").text();
  var animeEpisodeNumber = $(".backInfoTxt2").text();
  var animeEpisodeTitle = $(".backInfoTxt3").text();

  console.log(animeTitle, animeEpisodeNumber, animeEpisodeTitle);
  cb.__call(
    "statuses_update",
    {"status": "Watched 『" + animeTitle + " " + animeEpisodeNumber + " " + animeEpisodeTitle + "』 on danime #danimemory"},
    function (reply, rate, err) { }
  );
});
