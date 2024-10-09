const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    # There is now a field to store the user's password
    password: String
    books: [String]
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
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    # Set up mutations to handle creating a user or logging into a user and return Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBook(userId: ID!, book: String!): User
    removeUser(userId: ID!): User
    removeBook(userId: ID!, book: String!): Book
  }
`;

module.exports = typeDefs;
