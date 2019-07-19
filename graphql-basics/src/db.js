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
    published: true,
    author: '1'
},{
    id: '2',
    title: 'Why graphql?',
    body: 'Graphql makes like easier by allow you to ask for only the data you need',
    published: true,
    author: '2'
},{
    id: '3',
    title: 'Who uses graphql?',
    body: 'Companies like Facebook, Airbnb and tons on mobile apps reply on graphql',
    published: false,
    author: '1'
},{
    id: '4',
    title: 'Who can use graphql?',
    body: 'Graphql is for everyone!',
    published: false,
    author: '1'
}]

//Demo
const comments = [{
    id: '1',
    commenttxt: 'I love graphql',
    author: '1',
    post: '1',
},{
    id: '2',
    commenttxt: 'Graphql is so perfect for my app',
    author: '2',
    post: '1',
},{
    id: '3',
    commenttxt: 'I couldn\'t imagine using anything else',
    author: '3',
    post: '2', 
},{
    id: '4',
    commenttxt: 'Graphql has made my life so much easier',
    author: '1',
    post: '3',
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }