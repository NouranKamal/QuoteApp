var qoutes=[
    q1={
        qoute:"“Be yourself; everyone else is already taken.”",
        name:"― Oscar Wilde"
    },
    q2={
        qoute:"“So many books, so little time.”",
        name:"― Frank Zappa"
    },
    q3={
        qoute:"“A room without books is like a body without a soul.”",
        name:"― Marcus Tullius Cicero"
    },
    q4={
        qoute:"“You only live once, but if you do it right, once is enough.”",
        name:"― Mae West"
    },
    q5={
        qoute:"“Be the change that you wish to see in the world.”",
        name:"― Mahatma Gandhi"
    },
    q6={
        qoute:"“Be yourself; everyone else is already taken.”",
        name:"― Oscar Wilde"
    },
    q7={
        qoute:"“In three words I can sum up everything I've learned about life: it goes on.”",
        name:"― Robert Frost"
    },
    q8={
        qoute:"“If you tell the truth, you don't have to remember anything.”",
        name:"― Mark Twain"
    },
    q9={
        qoute:"“A friend is someone who knows all about you and still loves you.”",
        name:"― Elbert Hubbard"
    },
    q10={
        qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        name:"― Oscar Wilde"
    },
    q11={
        qoute:"“Always forgive your enemies; nothing annoys them so much.”",
        name:"― Oscar Wilde"
    },
];
 

function newQoute(){
    var numOfQoute= Math.round (Math.random()*10)
    console.log(numOfQoute)

        document.getElementById("quote").innerHTML =qoutes[numOfQoute].qoute;
        document.getElementById("name").innerHTML =qoutes[numOfQoute].name;
   
     document.getElementById("qut").style.background="rgba(0,0,0,0.3)" ;
}

