import { Query, Resolver } from "type-graphql";
import "reflect-metadata";

@Resolver()
export class UserResolver {
  @Query(() => String)
  async users(){
    return "Hello"
  }
}