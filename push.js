var push = require('web-push')


let vapidKeys = {
    publicKey: 'BKyigPiSECjmZQNwvffK2tGiMVVP8C7ZNVLpD4PdwE_b8GvImuOuOdumj0KJ-jMPqDrxaZZsdJYJWbNQtRFFme0',
    privateKey: 'RH2bMjVgGoSIxQF65iZiQpwrcfZgXg8oglmdCmdx3v4'

}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
    'https://fcm.googleapis.com/fcm/send/fTtASD-YRp0:APA91bHIwJLK6ki6KbAQ3nus3SaiAllD0g_ltgbXWHII0c2LMEQh-sL9qUeJsHuuP_nyS2A2tdURD6CCeENYXxFLE_S8LCFLSeeT_4GfJKnVcRc_BegXT6ne1WT-Z1wqPH7oQD3XFzb1',
expirationTime:null,
keys:  {
p256dh:'BDGb_cNcm-udvjzHq7Nw3o7YYRn2pBRbEqvbsuB-3U9T0uqDs0BgXqppYRFUsu360AAvg2bwS8UG7fOm-Q5lTVU',
auth: 'vRC_uKlwk9y6jfu_p_cySA'

}
};

push.sendNotification(sub, 'test message')

