import { config } from 'dotenv';
config();

import Eris from 'eris';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const bots = [];
const tokens = process.env.TOKENS!.split(',') as string[];
for (let token of tokens) {

    // create a new bot to join the channel
    const bot = new Eris.Client(token);

    // connect to Discord
    bot.connect().then(async () => {

        await wait(2000);

        console.log(`Client ${bot.user.username} connected to Discord 🎉`);

        const connect = async () => {
            return bot.joinVoiceChannel(process.env.CHANNEL_ID!).then(() => {
                console.log(`Client ${bot.user.username} joined the channel 🎉`);
            });
        }

        connect();

        // every 10s, check if the bot is still connected
        setInterval(() => {
            if (!bot.voiceConnections.size) {
                console.log(`Client ${bot.user.username} disconnected from the voice channel 😢`);
                connect();
            }
        }, 10000);

    });
    
    bots.push();
}
