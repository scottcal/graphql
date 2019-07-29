import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
   endpoint: 'http://localhost:4466'
})

//prisma.query
// prisma.query.users(null,'{ id name posts{id title} }').then((data) => {
//     console.log(JSON.stringify(data,undefined, 4))
// })

// prisma.query.comments(null,'{commenttxt id author{name id}}').then((data) => {
//     console.log(JSON.stringify(data,undefined,4))
// })

prisma.mutation.createPost({
    data:{
        title: "My new Graphql post is live!",
        body: "You can find the new course here",
        published: true,
        author: {
            connect: {
                id: "cjyapf5n5003t0878zrafvmny"
            }
        }
    }
}, '{id title body published }').then(() => {
    console.log(data)
}) 