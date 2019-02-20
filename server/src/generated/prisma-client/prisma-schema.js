module.exports = {
        typeDefs: /* GraphQL */ `type AggregateSong {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createSong(data: SongCreateInput!): Song!
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  updateManySongs(data: SongUpdateManyMutationInput!, where: SongWhereInput): BatchPayload!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  deleteSong(where: SongWhereUniqueInput!): Song
  deleteManySongs(where: SongWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  song(where: SongWhereUniqueInput!): Song
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Song {
  id: ID!
  name: String!
  artist: String
  content: String
  createdBy: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SongConnection {
  pageInfo: PageInfo!
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  name: String!
  artist: String
  content: String
  createdBy: UserCreateOneWithoutSongsInput!
}

input SongCreateManyWithoutCreatedByInput {
  create: [SongCreateWithoutCreatedByInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateWithoutCreatedByInput {
  name: String!
  artist: String
  content: String
}

type SongEdge {
  node: Song!
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  artist_ASC
  artist_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SongPreviousValues {
  id: ID!
  name: String!
  artist: String
  content: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input SongScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  artist: String
  artist_not: String
  artist_in: [String!]
  artist_not_in: [String!]
  artist_lt: String
  artist_lte: String
  artist_gt: String
  artist_gte: String
  artist_contains: String
  artist_not_contains: String
  artist_starts_with: String
  artist_not_starts_with: String
  artist_ends_with: String
  artist_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SongScalarWhereInput!]
  OR: [SongScalarWhereInput!]
  NOT: [SongScalarWhereInput!]
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SongWhereInput
  AND: [SongSubscriptionWhereInput!]
  OR: [SongSubscriptionWhereInput!]
  NOT: [SongSubscriptionWhereInput!]
}

input SongUpdateInput {
  name: String
  artist: String
  content: String
  createdBy: UserUpdateOneRequiredWithoutSongsInput
}

input SongUpdateManyDataInput {
  name: String
  artist: String
  content: String
}

input SongUpdateManyMutationInput {
  name: String
  artist: String
  content: String
}

input SongUpdateManyWithoutCreatedByInput {
  create: [SongCreateWithoutCreatedByInput!]
  delete: [SongWhereUniqueInput!]
  connect: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [SongScalarWhereInput!]
  updateMany: [SongUpdateManyWithWhereNestedInput!]
}

input SongUpdateManyWithWhereNestedInput {
  where: SongScalarWhereInput!
  data: SongUpdateManyDataInput!
}

input SongUpdateWithoutCreatedByDataInput {
  name: String
  artist: String
  content: String
}

input SongUpdateWithWhereUniqueWithoutCreatedByInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutCreatedByDataInput!
}

input SongUpsertWithWhereUniqueWithoutCreatedByInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutCreatedByDataInput!
  create: SongCreateWithoutCreatedByInput!
}

input SongWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  artist: String
  artist_not: String
  artist_in: [String!]
  artist_not_in: [String!]
  artist_lt: String
  artist_lte: String
  artist_gt: String
  artist_gte: String
  artist_contains: String
  artist_not_contains: String
  artist_starts_with: String
  artist_not_starts_with: String
  artist_ends_with: String
  artist_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SongWhereInput!]
  OR: [SongWhereInput!]
  NOT: [SongWhereInput!]
}

input SongWhereUniqueInput {
  id: ID
}

type Subscription {
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  songs: SongCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutSongsInput {
  create: UserCreateWithoutSongsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSongsInput {
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  songs: SongUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutSongsInput {
  create: UserCreateWithoutSongsInput
  update: UserUpdateWithoutSongsDataInput
  upsert: UserUpsertWithoutSongsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSongsDataInput {
  email: String
  password: String
}

input UserUpsertWithoutSongsInput {
  update: UserUpdateWithoutSongsDataInput!
  create: UserCreateWithoutSongsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    