const myDiscriminator = ["6666", "2121", "0000", "0001", "0002", "6969", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "2169", "6921", "0021", "0690", "0210", "2100", "0069"];
const bot = new(require("discord.js")).Client({fetchAllMembers: true});

const password = "xixi6060";
const token = "NDgwMDExOTIxOTk1ODU3OTIx.Dlhllg.vP4Sqq96DqMUZ0xqIPo8ZSwnLbA";

bot.login(token);

const changeDiscriminator = async () => {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    bot.user.setUsername(us, password).then((u) => {
    })
  } catch(e) {
	  
  }
}
      setInterval(changeDiscriminator, 86400000);
