var express=require("express");
var app=express();

app.set('views','./view');
app.set('view engine','jade');
app.use(express.static(__dirname+'/node_modules'));

app.get("/login",function(req,res){
	res.render('login',{
		title:'登陆页'
	})
})

app.post("/list",function(req,res){
	console.log(req)
	res.render('list',{
		title:'详情页',
		movie:[{
			urlImg:"https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2367559705.jpg",
			url:"/detail?page=1&name=人猿泰山",
			title:"人猿泰山"
		},{
			urlImg:"https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2357111716.jpg",
			url:"/detail?page=2&name=忍者神龟",
			title:"忍者神龟"
		},{
			urlImg:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2362976267.jpg",
			url:"/detail?page=3&name=独立日",
			title:"独立日"
		},{
			urlImg:"https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2367559705.jpg",
			url:"/detail?page=1",
			title:"人猿泰山"
		},{
			urlImg:"https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2357111716.jpg",
			url:"/detail?page=2",
			title:"忍者神龟"
		},{
			urlImg:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2362976267.jpg",
			url:"/detail?page=3",
			title:"独立日"
		}]
	})
})

app.get("/detail*",function(req,res){
	var num = req.query.page;
	var title = req.query.name;
	res.render('detail',{
		movieTitle:title,
		data:{
			pic:"https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2367559705.jpg",
			url:"http://www.baidu.com",
			daoyan:"大卫·叶茨",
			bianju:"埃德加·赖斯·巴勒斯",
			zhuyan:"埃德加·赖斯·巴勒斯",
			leixing:"动作 / 冒险",
			web:"legendoftarzan.com",
			guojia:"美国",
			yuyan:"英语",
			time:"2016-07-19(中国大陆) / 2016-07-01(美国)",
			pianchang:"110分钟"
		}
	})
})


app.listen(5000,function(req,res){
	console.log('app is running at port 3000');
})
console.log("成功跳转")

