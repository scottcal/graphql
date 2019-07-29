const Comment = {
    author(parent,args,{db},info){
        return db.users.find((user) => {
            return user.id === parent.author
        })
    },
    post(parent,ags,{db},info){
        return db.posts.find((post) => {
            return post.id === parent.post
        })
    },
} 

export { Comment as default }