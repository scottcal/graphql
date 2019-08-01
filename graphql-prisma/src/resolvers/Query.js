const Query = {
    users(parent,args,{prisma },info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                },{
                    email_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)

    },
    posts(parent,args,{prisma},info){
        const opArgs = {}

        if (args.query){
            opArgs.where = {
                OR: [{
                    title_contains: args.query
                }, {
                    body_contains: args.query
                }]
            }
        }

        return prisma.query.posts(opArgs,info)

    },
    comments(parent,args,{prisma},info){
        const opArgs = {}

        if (args.query){
            opArgs.where = {commenttxt_contains: args.query}
        }

        return prisma.query.comments(opArgs,info)
    },
    me(){
        return{
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        }
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