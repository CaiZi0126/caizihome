// / : 首页
// /login : 用户登录
// /reg : 用户注册
// /post : 发表文章
// /logout : 登出

module.exports = function(app) {

    app.get('/', function(req, res){
        res.render('index', {title: '主页'});
    });

    app.get('/reg', function(req, res){
        res.render('reg', {title: '注册'});
    });

    app.post('/reg', function(req, res){
    });

    app.get('/login', function(req, res){
        res.render('login', {title: '登录'});
    });

    app.post('/login', function(req, res){
    });

    app.get('/post', function(req, res){
        res.render('index', {title: '发表'});
    });
    
    app.post('/post', function(req, res){
    });

    app.get('/logout', function(req, res){
    });
};