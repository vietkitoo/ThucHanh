var proj = {
    Name : "NguyenVanQuocViet",
};
const fs = require('fs');
fs.writeFile(`file.json`, JSON.stringify(proj), (error) => {
    if (error) throw error;
});