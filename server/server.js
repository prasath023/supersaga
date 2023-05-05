const express = require("express")
const nodeMailer = require('nodemailer')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(function(req, res, next) {
    // Website you wish to allow to connect

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'application/json');

    next();
});
app.get("/notice", (req, res) => {
    res.send("please try post method")
})
app.post("/notice", (req, res) => {
    let data = req.body;
    console.log(req.body);


    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        // port: 465,
        // secure: true, // use SSL
        auth: {
            user: "pr13572023@gmail.com",
            pass: "kycqbkunjqlakemq"
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    const options = {
            from: "socials@supersaga.app",
            to: data.email,
            subject: "Thank you so much so showing interest towards Supersaga -  a 3D Animation tool (windows based application). ",
            html: `
        <p>Here is the download link: </p>
        <br></br>
        ${data.link}
        <br></br>
        <p>Kindly go through the Read me doc to get a better understanding.</p>
        <br></br>
        <p>For any queries, please feel free to get in touch with pradeep@supersaga.app</p>
        <br></br>
        <p>Also, Follow us on</p>
        <br></br>
        <p><a href="https://apps.apple.com/us/app/testflight/id899247664" target="_blank" rel="noopener">https://apps.apple.com/us/app/testflight/id899247664</a><br><br>Also, Follow us on<br><strong><br><span style="color: #000000;"><a style="color: #000000;" href="https://www.youtube.com/channel/UCiDHzXKKNyp5KzCcwJR8G7g" target="_blank" rel="noopener">YouTube</a></span><br><span style="color: #000000;"><a style="color: #000000;" href="https://www.instagram.com/supersaga.app/" target="_blank" rel="noopener">Instagram</a></span><br><span style="text-decoration: underline; color: #000000;"><a style="color: #000000; text-decoration: underline;" href="https://twitter.com/supersaga_app" target="_blank" rel="noopener">Twitter</a></span><br>Tiktok</strong></p>
        
        `
        }
        // const options1 = {
        //     from: "socials@supersaga.app",
        //     to: "pradeep@highavenue.co",
        //     subject: "User report",
        //     html: `

    //     New user ${data.email} 
    //     <br></br>

    //     Total user count ${data.users}

    //     `
    // }
    // const options2 = {
    //     from: "socials@supersaga.app",
    //     to: "rahul.raj@highavenue.co",
    //     subject: "User report",
    //     html: `

    //     New user ${data.email} 
    //     <br></br>

    //     Total user count ${data.users}

    //     `
    // }
    // const options3 = {
    //     from: "socials@supersaga.app",
    //     to: "renold@highavenue.co",
    //     subject: "User report",
    //     html: `
    //     New user ${data.email} 
    //     <br></br>

    //     Total user count ${data.users}

    //     `
    // }

    transporter.sendMail(options, (err, res) => {
            if (err) {
                console.log(err);
                res.send("olleh")


            } else {
                console.log("funn");
                res.send("hello")

            }
        })
        // transporter.sendMail(options1)
        // transporter.sendMail(options2)
        // transporter.sendMail(options3)

    transporter.close()
})





app.listen(port, () => {
    console.log(`listening to port ${port}`);
})