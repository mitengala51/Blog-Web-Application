import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyparser from "body-parser";

const app = new express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyparser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'html files')));
app.use(express.static(path.join(__dirname, 'views')));


let t,a,a1;
let index=[];

let blog=[];

const date = new Date();
const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '/');
console.log(formattedDate);

const __dirname=dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/html files/index.html")
    //res.sendFile(__dirname + "/CSS Files/style.css")
})

app.get("/Home",(req,res)=>{
    res.sendFile(__dirname + "/html files/index.html")

})

app.get("/Blog",(req,res)=>{
    res.sendFile(__dirname + "/html files/blog.html")
})

app.get("/Blog-Creation",(req,res)=>{
    res.sendFile(__dirname + "/html files/blog_app.html")
})

app.get("/Contact-Us",(req,res)=>{
    res.sendFile(__dirname + "/html files/contact_us.html")
})

app.post("/submit",(req,res)=>{
    t = req.body["title"];
    a = req.body["author"];
    a1 = req.body["article"];
    const data = { title: t, author: a, article: a1};

    blog.push(data)

    if(blog[4]){
        res.send(`<style>body{background-color: black; color: white;display: flex; justify-content: center;align-items: center; flex-direction: column} h1{text-align: center;} a{: }</style> <h1>Not more than 5 blog can be published</h1> <br> <a href="/Home">Go To Homepage</a>`);
    }

    console.log("title:" + t + "   author: " + a + "   article: " + a1)

     index.push(blog.indexOf(data));
     console.log(index);

    res.redirect("/");
}
)

app.get("/Blog-list",(req,res)=>{
    res.render("blog.ejs",{blog,index});
})

//Article-Displaying the Blog

app.get("/article-1",(req,res)=>{
     res.render("article.ejs",{blog,formattedDate});
 })

 app.get("/article-2",(req,res)=>{
    res.render("article1.ejs",{blog,formattedDate});
})

app.get("/article-3",(req,res)=>{
    res.render("article2.ejs",{blog,formattedDate});
})

app.get("/article-4",(req,res)=>{
    res.render("article3.ejs",{blog,formattedDate});
})

app.get("/article-5",(req,res)=>{
    res.render("article4.ejs",{blog,formattedDate});
})

//Edit Form Get Request

app.get("/blog-form",(req,res)=>{
    res.render("blog_form.ejs",{blog})
})

app.get("/blog-form-1",(req,res)=>{
    res.render("blog_form1.ejs",{blog})
})

app.get("/blog-form-2",(req,res)=>{
    res.render("blog_form2.ejs",{blog})
})

app.get("/blog-form-3",(req,res)=>{
    res.render("blog_form3.ejs",{blog})
})

app.get("/blog-form-4",(req,res)=>{
    res.render("blog_form4.ejs",{blog})
})

//post method for different forms
app.post("/edit-1",(req,res)=>{
    let t_edit=req.body["title"];
    let a_edit=req.body["author"];
    let a1_edit=req.body["article"];

    if(blog[0].title!==t_edit || blog[0].author!==a_edit || blog[0].article!==a1_edit){
        if(t_edit==null){
            t_edit=blog[0].title;
        }if(a_edit==null){
            a_edit=blog[0].author;
        }
        if(a1_edit==null){
            a1_edit=blog[0].article;
        }
        blog[0].title=t_edit;
        blog[0].author=a_edit;
        blog[0].article=a1_edit;
        res.redirect("/Blog-list")
    }else if(blog[0].title==t_edit || blog[0].author==a_edit || blog[0].article==a1_edit){
            res.send(`<h1>You dont have done any changes</h1> <br> <a href="/blog-form"><h2>Go Back</h2></a> <br> <a href="/Home"><h2>Go Home</h2></a>`)
        }

    }

    
)

