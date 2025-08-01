 // Random partner
 let threadInfo = await api.getThreadInfo(threadID);
 let participants = threadInfo.participantIDs.filter(id => id !== senderID);
 let partnerID = participants[Math.floor(Math.random() * participants.length)];
 let partnerInfo = await api.getUserInfo(partnerID);
 let partnerName = partnerInfo[partnerID].name;

 // Mentions
 let mentions = [
 { id: senderID, tag: senderName },
 { id: partnerID, tag: partnerName }
 ];

 // Generate and send image
 let one = senderID, two = partnerID;
 return makeImage({ one, two }).then(path => {
 api.sendMessage({
 body: `🥰 Successful Pairing!\n💌 Wishing you two a lifetime of unexpected happiness – even with a ${matchRate} match!\n💕 Compatibility Score: ${matchRate}\nUnlikely but Unstoppable: [${senderName} + ${partnerName}]👨‍❤️‍👨`,
 mentions,
 attachment: fs.createReadStream(path)
 }, threadID, () => fs.unlinkSync(path), messageID);
 });
};
