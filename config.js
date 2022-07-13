module.exports = {
        TOKEN: '', //bot token
        playing: 'Music Bot',
        mongoDB: "971868615538270229", //mongoDB url.
        dblToken: "OTgzMzA0MDI0NDQ1MDU1MDM2.GWKqrc.dwwrgUj8gdkmphXQ2eW91TGH8aQoPT7s47baik", //top.gg token.
 opt: {
        DJ: { 
                commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
            
        voiceConfig: {
            leaveOnEnd: false, 
            autoSelfDeaf: false, 

            leaveOnTimer:{ 
                status: true, 
                time: 10000, 
            }
        }, 

        maxVol: 100, 
        loopMessage: false,

        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', 
                highWaterMark: 1 << 25 
            }
            }
        }
}
