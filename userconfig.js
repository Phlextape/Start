let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Markham',
    scale: "C",
  },
  clock: {
    // format: "h:i p - a e b ",
    // format: "e:i p",
    format: "e:i p - a e b ",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  // If you want to reduce the loading time of the icons, you could install the icon font locally and activate the option "localIcons": true in the config to disable the remote styles.
  localIcons: false,
  fastlink: "https://ww5.yorkmaps.ca/LocateIt/TrafficCameras/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Self",
      background_url: "src/img/banners/bg-3.gif",
      categories: [{
        name: "Communication",
        links: [
          {
            name: "Proton Mail",
            url: "https://mail.proton.me/u/1/inbox",
            icon: "mail",
            icon_color: "#853282",
          },
          {
            name: "Gmail",
            url: "https://mail.google.com/mail/u/0/#inbox",
            icon: "brand-gmail",
            icon_color: "#ea6962",
          },
          {
            name: "Calendar",
            url: "https://calendar.proton.me/u/1/",
            icon: "calendar-week",
            icon_color: "#e78a4e",
          },
          {
            name: "Drive",
            url: "https://drive.google.com/drive/home",
            icon: "brand-google-drive",
            icon_color: "#a9b665",
          },
        ],
      }, {
        name: "3D Printing",
        links: [
          {
            name: "Printables",
            url: "https://www.printables.com/",
            icon: "brand-printables",
            icon_color: "#e78a4e",
          },
          {
            name: "Thingieverse",
            url: "https://www.thingiverse.com/",
            icon: "brand-thingiverse",
            icon_color: "#157c9e",

          }
        ],
      }, {
        name: "Personal",
        links: [
          {
            name: "Guac",
            url: "http://192.168.1.127:8080/#/",
            icon: "bowl",
            icon_color: "#a9b665",
          },
          {
            name: "Open Maps",
            url: "https://www.google.com/maps/d/edit?mid=1QAknSVKUDaJsWxHiLso0zv7sRhGCYtU&ll=45.214612008135546%2C-79.78659755187421&z=7",
            icon: "brand-google-maps",
            icon_color: "#ea6962",
          },
          {
            name: "Open Rail Maps",
            url: "https://openrailwaymap.org/",
            icon: "track",
            icon_color: "#e78a4e",
          },
        ],
      }],

    },
    {
      name: "school",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "UOIT",
          links: [
            {
              name: "Canvas",
              url: "https://ontariotechu.instructure.com/calendar",
              icon: "wheel",
              icon_color: "#ea6962",
            },
            {
              name: "UOIT",
              url: "https://my.ontariotechu.ca/current-students/index.php",
              icon: "shield-half",
              icon_color: "#157c9e",
            },
          ],
        },
        {
          name: "AI",
          links: [
            {
              name: "Claude",
              url: "https://claude.ai/new",
              icon: "north-star",
              icon_color: "#e78a4e",
            },
            {
              name:"ChatGPT",
              url:"https://chatgpt.com/",
              icon:"brand-openai",
              icon_color:"#cacaca",
            }
          ],
        },
        {
          name: "?",
          links: [
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "Watch",
          links: [
            {
              name: "Plex",
              url: "https://app.plex.tv/desktop/#!/",
              icon: "arrow-badge-right",
              icon_color: "#fabd2f",
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "Socials",
          links: [
            {
              name: "Insta",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: "#d3869b",
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "#ea6962",
            },
            {
              name: "X",
              url: "https://x.com/",
              icon: "brand-x",
              icon_color: "#cacaca",
            }
          ],
        },
        {
          name: "News",
          links: [
              {
                name:"Bleeping Computer",
                url:"https://www.bleepingcomputer.com/",
                icon:"device-desktop",
                icon_color:"#157c9e",
              },
              {
                name:"Wikipedia",
                url:"https://en.wikipedia.org/wiki/Main_Page",
                icon:"brand-wikipedia",
                icon_color:"#cacaca",
              },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
