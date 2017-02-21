// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge - Diets",
        "main":    "<h5>Test your knowledge!</h5>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
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
            "q": "According to the American Heart Association, what is the percentage of maximum heart rate in a moderate exercise?",
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
