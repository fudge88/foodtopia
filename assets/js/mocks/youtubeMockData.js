//mock data from YouTube API call, where recipe title is used as a parameter
const youtubeVideosMockData = {
  kind: "youtube#searchListResponse",
  etag: "RYz6boEHROwib2MdRBQ6aGg1IEY",
  nextPageToken: "CAUQAA",
  regionCode: "GB",
  pageInfo: {
    totalResults: 49091,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "wkW5VLez3GGB0PxB8a1Tf57l7fU",
      id: {
        kind: "youtube#video",
        videoId: "YRDP6m3Pakc",
      },
      snippet: {
        publishedAt: "2021-05-23T15:00:14Z",
        channelId: "UC76vuUkGWnPUDFWcgM2_yMg",
        title:
          "PANZANELLA: la ricetta tradizionale toscana. BUONISSIMA e VELOCISSIMA da preparare!",
        description:
          "La panzanella è un piatto tipico della cucina tradizionale toscana. L'ingrediente principe è il pane toscano raffermo ammorbidito con acqua e aceto di vino ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YRDP6m3Pakc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/YRDP6m3Pakc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/YRDP6m3Pakc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "GialloZafferano",
        liveBroadcastContent: "none",
        publishTime: "2021-05-23T15:00:14Z",
      },
    },

    {
      kind: "youtube#searchResult",
      etag: "0IIzY6SlRWVP7qh0McPLRfHM1Rw",
      id: {
        kind: "youtube#video",
        videoId: "MgFaniMyEGM",
      },
      snippet: {
        publishedAt: "2019-07-25T10:08:55Z",
        channelId: "UCwcbypiMObrJ9Xca6aqrBwQ",
        title: "Tuscan Panzanella Salad",
        description:
          "PS: click the link below for the recipe from this video, including the exact ingredients and the farm's kitchen “tips and tricks”: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/MgFaniMyEGM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/MgFaniMyEGM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/MgFaniMyEGM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Buongiorno Fattoria La Vialla",
        liveBroadcastContent: "none",
        publishTime: "2019-07-25T10:08:55Z",
      },
    },

    {
      kind: "youtube#searchResult",
      etag: "39u7gnwOzaEnm6ievUffXKYnChQ",
      id: {
        kind: "youtube#video",
        videoId: "dwcaokFCtBk",
      },
      snippet: {
        publishedAt: "2008-07-29T22:56:44Z",
        channelId: "UC5mgzLSeRkllcI9m96Or1Pg",
        title: "NINO MANFREDI-LA PANZANELLA",
        description: 'Nino manfredi canta "La panzanella"',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/dwcaokFCtBk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/dwcaokFCtBk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/dwcaokFCtBk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "parsec85",
        liveBroadcastContent: "none",
        publishTime: "2008-07-29T22:56:44Z",
      },
    },

    {
      kind: "youtube#searchResult",
      etag: "7XPQAxZ-AfZcXXC2dJj6Wpi-aIs",
      id: {
        kind: "youtube#video",
        videoId: "J-Rn9DN3IjU",
      },
      snippet: {
        publishedAt: "2014-08-19T00:33:13Z",
        channelId: "UCRIZtPl9nb9RiXc9btSTQNw",
        title:
          "Crispy Panzanella Salad - Tuscan Bread &amp; Tomato Salad Recipe",
        description:
          "Learn how to make a Crispy Panzanella Salad recipe! Go to http://foodwishes.blogspot.com/2014/08/under-my-panzanella-ella-ella-ella.html for the ingredient ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/J-Rn9DN3IjU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/J-Rn9DN3IjU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/J-Rn9DN3IjU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Food Wishes",
        liveBroadcastContent: "none",
        publishTime: "2014-08-19T00:33:13Z",
      },
    },

    {
      kind: "youtube#searchResult",
      etag: "We8EOtvNTkyrjJKJ9AMs8Vv96A0",
      id: {
        kind: "youtube#video",
        videoId: "NTCLPifr-4Y",
      },
      snippet: {
        publishedAt: "2019-04-10T08:31:31Z",
        channelId: "UC1G5pc3a4zCB2R3-WmcffzQ",
        title:
          "Panzanella Toscana: come si prepara la vera ricetta classica | Le Ricette | La Cucina Italiana",
        description:
          "Piatto tipico della cucina toscana e, più in generale, dell'Italia centrale, la panzanella è una preparazione rustica a base di pane raffermo bagnato in acqua e poi ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/NTCLPifr-4Y/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/NTCLPifr-4Y/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/NTCLPifr-4Y/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "La Cucina Italiana",
        liveBroadcastContent: "none",
        publishTime: "2019-04-10T08:31:31Z",
      },
    },
  ],
};
