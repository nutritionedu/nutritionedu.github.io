// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge - Carbohydrates",
        "main":    "<h5>Test your knowledge!</h5>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Which of the nutrients produce ATP?",
            "a": [
                {"option": "Fats",         "correct": true},
                {"option": "Lipids",       "correct": true},
                {"option": "Water",        "correct": false},
                {"option": "Carbs",        "correct": true},
                {"option": "Vitamins",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 2
            "q": "What is the correct amount of carbohydrate intake in a low intensity exercise?",
            "a": [
                {"option": "5-7 g/kg",                "correct": false},
                {"option": "3-5 g/kg",                "correct": true},
                {"option": "6-10 g/kg",               "correct": false},
                {"option": "10-12 g/kg",              "correct": false},
                {"option": "1-3 g/kg",                "correct": false}// no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 3
            "q": "Which is the amount of food that would supply 8-12 g of carbohydrates to fuel high intensity exercise?",
            "a": [
                {"option": "1 Slice of Bread",           "correct": true},
                {"option": "1/2 Cup of Strawberries",    "correct": false},
                {"option": "1 Whole Apricot",            "correct": false}// no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 4
            "q": "According to the American Heart Association, what is the percentage of maximum heart rate in a moderate exercise?",
            "a": [
                {"option": "40-54%",    "correct": false},
                {"option": "55-69%",    "correct": false},
                {"option": "= or >70%", "correct": true},
                {"option": "25-50%",    "correct": false},
                {"option": "60-70%",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 5
            "q": "During a brief exercise that is less than 45 minutes, there is no need to consume carbohydrates.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 5
            "q": "Which is the amount of food that would supply 5-7g of carbohydrate to fuel moderate exercise?",
            "a": [
                {"option": "1 Slice of Bread",    "correct": false},
                {"option": "1 Chocolate Bar",    "correct": false},
                {"option": "1/2 Cup of Rice",    "correct": false},
                {"option": "3 Ounces of Baby Carrots",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        } // no comma here
    ]
};
