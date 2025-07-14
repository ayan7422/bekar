const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "alert",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Faheem",
  description: "Generate a Popcat alert image with your text",
  commandCategory: "meme",
  usages: "[text]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const text = args.join(" ");
  const { threadID, messageID } = event;

  if (!text) {
    return api.sendMessage(
      "🚨 Please provide text for the alert image.\n\nExample:\n.alert Warning: Server down!",
      threadID,
      messageID
    );
  }

  const apiUrl = `https://api.popcat.xyz/v2/alert?text=${encodeURIComponent(
    text
  )}`;
  const filePath = path.join(__dirname, "cache", `alert_${Date.now()}.png`);

  try {
    const res = await axios.get(apiUrl, { responseType: "arraybuffer" });
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, res.data);

    return api.sendMessage(
      {
        body: `🚨 Alert:`,
        attachment: fs.createReadStream(filePath),
      },
      threadID,
      () => fs.unlinkSync(filePath),
      messageID
    );
  } catch (err) {
    console.error("❌ Alert API Error:", err.message);
    return api.sendMessage(
      "⚠️ Failed to generate alert image. Try again later.",
      threadID,
      messageID
    );
  }
};
