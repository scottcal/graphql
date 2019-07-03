//graphql-yoga github.com/prismagraphql-yoga
import { GraphQLServer} from 'graphql-yoga';

//Scalar types - String, Boolean, Int, Float, ID

//Type definitions (schema)
const typeDefs = `
    type Query{
        greeting(name: String!, position: String!): String!
        add(x:Float! ,y: Float!): Float!
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
        greeting(parent,args,ctx, info) {
            if (args.name && args.position){
                return `Hello, ${args.name}! You are my favorite ${args.position}`
            } else {
                return `Hello!`
            }
        },
        add(parent,args,ctx, info) {
            return args.x+args.y
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