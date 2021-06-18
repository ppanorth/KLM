var push = require('web-push')


let vapidKeys = {
    publicKey: 'BKyigPiSECjmZQNwvffK2tGiMVVP8C7ZNVLpD4PdwE_b8GvImuOuOdumj0KJ-jMPqDrxaZZsdJYJWbNQtRFFme0',
    privateKey: 'RH2bMjVgGoSIxQF65iZiQpwrcfZgXg8oglmdCmdx3v4'

}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')