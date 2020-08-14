const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body
        const user = await db.check_user(username)
        if(!user[0]){
            return res.status(401).send('Incorrect credentials')
        }else {
            const authenticated = bcrypt.compareSync(password, user[0].password);
            if(authenticated){
                req.session.user ={
                    userId: user[0].user_id,
                    username:user[0].username
                }
                res.status(200).send(req.session.user)
            }else{
                res.status(403).send('Username or Password incorrect')
            }
        }
    },
    register: async(req, res)=>{
        const db= req.app.get('db');
        console.log('BODY', req.body)
        const { username, password, profile_pic} = req.body;
        const existingUser= await db.check_user(username)
        if(existingUser[0]){
            return res.status(409).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        console.log('SALT', salt)
        const hash = bcrypt.hashSync(password, salt)
        console.log('HASH?', hash)
        const [newUser] = await db.create_user([username, hash, profile_pic])
        
        console.log('NEW USER?', newUser)
        req.session.user={
            userId: newUser.user_id,
            username:newUser.username,
            profile_pic:newUser.profile_pic
        }
        res.status(200).send(req.session.user)
    },
    logout:(req, res)=>{
        req.session.destroy();
        res.status(200);
    }
}