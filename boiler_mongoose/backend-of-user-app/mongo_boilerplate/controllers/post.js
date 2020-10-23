const PostModel = require('../models/post')

exports.getPosts = (req,res)=> 
{
    res.json({
        posts:[
            {title:"Showing on web page1"},
            {title:"Showing on web page2"}
        ]
    })
   // res.send("Hello world")
}

exports.setPost = async (req,res) =>{
    const postOne = new PostModel({
        title : req.body.title,
        body : req.body.body
    })
    //To save into DB
    try{
    const savedPost = await postOne.save()
    res.json(savedPost);
    }
    catch(err)
    {
        res.json({messsage : err})
    }
}
