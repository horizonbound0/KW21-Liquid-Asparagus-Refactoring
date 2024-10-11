const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Number
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  # Set up an Auth type to handle returning data from a user creating or user login
  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(id: ID): User
    books: [Book]
    book(id: ID): Book
  }

  type Mutation {
    # Set up mutations to handle creating a user or logging into a user and return Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(author: String!, description: String, title: String, bookId: String!, image: String, link: String): User

    addBook(userId: ID!, book: String!): User
    removeUser(userId: ID!): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
