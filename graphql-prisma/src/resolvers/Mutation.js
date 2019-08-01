import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import getUserId from '../utils/getUserId'


// const dummy = async () => {
//     const email = 'jess@example.com'
//     const password = 'red12345'

//     const hashedPassword = '$2a$10$9Ej7gSeykQq1eBo9oKOqMOHk.KkTpGUwk5mdEotGMM3QQb9nlLFoO'

//     const isMatch = await bcrypt.compare(password,hashedPassword)
//     console.log(isMatch)
// }
// dummy()

const Mutation = {
    async createUser(parent,args,{prisma},info){
        if (args.data.password.length < 8){
            throw new Error('Password must be at least 8 characters')
        }
        
        //check if user already exists
        const emailTaken = await prisma.exists.User({ email: args.data.email})
        if (emailTaken) {
            throw new Error('Email taken')
        }

        const password = await bcrypt.hash(args.data.password, 10)

        const user = await prisma.mutation.createUser({
            data: {
                ...args.data,
                password 
            }
        } )

        return {
            user,
            token: jwt.sign({userId: user.id},'thisisasecret')
        }
    },

    async login(parent,args,{prisma},info){
        
        

        const user = await prisma.query.user({
            where: {
                email: args.data.email
            }
        })

        console.log(user)

        if (!user){
            throw new Error('User not found')
        }

        const isMatch = await bcrypt.compare(args.data.password, user.password)

        if(!isMatch){
            throw new Error('Unable to login')
        }

        return {
            user,
            token : jwt.sign({userId: user.id},'thisisasecret')
        }

        
    },

    async deleteUser(parent,args,{prisma},info){
        const userExists = await prisma.exists.User({ id: args.id})
        if(!userExists){
            throw new Error("User already doesn't exist, so we are good right?")
        }

        return prisma.mutation.deleteUser({
            where: {
                id: args.id
            }
        }, info)

    },
    async updateUser(parent,args,{prisma},info) {
        const userExists = await prisma.exists.User({ id: args.id})
        if(!userExists){
            throw new Error("User isn't found. Got the correct id?")
        }

        return prisma.mutation.updateUser({
            where: {
                id: args.id
            },
            data: args.data
        }, info)
    },

    async createPost(parent, args, {prisma, request}, info) {
        const userId = getUserId(request)

        // const userExists = await prisma.exists.User({ id: args.data.author.id})
        // if(!userExists){
        //     throw new Error("User isn't found. Got the correct id?")
        // }

        return prisma.mutation.createPost({
            data:{
                title: args.data.title,
                body: args.data.body,
                published: args.data.published,
                author:{
                    connect:{
                        id: userId
                    }
                }
            }
        },info)
        

    },
    async deletePost(parent,args,{prisma},info){

        const postExists = await prisma.exists.Post({id: args.id})
        if (!postExists) {
            throw new Error("I can't find your post and it makes me sad.")
        }

        return prisma.mutation.deletePost({
            where:{
                id: args.id
            }
            
        }, info)
    },

    async updatePost(parent, args, {prisma}, info) {
        return prisma.mutation.updatePost({
            where: {
                id: args.id
            }, 
            data: args.data
        }, info)
    },

    async createComment(parent,args,{prisma},info){
       
        const userExists = prisma.exists.User({id: args.data.author})
        
        return prisma.mutation.createComment({
            data:{
                commenttxt: args.data.commenttxt,
                author:{
                    connect:{
                        id: args.data.author
                        }
                    },
                post:{
                    connect:{
                        id: args.data.post
                    }
                }
            }
       
        })
    },
    deleteComment(parent,args,{prisma},info){
        
        return prisma.mutation.deleteComment({
            where: {
                id: args.id
            }
        })
    },
    async updateComment(parent,args,{prisma},info){
    
        return prisma.mutation.updateComment({
            data: args.data,
            where:{
                id: args.id
            } 
        },info)
    }


}

export { Mutation as default }
