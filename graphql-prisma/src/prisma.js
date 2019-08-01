import { Prisma } from 'prisma-binding'
import { stringify } from 'querystring';

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'thisismysupersecrettext'
})

export { prisma as default }

//prisma.query

//Create Post

// const createPostForUser = async(authorId,data,run) => {
//     if (!run){
//         throw new Error ('Post not created. If you want to create a post, change run flag to true.')
//     }
    
//     if (!userExists) {
//         throw new Error ('User is not found')
//     }

//     const userExists = await prisma.exists.User({id: authorId})

//     if (!userExists) {
//         throw new Error ('User is not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data, 
//             author:{
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{author {id name email posts {id title published} }}')

//     return post.author
// }
// //Call Create Post
// createPostForUser('cjyapf5n5003t0878zrafvmny',{
//     title: 'Great books to read',
//     body:" The War of Art",
//     published: true
// },
// false
// ).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })

// // prisma.exists.Comment({
// //     id: "cjyeprihq00lc0896putikz61",
// //     commenttxt:"fart"
// // }).then((exists) =>{
// //     console.log(exists)
// // })



// //Update Post
// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({id:postId})

//     if (!postExists) {
//         throw new Error ('Post is not found')
//     }

//     const post = await prisma.mutation.updatePost({
//             where: {
//                 id: postId
//             },
//             data
//         }, '{ author { id name email posts { id title published } } }')

//     return post.author
// }

// updatePostForUser("cjyov7tx900bx07129vbflllb", {title: "Other Books that are good" ,published: false }).then((author) => {
//     console.log(JSON.stringify(author, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })

// UPDATE POST
// prisma.mutation.updatePost({
//     data:{
//         body:"Ok, here is what you need to know about graphql...",
//         published: true
//     },
//     where: {
//         id: "cjyom0kfd000x071227uru1d8"
//     }
// }, '{id }').then((data) => {
//     console.log(data)
//     return prisma.query.posts(null,'{id title body published}')
// }).then((data) => {
//     console.log(JSON.stringify(data,undefined,2))
// })