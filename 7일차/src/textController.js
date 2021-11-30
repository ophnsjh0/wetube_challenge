import fs from "fs";

export const upload = (req, res) => {
    return res.render("upload", { pageTitle: " TXT2HTML" });
  };

export const readText = (req, res) => {
    console.log(req.file);    
    const { filename } = req.file;
    console.log( typeof filename); 
    fs.readFile(`./uploads/${filename}`, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.render("watch", { data });
        }
    }
    )

};