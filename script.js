window.customElements.define('icon-ic', class extends HTMLElement {});
(function(){
  'use strict';

  /* =============================================
     ALL 1400+ ICON NAMES
     ============================================= */
  var iconNames = [
    "42-group","500px","abacus","accessible-icon","accusoft","adn","adversal","affiliatetheme",
    "airbnb","algolia","alien-monster","alien","alipay","amazon-pay","amazon","amilia","android",
    "angellist","angle-down","angle-left","angle-right","angle-up","angrycreative","angular",
    "app-store-ios","app-store","apper","apple-pay","apple-whole","apple","arch-linux","archive",
    "arrow-down","arrow-left","arrow-right","arrow-rotate-left","arrow-rotate-right","arrow-up",
    "arrows-left-right","arrows-up-down","artstation","asymmetrik","atlassian","audible","autoprefixer",
    "avianex","aviato","award","aws","baby","backward","bandage","bandcamp","barbell",
    "basket-shopping","bath","battery-empty","battery-full","battery-half","battery-quarter","battle-net",
    "bed","beer-mug","behance","bell-slash","bell","bilibili","bimobject",
    "binoculars","bitbucket","bitcoin","bity","black-tie","blackberry","blender-phone",
    "blender","blogger-b","blogger","bluesky","bluetooth-b","bluetooth","board-game-geek",
    "bomb","bone","book-open-reader","book-open","book","bookmark","books","bootstrap",
    "bots","bottle-droplet","bottle-water","bowl-rice","box-open","box-tissue",
    "box","brain","brave-reverse","brave","briefcase","btc","buffer","build-awesome",
    "building-columns","building","buromobelexperte","bus-crash","bus-simple","bus",
    "buy-n-large","buysellads","calculator","calendar-check","calendar-clock","calendar-days",
    "calendar-minus","calendar-plus","calendar-range","calendar-week","calendar-xmark","calendar",
    "camera","campground","canadian-maple-leaf","cannabis","capsules","car-battery",
    "car-crash","car-on","car-rear","car-side-crash","car-side","car-tunnel",
    "car","caret-down","caret-left","caret-right","caret-up","carrot",
    "cart-plus","cart-shopping","cash-app","cat","cc-amazon-pay","cc-amex",
    "cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard",
    "cc-paypal","cc-stripe","cc-visa","cent-sign","centercode","centos",
    "certificate","chain","chair","chalkboard-user","chalkboard","charging-station",
    "chart-area","chart-bar","chart-line","chart-pie","chart-simple",
    "chevron-down","chevron-left","chevron-right","chevron-up","child",
    "chrome","chromecast","church","circle-arrow-down","circle-arrow-left","circle-arrow-right",
    "circle-arrow-up","circle-chevron-down","circle-chevron-left","circle-chevron-right",
    "circle-chevron-up","circle-pause","circle-play","circle-stop","circle-stopwatch",
    "circle-zulip","circle","claude","clipboard-check","clipboard-list",
    "clipboard","clock-rotate-left","clock-rotate-right","clock","clone",
    "cloud-arrow-down","cloud-arrow-up","cloud-meatball","cloud-rain","cloud-showers",
    "cloud-sun","cloud","cloudflare","cloudscale","cloudsmith","cloudversify",
    "clover","cmplid","codeberg","codepen","codiepie","comment-dots",
    "comment","comments","compact-disc","compass","confluence","connectdevelop",
    "container-storage","contao","copy","cotton-bureau","couch",
    "cpanel","creative-commons-by","creative-commons-nc-eu","creative-commons-nc-jp",
    "creative-commons-nc","creative-commons-nd","creative-commons-pd-alt",
    "creative-commons-pd","creative-commons-remix","creative-commons-sa",
    "creative-commons-sampling-plus","creative-commons-sampling",
    "creative-commons-share","creative-commons-zero","creative-commons",
    "credit-card","critical-role","cross","crow","css","css3-alt","css3",
    "cuttlefish","d-and-d-beyond","d-and-d","dailymotion","dart-lang",
    "dashcube","database","debian","deezer","delicious","deploydog","deskpro",
    "dev","deviantart","devpost","dharmachakra","dhl","diamond",
    "diaspora","digg","digital-ocean","discord","discourse","disqus",
    "dna","dochub","docker","dog","dollar-sign","dolly-empty",
    "dolly","door-closed","door-open","dove","download",
    "draft2digital","dragon","dribbble","dropbox","droplet-slash","droplet",
    "drupal","dumbbell","duolingo","dyalog","ear-deaf","ear-listen",
    "earlybirds","ebay","edge-legacy","edge","elementor","eleventy",
    "ello","ember","empire","envelope-open","envelope",
    "envira","eraser","erlang","ethereum","etsy","euro-sign",
    "evernote","expeditedssl","eye-dropper","eye-slash","eye",
    "face-angry","face-dizzy","face-frown","face-grin-beam",
    "face-grin-wink","face-grin","face-kiss-wink-heart",
    "face-kiss","face-laugh","face-meh","face-rolling-eyes",
    "face-sad-tear","face-smile","face-surprise","face-tired",
    "facebook-f","facebook-messenger","facebook","fantasy-flight-games",
    "fax","feather-pointed","feather","fedex","fediverse","fedora",
    "ferry","figma","file-audio","file-code","file-excel",
    "file-image","file-lines","file-pdf","file-video","file-word",
    "file-zipper","file","files-pinwheel","film",
    "fire-burner","fire-extinguisher","fire-flame-curved",
    "fire-flame-simple","fire-flame","fire","firefox-browser",
    "firefox","first-order-alt","first-order","firstdraft",
    "fish-fins","fish","flag-checkered","flag-usa","flag",
    "flask-vial","flask","flickr","flipboard","floppy-disk",
    "flower","flutter","fly","folder-open","folder",
    "font-awesome","fonticons-fi","fonticons","forgejo","fork-knife",
    "fork","forklift","fort-awesome-alt","fort-awesome","forumbee",
    "forward","foursquare","free-code-camp","freebsd","frog","fulcrum",
    "galactic-republic","galactic-senate","gas-pump",
    "gauge-high","gauge-simple-high","gauge-simple","gauge",
    "gavel","gear","gears","get-pocket","gg-circle","gg",
    "ghost","git-alt","git","gitee","github-alt","github",
    "gitkraken","gitlab","gitter","glide-g","glide",
    "globaleaks","globe-americas","globe-asia","globe-europe",
    "globe","gofore","golang","goodreads-g","goodreads",
    "google-drive","google-pay","google-play","google-plus-g","google-plus",
    "google-scholar","google-wallet","google",
    "graduation-cap","grapes","gratipay","grav","grill",
    "gripfire","grunt","guilded","gulp","hacker-news",
    "hackerrank","hamburger","hammer","hand-back-fist","hand-holding-box",
    "hand-holding-dollar","hand-holding-droplet","hand-holding-hand",
    "hand-holding-heart","hand-holding-medical","hand-holding-skull",
    "hand-holding","hand-point-down","hand-point-left",
    "hand-point-right","hand-point-up","hand-pointer",
    "hand-soap","hand-sparkles","hand","handcuffs",
    "hands-helping","hands-praying","hands","handshake",
    "hard-drive","hashnode","headphones","heart-pulse","heart",
    "heartbeat","helicopter-symbol","helicopter","hexagon",
    "hippo","hips","hire-a-helper","hive","home",
    "hooli","hornbill","horse-head","horse",
    "hospital","hotel","hotjar","hourglass-end","hourglass-half",
    "hourglass-start","hourglass","house-chimney","house",
    "houzz","html5","hubspot","hugging-face","ideal",
    "igloo","image","images","imdb","inbox","industry",
    "instagram","instalod","intercom","internet-archive",
    "internet-explorer","invision","ioxhost","island-tropical",
    "itch-io","itunes-note","itunes","jar-wheat",
    "jar","java","jedi-order","jenkins",
    "jet-fighter-up","jet-fighter","jira","joget","joomla",
    "journal","js","jsfiddle","julia","jxl",
    "kaggle","kakao-talk","key","keybase","keycdn",
    "kickstarter-k","kickstarter","kitchen-set","kiwi-bird",
    "knife","ko-fi","korvue","kubernetes","lake",
    "landmark","laravel","lastfm","leaf","leanpub",
    "leetcode","lemon","less","lets-encrypt","letterboxd",
    "lightbulb","ligthbulb","lime","line",
    "link","linkedin-in","linkedin","linktree","linode","linux",
    "list-check","list-ol","list","location-arrow",
    "location-dot","lock","lumon-drop","lumon","lungs",
    "lyft","magento","magnifying-glass-arrow-right",
    "magnifying-glass-chart","magnifying-glass-dollar",
    "magnifying-glass-location","magnifying-glass-minus",
    "magnifying-glass-plus","magnifying-glass",
    "mailchimp","mandalorian","map-location-dot",
    "map-location","map","markdown"
  ];

  /* =============================================
     CATEGORY KEYWORDS
     ============================================= */
  var catKW = {
    'Brands':['google','facebook','github','gitlab','discord','dribbble','behance','figma','amazon','apple','android','chrome','firefox','edge','linux','docker','aws','angular','flutter','bandcamp','bitbucket','bootstrap','codepen','deviantart','dropbox','elementor','envira','erlang','etsy','font-awesome','forgejo','fort-awesome','forumbee','foursquare','free-code-camp','freebsd','fulcrum','galactic','gofore','golang','goodreads','grav','grunt','gulp','hacker-news','hackerrank','hooli','hotjar','hubspot','imdb','instagram','itunes','jira','joget','joomla','js','jsfiddle','julia','kaggle','keybase','kickstarter','lastfm','leanpub','leetcode','less','letterboxd','line','linkedin','linode','laravel','mailchimp','mandalorian','markdown','500px','adn','algolia','angellist','artstation','asymmetrik','atlassian','audible','autoprefixer','avianex','aviato','battle-net','bilibili','bimobject','blender','blogger','bluesky','bluetooth','board-game','btc','buffer','buromobelexperte','buy-n-large','buysellads','canadian','cash-app','centercode','centos','chromecast','cloudflare','cloudscale','cloudsmith','cloudversify','cmplid','codiepie','confluence','connectdevelop','contao','cotton-bureau','cpanel','creative-commons','critical-role','css','css3','cuttlefish','d-and-d','dailymotion','dashcube','debian','deezer','delicious','deploydog','deskpro','dev','devpost','dharmachakra','dhl','diaspora','digg','digital-ocean','discourse','disqus','draft2digital','earlybirds','ebay','edge-legacy','eleventy','ello','ember','empire','expeditedssl','fantasy-flight','fedex','fediverse','fedora','ferry','first-order','firstdraft','fish-fins','flask','flickr','flipboard','floppy-disk','fonticons','gripfire','guilded','hire-a-helper','hive','hornbill','houzz','html5','hugging-face','ideal','instalod','intercom','internet-archive','internet-explorer','invision','ioxhost','island-tropical','itch-io','itunes-note','jar-wheat','java','jedi-order','jenkins','jet-fighter','jxl','kakao-talk','keycdn','kickstarter-k','kitchen-set','ko-fi','korvue','kubernetes','lake','lets-encrypt','lightbulb','lumon','lyft','magento'],
    'Arrows':['arrow','angle','chevron','caret','location-arrow'],
    'Calendar':['calendar'],
    'Charts':['chart','gauge'],
    'Chat':['comment','comments'],
    'Cloud':['cloud'],
    'Code':['code','file-code','markdown'],
    'Currency':['dollar','euro','cent','bitcoin','ethereum','btc','credit-card','cc-','cash-app','google-pay','apple-pay','amazon-pay'],
    'Files':['file','folder','archive','copy','clipboard','clone','download'],
    'Hands':['hand','hands','handshake'],
    'Faces':['face-'],
    'Animals':['cat','dog','fish','frog','crow','hippo','horse','kiwi-bird','dragon','dove','bone','feather'],
    'Food & Drink':['carrot','bowl','bottle','beer','hamburger','lemon','apple-whole','grapes','kitchen','fork-knife','flask'],
    'Health':['heart','heartbeat','heart-pulse','lungs','capsules','bandage','dna'],
    'Buildings':['home','house','building','hotel','hospital','church','igloo','campground','island-tropical','landmark'],
    'Media':['film','compact-disc','backward','forward'],
    'Nature':['leaf','clover','lake','cannabis','fire','flower'],
    'Security':['lock','key','shield','eye','eye-slash'],
    'Shopping':['cart','basket'],
    'Transport':['car','bus','ferry','helicopter','jet-fighter','forklift'],
    'Weather':['cloud-sun','cloud-rain','cloud-showers','cloud-meatball','cloud-arrow'],
    'Objects':['bell','book','bomb','box','brain','calculator','camera','chair','clock','compass','cross','diamond','door','droplet','ear','eraser','fax','flag','gavel','gear','gears','ghost','globe','graduation','hammer','hard-drive','headphones','hexagon','hourglass','image','images','inbox','industry','jar','journal','knife','link','list','location-dot','map','magnifying']
  };

  /* =============================================
     CATEGORIZE
     ============================================= */
  function categorize(n){
    for(var c in catKW){
      var kws=catKW[c];
      for(var i=0;i<kws.length;i++){
        if(n.indexOf(kws[i])!==-1) return c;
      }
    }
    return 'Other';
  }

  var cats={};
  for(var i=0;i<iconNames.length;i++){
    var n=iconNames[i], c=categorize(n);
    if(!cats[c]) cats[c]=[];
    cats[c].push(n);
  }
  var sortedCats=Object.entries(cats).sort(function(a,b){return b[1].length-a[1].length});

  /* =============================================
     DOM REFS
     ============================================= */
  var searchInput=document.getElementById('searchInput');
  var navBadge=document.getElementById('navBadge');
  var sidebarList=document.getElementById('sidebarList');
  var countInline=document.getElementById('countInline');
  var mainTitle=document.getElementById('mainTitle');
  var icGrid=document.getElementById('icGrid')
})