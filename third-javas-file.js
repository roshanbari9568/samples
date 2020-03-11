var myfirst =
{

    "Literature": "Education",
    "Education": "Colleges",
    "Books": [

        { "FirstBook": "Core Java" },
        { "SecondBook": "SQL Essentials by 'Tata Mcgraw Hill'" },
        {
            "ThirdYearBook": [

                {
                    "FirstBook": "Computer Networking by Tata Mcgraw Hill"
                },
                {
                    "SecondBook": "Project Management"
                }
            ]


        }
    ]



}
console.log("This is " + myfirst.Literature + " Section");
console.log("This is all about your " + myfirst.Education + " Life")
console.log("This is my first book " + myfirst.Books[0].FirstBook)
console.log("This is my TFirstBook " + myfirst.Books[2].ThirdYearBook[0].FirstBook)
