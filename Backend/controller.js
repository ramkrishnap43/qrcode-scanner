
// const QRCode = require("qrcode")

// exports.scanQrCode = (req.res) => {

//     const url = req.body.url;
//     if(url.length === 0){
//         res.send("Empty Data")

//     }
//     QRCode.toDataURL(url,function(err,url){
//         console.log(url)
//         res.send(url)
//     })

// }
const QRCode = require("qrcode");

exports.scanQrCode = (req, res) => {
    const url = req.body.url;

    if (!url || url.length === 0) { 
        res.status(400).send("Empty Data"); 
    } else {
        QRCode.toDataURL(url, (err, qrUrl) => { 
            if (err) {
                console.error(err); 
                res.status(500).send("Internal Server Error"); 
            } else {
                console.log(qrUrl);
                res.send(qrUrl); 
            }
        });
    }
};
