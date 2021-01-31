import React from "react";
// import tafkidan from './wordsDocs/tafkidan.png'
import mainLogo from '../bella_transperent.png'

//  איך מוסיפים? הרעיון הוא להוסיף כותרת בTITLE ואז בCONTENTS גייסון שמכיל אתTITLE:CONTENTS חשוב שיהיה במיקום הנכון כמו במערך של הבעיות זמנים
const solutions = {
    xo: {
        popoverTitles: ["איך להשתמש ב DR  במידה",
            "לא מצליח להנעל על ?",
        ],
        popoverContents: [
            {
                "איך להשתמש ב DR  במידה ": <p dir={"rtl"}>
                </p>
            },
            {
                "לא מצליח להנעל על ?": <p>

                </p>
            }
        ]
    },
    buz: {
        popoverTitles: ["דוקטור buz", "דוקטור buz"],
        popoverContents: [
            {"דוקטור buz": "דוקטור "},
            {"דוקטור buz": "דוקטור buzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"}
        ]
    },
    race: {
        popoverTitles: ["לא מצליח ",

        ],
        popoverContents: [
            {
                "לא מצליח ": "עליך "
            }
        ]
    },
    men: {
        popoverTitles: ["דוקטור mena", "דוקטור men"],
        popoverContents: [
            {"דוקטור mena": "דוקטור men"},
            {"דוקטור men": <img src={mainLogo}/>}
        ]
    },
    map: {
        popoverTitles: ["דוקטור mape", "דוקטור map"],
        popoverContents: [
            {"דוקטור mape": "דוקטור e"},
            {"דוקטור map": "דוקטור map"}
        ]
    },
    sis: {
        popoverTitles: ["דוקטור סיס", "דוקטור nesis"],
        popoverContents: [
            {"דוקטור סיס": "דוקטור sis"},
            {"דוקטור nesis": "דוקטור sissssssssssssssssssssssssssssssssssssssssss"}
        ]
    },
    cor: {
        popoverTitles: ["דוקטור קור", "דוקטור cor"],
        popoverContents: [
            {"דוקטור קור": "דוקטור cor"},
            {"דוקטור cor": "דוקטור corrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"}
        ]
    },

}
export default solutions