<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  Youtube API Updated
  <script src="https://apis.google.com/js/api.js"></script>
  <script>
    /**
     * Sample JavaScript code for youtubeAnalytics.reports.query
     * See instructions for running APIs Explorer code samples locally:
     * https://developers.google.com/explorer-help/code-samples#javascript
     */

    function authenticate() {
      return gapi.auth2.getAuthInstance()
          .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
          .then(function() { console.log("Sign-in successful"); },
                function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
      gapi.client.setApiKey("AIzaSyAPro0w7q6xXMoJX6RJb9L6gi0m0_t5rAw");
      return gapi.client.load("https://youtubeanalytics.googleapis.com/$discovery/rest?version=v2")
          .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
      return gapi.client.youtubeAnalytics.reports.query({
        "dimensions": "video",
        "endDate": "2023-06-30",
        "ids": "channel==UCJekW1Vj5fCVEGdye_mBN6Q",
        "maxResults": 10,
        "metrics": "estimatedMinutesWatched,views,likes,subscribersGained",
        "sort": "-estimatedMinutesWatched",
        "startDate": "2023-01-01"
      })
          .then(function(response) {
                  // Handle the results here (response.result has the parsed body).
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
    }
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "153851104649-didukjfqtao9o3aihnj49kv2gkbe3a16.apps.googleusercontent.com"});
    });
  </script>
  <button onclick="authenticate().then(loadClient)">authorize and load</button>
  <button onclick="execute()">execute</button>
</body>
</html>
