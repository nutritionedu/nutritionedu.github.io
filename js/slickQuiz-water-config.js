// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge - Water",
        "main":    "<h5>Test your knowledge!</h5>",
        "results": "<h5>Answers</h5><ol><li>True</li><li>2-4 hours</li><li>About 3 cups</li></ol>",
        "level1":  "100%",
        "level2":  "67%",
        "level3":  "33%",
        "level4":  "0%" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Water is vital to blood flow and removal of wastes from the body.",
            "a": [
                {"option": "True",                    "correct": true},
                {"option": "False",                   "correct": false}// no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 2
            "q": "How many hours do you need to pre-hydrate before exercise?",
            "a": [
                {"option": "30-40 minutes",       "correct": false},
                {"option": "10-15 minutes",       "correct": false},
                {"option": "2-4 hours",           "correct": true},
                {"option": "0 hours",             "correct": false}// no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 3
            "q": "What is the pre-exercise water recommendation for adults weighing around 160-120 lbs?",
            "a": [
                {"option": "~8 cups",             "correct": false},
                {"option": "~3 cups",             "correct": true},
                {"option": "at least 1 cup",      "correct": false},
                {"option": "1/2 gallon",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        } // no comma here
    ]
};
