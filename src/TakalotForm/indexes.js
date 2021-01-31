const Symptoms = [" לא עולה", " קורסת", "לא ניתן ", "ייס"]

const fieldsToLoad = {
    " לא עולה": ["UserName", "ComputerName", "Password", "System", "Voip", "Env"],
    " קורסת": ["UserName", "ComputerName", "Password", "System", "Voip", "Env"],
    "ייס ": ["UserName", "ComputerName", "Password", "System", "Voip"],
    "לא ניתן": ["UserName", "ComputerName", "Password", "System", "Voip", "Env"],
}

const englishToHebrew = {
    "ErrorHeader": "כותרת תקלה",
    "Errorinfo": "תיאור תקלה",
    "Env": "סביבה",
    "UserName": "שם משתמש",
    "ComputerName": "שם מחשב",
    "Password": "סיסמא",
    "System": "שם מערכת",
    "Voip": "Voip"
}

const symptomToTeam = [
    {
        " לא עולה": "Spotify / 658"
    },
    {
        " קורסת": "יאשה / 658"
    },
    {
        "ייס ": "תוצר / 638"
    },
    {
        "לא ניתן": "GIT / 658"
    }
]

exports.symptomToTeam = symptomToTeam
exports.Symptoms = Symptoms
exports.fieldsToLoad = fieldsToLoad
exports.englishToHebrew = englishToHebrew