app.post("/edit-2",(req,res)=>{
    let t_edit=req.body["title"];
    let a_edit=req.body["author"];
    let a1_edit=req.body["article"];

    if(blog[1].title!==t_edit || blog[1].author!==a_edit || blog[1].article!==a1_edit){
        if(t_edit==null){
            t_edit=blog[1].title;
        }if(a_edit==null){
            a_edit=blog[1].author;
        }
        if(a1_edit==null){
            a1_edit=blog[1].article;
        }
        blog[1].title=t_edit;
        blog[1].author=a_edit;
        blog[1].article=a1_edit;
        res.redirect("/Blog-list")
    }else if(blog[1].title==t_edit || blog[1].author==a_edit || blog[1].article==a1_edit){
            res.send(`<h1>You dont have done any changes</h1> <br> <a href="/blog-form"><h2>Go Back</h2></a> <br> <a href="/Home"><h2>Go Home</h2></a>`)
        }
}
)

app.post("/edit-3",(req,res)=>{
    let t_edit=req.body["title"];
    let a_edit=req.body["author"];
    let a1_edit=req.body["article"];

    if(blog[2].title!==t_edit || blog[2].author!==a_edit || blog[2].article!==a1_edit){
        if(t_edit==null){
            t_edit=blog[2].title;
        }if(a_edit==null){
            a_edit=blog[2].author;
        }
        if(a1_edit==null){
            a1_edit=blog[2].article;
        }
        blog[2].title=t_edit;
        blog[2].author=a_edit;
        blog[2].article=a1_edit;
        res.redirect("/Blog-list")
    }else if(blog[2].title==t_edit || blog[2].author==a_edit || blog[2].article==a1_edit){
            res.send(`<h1>You dont have done any changes</h1> <br> <a href="/blog-form"><h2>Go Back</h2></a> <br> <a href="/Home"><h2>Go Home</h2></a>`)
        }
}
)

app.post("/edit-4",(req,res)=>{
    let t_edit=req.body["title"];
    let a_edit=req.body["author"];
    let a1_edit=req.body["article"];

    if(blog[3].title!==t_edit || blog[3].author!==a_edit || blog[3].article!==a1_edit){
        if(t_edit==null){
            t_edit=blog[3].title;
        }if(a_edit==null){
            a_edit=blog[3].author;
        }
        if(a1_edit==null){
            a1_edit=blog[3].article;
        }
        blog[3].title=t_edit;
        blog[3].author=a_edit;
        blog[3].article=a1_edit;
        res.redirect("/Blog-list")
    }else if(blog[3].title==t_edit || blog[3].author==a_edit || blog[3].article==a1_edit){
            res.send(`<h1>You dont have done any changes</h1> <br> <a href="/blog-form"><h2>Go Back</h2></a> <br> <a href="/Home"><h2>Go Home</h2></a>`)
        }

}
)

app.post("/edit-5",(req,res)=>{
    let t_edit=req.body["title"];
    let a_edit=req.body["author"];
    let a1_edit=req.body["article"];

    if(blog[4].title!==t_edit || blog[4].author!==a_edit || blog[4].article!==a1_edit){
        if(t_edit==null){
            t_edit=blog[4].title;
        }if(a_edit==null){
            a_edit=blog[4].author;
        }
        if(a1_edit==null){
            a1_edit=blog[4].article;
        }
        blog[4].title=t_edit;
        blog[4].author=a_edit;
        blog[4].article=a1_edit;
        res.redirect("/Blog-list")
    }else if(blog[4].title==t_edit || blog[4].author==a_edit || blog[4].article==a1_edit){
            res.send(`<h1>You dont have done any changes</h1> <br> <a href="/blog-form"><h2>Go Back</h2></a> <br> <a href="/Home"><h2>Go Home</h2></a>`)
        }
}
)

// Handle Delete Request

app.get("/delete/:index", (req, res) => { 
        blog.splice(0, 1)
        res.redirect("/Blog-list"); 
});

app.listen(3000,()=>{
    console.log("Server is running");
})
