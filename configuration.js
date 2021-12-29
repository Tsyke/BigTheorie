const editJsonFile = require("edit-json-file");
let file = editJsonFile(`./config.json`);



const prompt = require('prompt');
console.log("Remplissez les champs suivant avec des informations réelles.")
const properties = [{
    name: 'Token'
}, {
    name: 'ID'
}, {
    name: 'prefix'
}];

prompt.start();

prompt.get(properties, function(err, result) {
    if (err) {
        return onErr(err);
    }
    const user = {
        id: result.ID,
        userPrefix: result.prefix,
        accountToken: result.Token
    }
    file.set("botstat.tokenbot", user.accountToken);
    file.set("botstat.prefix", user.userPrefix);
    file.set("botstat.botID", user.id);
    file.set("botstat.ownerID", user.id);
    file.save();
});

function onErr(err) {
    console.log(err);
    return 1;
}