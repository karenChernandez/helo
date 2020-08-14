

module.exports = {
    getPosts: (req, res)=>{
        const db = req.app.get('db');
        db.get_allPosts().then(post=>{
            res.status(200).send(post)
        })
    },
    post:(req, res)=>{
        const db = req.app.get('db');
        const {title, image, content}=req.body
        db.create_post([title, image, content]).then(post=>{
            res.status(200).send(post)
            
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    }
}