const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/download", (req, res) => {

const url = req.body.url;

exec(`yt-dlp -g ${url}`, (error, stdout) => {

if (error) {
return res.json({ error: "Video alınamadı" });
}

res.json({ video: stdout });

});

});

app.listen(3000, () => {
console.log("Server çalışıyor");
});
