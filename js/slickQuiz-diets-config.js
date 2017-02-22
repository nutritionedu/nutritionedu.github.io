// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge - Diets",
        "main":    "<h5>Test your knowledge!</h5>",
        "results": "<h5>Answers</h5><ol><li>20g (induction)<br>50g (maintenance)</li><li>< 30% cal from fat</li><li>False</li><li>2000 cal + 2.5 hr/week</li></ol>",
        "level1":  "100%",
        "level2":  "75%",
        "level3":  "50%",
        "level4":  "25%",
        "level5":  "0%" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "What is the typical carbohydrate intake for a low carbohydrate diet?",
            "a": [
                {"option": "20g",                                         "correct": false},
                {"option": "10g",                                         "correct": false},
                {"option": "10g (induction)<br>80g (maintenance)",        "correct": false},
                {"option": "20g (induction)<br>50g (maintenance)",        "correct": true},
                {"option": "N/A",                                         "correct": false}// no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 2
            "q": "What is the typical fat intake for a low fat diet?",
            "a": [
                {"option": "< 30% cal from fat",      "correct": true},
                {"option": "70% cal from fat",        "correct": false},
                {"option": "0% cal from fat",         "correct": false},
                {"option": "50% cal from fat",        "correct": false},
                {"option": "45% cal from fat",        "correct": false}// no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 3
            "q": "In a high protein diet, 7%-10% calories come from protein.",
            "a": [
                {"option": "True",           "correct": false},
                {"option": "False",          "correct": true}// no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        },
        { // Question 4
            "q": "According to the USDA's Super Tracker, what is the average amount of calories to consume per day and the recommended amount of time for exercise each week?",
            "a": [
                {"option": "2000 cal + 2.5 hr/week",    "correct": true},
                {"option": "4000 cal + 5 hr/week",      "correct": false},
                {"option": "1000 cal + 1 hr/week",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Wrong!</span></p>" // no comma here
        } // no comma here
    ]
};
