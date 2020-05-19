

const question1 = new Map ();
question1.set('title', 'What is my real Chinese Name?');
question1.set('a', 'Ka Ku Chow');
question1.set('b', 'Ka Yu Chow');
question1.set('c', 'Ka Ma Chow');
question1.set('correct', 'b');

const question2 = new Map ();
question2.set('title', 'What is my favourite Color?');
question2.set('a', 'Red');
question2.set('b', 'Purple');
question2.set('c', 'Blue');
question2.set('correct', 'a');

const question3 = new Map ();
question3.set('title', 'Which University did I go to in HK?');
question3.set('a', 'City U');
question3.set('b', 'Hong Kong U');
question3.set('c', 'Poly U');
question3.set('correct', 'a');


class Question {
    constructor (title, a, b, c, correct){
        this.title=title;
        this.a=a;
        this.b=b;
        this.c=c;
        this.correct=correct;
    }
}

var question1 = new Question {
    title= 'What is my Real Chinese name?',
    a = 'Ka Yi Chow',
    b= 'Ka Yu Chow',
    c='Ka Ma Chow',
    correct = 'Ka Yu Chow'
}


