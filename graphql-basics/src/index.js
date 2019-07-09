//graphql-yoga github.com/prismagraphql-yoga
import { GraphQLServer} from 'graphql-yoga';

//Scalar types - String, Boolean, Int, Float, ID

//Demo User data
const users = [{
    id: '1',
    name: 'Scott',
    email: 'scottcal@gmail.com',
    age: 41
},{
    id: '2',
    name: 'Sarah',
    email: 'sara@example.com'
},{
    id: '3',
    name: 'Mike',
    email: 'Mike@example.com'

}]
//Demo Post Data
    const posts = [{
        id: '1',
        title: 'What is graphql?',
        body: 'Graphql is a new way to query data, that doesn\'t reply on REST',
        pushlished: true
    },{
        id: '2',
        title: 'Why graphql?',
        body: 'Graphql makes like easier by allow you to ask for only the data you need',
        pushlished: true
    },{
        id: '3',
        title: 'Who uses graphql?',
        body: 'Companies like Facebook, Airbnb and tons on mobile apps reply on graphql',
        pushlished: false
    }]

//Type definitions (schema)
const typeDefs = `
    type Query{
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        me: User!
        post: Post!
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`
//Resolvers
const resolvers = {
    Query: {
        users(parent,args,ctx,info) {
            
            if (!args.query){
                return users
            }

            return users.filter((users) => {
                return users.name.toLowerCase().includes(args.query.toLowerCase())
            })
        },
        posts(parent,args,ctx,info){
            if (args.query){
                return posts.filter((posts) => {
                    return (
                        posts.title.toLowerCase().includes(args.query.toLowerCase()) || 
                        posts.body.toLowerCase().includes(args.query.toLowerCase())
                    )
                })
            }
            return posts

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
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log('The Server is up!',`${dateTime}`);
})