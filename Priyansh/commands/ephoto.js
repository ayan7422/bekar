const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "ephoto",
  version: "11.0.0",
  hasPermssion: 0,
  credits: `THE_FAHEEM`,
  usePrefix: true,
  description: "Make your own logo using ephoto",
  commandCategory: "logo",
  usages: "ephoto list or textpro list (page number) or textpro (logo) (text)",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length >= 2 && args[0].toLowerCase() === "list") {
    let page = parseInt(args[1]);
    switch (page) {
      case 1:
        return api.sendMessage(
          `here's the logo list - Page 1:\n1. television\n2. glass\n3. blackpink\n4. neonblacpink\n5. coverpubg\n6. greenbrush\n7. blueneon\n8. eraser\n9. dragonfire\n10. bulb\n11. typography\n12. leaves\n13. cloth\n14. graffiti\n15. star\n16. typography2\n17. nightstars\n18. cloud\n19. papercut\n20. horror\n21. sunlight\n22. pig\n23. Halloween\n24. leafgrafy\n25. water\n26. animate\n27. puppy\n28. foggy\n29. flag\n30. arrow\n\nPAGE 1 - 3`,
          threadID,
          messageID
        );
      case 2:
        return api.sendMessage(
          `Logo list - Page 2:\n31. arrow2\n32. hacker\n33. avatar\n34. moblegend\n35. warface\n36. foggy2\n37. gammergirl\n38. teamlogo\n39. beach\n40. neonstyle\n41. gaminglogo\n42. game\n43. vibrant\n44. blueneon\n45. steelmetal\n46. mascot\n47. luxurylogo\n48. star\n50. minimal\n51. galaxy\n52. goldavatar\n53. team2\n54. shield\n55. angel\n56. queen\n57. gaminglogo2\n58. zodiac\n59. steel2\n60. pubg2\n61. pubg3\n\nPAGE 2 - 3`,
          threadID,
          messageID
        );
      case 3:
        return api.sendMessage(
          `Logo list - Page 3:\n62. fbcover\n63. fbcover2\n64. fbcover3\n65. fbcover4\n66. fbcover5\n67. fbcover6\n68. fbcover7\n69. fbcover8\n70. tattoo\n71. moblegend2\n72. neonstyle2\n73. arena\n74. lovecard\n75. lovecard2\n76. lovecard3\n77. heartwing\n78. cake\n79. cake2\n80. cake3\n81. cake4\n82. cake5\n83. cake6\n84. cake7\n85. cup\n86. flaming\n87. blood\n88. blood2\n89. crossfire\n90. freefire\n91. overwatch\n92. lolavata\n93. dota\n94. exposure`,
          threadID,
          messageID
        );
      default:
        return api.sendMessage(
          `Invalid page number! Please use "list 1" or "list 2" or "list 3 in the total of list there are 100 Ephoto logo for now.".`,
          threadID,
          messageID
        );
    }
  }

  if (args.length < 2) {
    return api.sendMessage(
      `Invalid command format! Use: Ephoto list or Ephoto list (page number) or Ephoto (logo) (text)`,
      threadID,
      messageID
    );
  }

  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "television":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/television?text=${name}`;
      message = "here's the [TELEVISION] Logo created:";
      break;
    case "glass":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/glasses?text=${name}`;
      message = "here's the [ GLASS ] Logo created:";
      break;
    case "blackpink":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/blackpink?text=${name}`;
      message = "here's the [ BACKPINK ] Logo created:";
      break;
    case "neonblacpink":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/neonbp?text=${name}`;
      message = "here's the [ NEON BLACK PINK] Logo Created:";
      break;
    case "coverpubg":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/coverpubg?text=${name}`;
      message = "here's the [ COVER PUBG ] - Logo Created:";
      break;
    case "greenbrush":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/greenbrush?text=${name}`;
      message = "here's the [ GREENBRUSH ] Logo Created:";
      break;
    case "blueneon":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/neonblue?text=${name}`;
      message = "here's the [ BLUE NEON ] Logo created:";
      break;
    case "eraser":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/eraser?text=${name}`;
      message = "here's the [ ERASER ] Logo created:";
      break;
    case "dragonfire":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/dragonfire?text=${name}`;
      message = "here's the [ DRAGON FIRE ] Logo created:";
      break;
    case "bulb":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/incandescent?text=${name}`;
      message = "here's the [ BULB ] Logo created:";
      break;
    case "typography":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/typography?text=${name}`;
      message = "here's the [ TYPOGRAPHY ] Logo created:";
      break;
    case "leaves":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/letters?text=${name}`;
      message = "here's the [ LEAVES ] Logo created:";
      break;
    case "cloth":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cloth?text=${name}`;
      message = "here's the [ CLOTH ] Logo created:";
      break;
    case "graffiti":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/graffiti?text=${name}`;
      message = "here's the [ GRAFFITI ] Logo created:";
      break;
    case "star":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/metals?text=${name}`;
      message = "here's the [ STAR ] Logo created:";
      break;
    case "typography2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/typography2?text=${name}`;
      message = "here's the [ TYPOGRAPHY 2 ] Logo created:";
      break;
    case "nightstars":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/nightstars?text=${name}`;
      message = "here's the [ NIGHT STARS ] Logo created:";
      break;
    case "cloud":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cloud?text=${name}`;
      message = "here's the [ CLOUD ] Logo created:";
      break;
    case "papercut":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/caper?text=${name}`;
      message = "here's the [ CUT PAPER ] Logo created:";
      break;
    case "horror":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/horror?text=${name}`;
      message = "here's the [ HORROR ] Logo created:";
      break;
    case "sunlight":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/sunlight?text=${name}`;
      message = "here's the [ sunlight ] Logo created:";
      break;
    case "pig":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/pig?text=${name}`;
      message = "here's the [ PIG ] Logo created:";
      break;
    case "Halloween":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/hallowen?text=${name}`;
      message = "here's the [ HALLOWEEN ] Logo created:";
      break;
    case "leafgrafy":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/leafgraphy?text=${name}`;
      message = "here's the [ LEAFGRAFY ] Logo created:";
      break;
    case "water":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/water?text=${name}`;
      message = "here's the [ WATER ] Logo created:";
      break;
    case "animate":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/crank?text=${name}`;
      message = "here's the [ ANIMATE ] Logo created:";
      break;
    case "puppy":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/puppy?text=${name}`;
      message = "here's the [ PUPPY ] Logo created:";
      break;
    case "foggy":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/foggy?text=${name}`;
      message = "here's the [ FOGGY ] Logo created:";
      break;
    case "flag":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/american?text=${name}`;
      message = "here's the [ FLAG ] Logo created:";
      break;
    case "arrow":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/arrow?text=${name}`;
      message = "here's the [ ARROW ] Logo created:";
      break;
    case "arrow2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/arrow2?text=${name}`;
      message = "here's the [ ARROW 2 ] Logo created:";
      break;
    case "hacker":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/anonymous?text=${name}`;
      message = "here's the [ HACKER ] Logo created:";
      break;
    case "avatar":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/aov?text=${name}`;
      message = "here's the [ AVATAR ] Logo created:";
      break;
    case "moblegend":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/ml?text=${name}`;
      message = "here's the [ MOB LEGEND ] Logo created:";
      break;
    case "warface":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/warface?text=${name}`;
      message = "here's the [ WARFACE ] Logo created:";
      break;
    case "foggy2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/window?text=${name}`;
      message = "here's the [ FOGGY 2 ] Logo created:";
      break;
    case "gammergirl":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/gamergirl?text=${name}`;
      message = "here's the [ GAMMERGIRL ] Logo created:";
      break;
    case "teamlogo":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/teamlogo?text=${name}`;
      message = "here's the [ TEAMLOGO ] Logo created:";
      break;
    case "beach":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/beach?text=${name}`;
      message = "here's the [ BEACH ] Logo created:";
      break;
    case "neonstyle":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/neonstyle?text=${name}`;
      message = "here's the [ NEON STYLE ] Logo created:";
      break;
    case "gaminglogo":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/gaminglogo?text=${name}`;
      message = "here's the [ GAMING LOGO ] Logo created:";
      break;
    case "game":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/fpsgame?text=${name}`;
      message = "here's the [ GAME ] Logo created:";
      break;
    case "vibrant":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/vibrant?text=${name}`;
      message = "here's the [ VIBRANT ] Logo created:";
      break;
    case "blueneon":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/blueneon2?text=FAHEEM${name}`;
      message = "here's the [ BLUE NEON ] Logo created:";
      break;
    case "steelmetal":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/steelmetal?text=${name}`;
      message = "here's the [ STEELMETAL ] Logo created:";
      break;
    case "mascot":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/circlemascot?text=${name}`;
      message = "here's the [ MASCOT ] Logo created:";
      break;
    case "luxurylogo":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/luxuarylogo?text=${name}`;
      message = "here's the [ LUXURY LOGO ] Logo created:";
      break;
    case "star":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/printname?text=${name}`;
      message = "here's the [ STAR ] Logo created:";
      break;
    case "minimal":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/minimal?text=${name}`;
      message = "here's the [ MINIMAL ] Logo created:";
      break;
    case "galaxy":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/galaxy?text=${name}`;
      message = "here's the [ GALAXY ] Logo created:";
      break;
    case "goldavatar":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/goldavatar?text=${name}`;
      message = "here's the [ GOLD AVATAR ] Logo created:";
      break;
    case "cloth":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cloth?text=${name}`;
      message = "here's the [ CLOTH ] Logo created:";
      break;
    case "team2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/team2?text=${name}`;
      message = "here's the [ TEAM 2 ] Logo created:";
      break;
    case "shield":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/sheild?text=${name}`;
      message = "here's the [ SHIELD ] Logo created:";
      break;
    case "angel":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/angel2?text=${name}`;
      message = "here's the [ ANGEL ] Logo created:";
      break;
    case "queen":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/queen?text=${name}`;
      message = "here's the [ QUEEN ] Logo created:";
      break;
    case "gaminglogo2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/gaminglogo2?text=${name}`;
      message = "here's the [ GAMING LOGO 2 ] Logo created:";
      break;
    case "zodiac":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/zodiac?text=${name}`;
      message = "here's the [ ZODIAC ] Logo created:";
      break;
    case "steel2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/steel2?text=${name}`;
      message = "here's the [ STEEL 2 ] Logo created:";
      break;
    case "pubg2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/pubg2?text=${name}`;
      message = "here's the [ PUBG 2 ] Logo created:";
      break;
    case "pubg3":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/pubg3?text=${name}`;
      message = "here's the [ PUBG 3 ] Logo created:";
      break;
    case "fbcover":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover4?text=${name}`;
      message = "here's the [ FBCOVER ] Logo created:";
      break;
    case "fbcover2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover5?text=${name}`;
      message = "here's the [ FBCOVER 2 ] Logo created:";
      break;
    case "fbcover3":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover6?text=${name}`;
      message = "here's the [ FBCOVER 3 ] Logo created:";
      break;
    case "fbcover4":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover7?text=${name}`;
      message = "here's the [ FBCOVER 4 ] Logo created:";
      break;
    case "fbcover5":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover8?text=${name}`;
      message = "here's the [ FBCOVER 5 ] Logo created:";
      break;
    case "fbcover6":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover9?text=${name}`;
      message = "here's the [ FBCOVER 6 ] Logo created:";
      break;
    case "fbcover7":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover11?text=${name}`;
      message = "here's the [ FBCOVER 7 ] Logo created:";
      break;
    case "fbcover8":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/facebookcover12?text=${name}`;
      message = "here's the [ FBCOVER 8 ] Logo created:";
      break;
    case "tattoo":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/tatto?text=${name}`;
      message = "here's the [ TATTOO ] Logo created:";
      break;
    case "moblegend2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/ml2?text=${name}`;
      message = "here's the [ MOB LEGEND 2 ] Logo created:";
      break;
    case "neonstyle2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/neonstyle?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ NEONSTYLE 2 ] Logo created:";
      break;
    case "arena":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/arena?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ ARENA ] Logo created:";
      break;
    case "lovecard":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/lovecard2?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ LOVE CARD ] Logo created:";
      break;
    case "lovecard2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/lovecard3?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ LOVE CARD 2 ] Logo created:";
      break;
    case "lovecard3":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/lovecard4?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ LOVE CARD 3 ] Logo created:";
      break;
    case "heartwing":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/winggif?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ HEART WING ] Logo created:";
      break;
    case "cake":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cake2?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ CAKE ] Logo created:";
      break;
    case "cake2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cake3?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ CAKE 2 ] Logo created:";
      break;
    case "cake3":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cake4?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ CAKE 3 ] Logo created:";
      break;
    case "cake4":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cake5?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ CAKE 4 ] Logo created:";
      break;
    case "cake5":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cake6?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ CAKE 5 ] Logo created:";
      break;
    case "cake6":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cake7?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ CAKE 6 ] Logo created:";
      break;
    case "cup":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/cup?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ CUP ] Logo created:";
      break;
    case "flaming":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/flaming?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ FLAMING ] Logo created:";
      break;
    case "blood":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/blood?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ BLOOD ] Logo created:";
      break;
    case "blood2":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/blood2?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ BLOOD 2 ] Logo created:";
      break;
    case "crossfire":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/crossfire?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's [ CROSSFIRE ] Logo created:";
      break;
    case "freefire":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/freefire3?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ FREEFIRE ] Logo created:";
      break;
    case "overwatch":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/overwatch2?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ OVER WATCH ] Logo created:";
      break;
    case "lolavatar":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/lolnew?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ LOL AVATAR ] Logo created:";
      break;
    case "dota":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/dota?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ DOTA ] Logo created:";
      break;
    case "exposure":
      apiUrl = `https://html-all-nnhdi.run-us-west2.goorm.site/api/ephoto/doubleexpouser?url=https://i.imgur.com/BTPUTRQ.jpg&text=${name}`;
      message = "here's the [ EXPOSURE ] Logo created:";
      break;
    default:
      return api.sendMessage(
        `Invalid logo type! Use .Ephoto list 1 to see the list of Ephoto logos.`,
        threadID,
        messageID
      );
  }

  api.sendMessage(
    "Processing your Ephoto logo, please wait...",
    threadID,
    messageID
  );
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
