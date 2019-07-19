const Query = {
    users(parent,args,{db},info) {
        
        if (!args.query){
            return db.users
        }

        return db.users.filter((users) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent,args,{db},info){
        if (args.query){
            return db.posts.filter((post) => {
                return (
                    post.title.toLowerCase().includes(args.query.toLowerCase()) || 
                    post.body.toLowerCase().includes(args.query.toLowerCase())
                )
            })
        }
        return db.posts

    },
    me(){
        return{
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        }
    },
    comments(parent,args,{db},info){
        return db.comments
    },

    post(){
        return{
            id: '473829',
            title: 'How to make jam',
            body: 'Make jam in less than 10 seconds. Follow these steps...',
            published: false
        }
    }
}

export {Query as default}