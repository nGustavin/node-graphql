import path from "path"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"
import { UserResolver } from "./src/resolvers/UserResolver"
import "reflect-metadata"

async function main(){
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql")
  })

  const server = new ApolloServer({schema})

  const {url} = await server.listen()

  console.log(`Server running on ${url}`)
}

main()