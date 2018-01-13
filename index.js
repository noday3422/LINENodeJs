//モジュールのインポート
const server = require("express")();
const line = reuiqre("@line/bot-sdk"); // MessagingAPIのSDK

//パラメータ
const line_config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
};

//Webサーバ設定
server.listen(process.env.PORT || 3000);

//ルータ設定
server.post('/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);
    console.log(req.body);
});

