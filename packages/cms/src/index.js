import { createClient, fetchExchange, cacheExchange } from "@urql/core";
import * as urql from "@urql/core";

console.log({ urql, createClient });

const client = urql.createClient({
  url: "https://beta.pokeapi.co/graphql/v1beta",
  exchanges: [fetchExchange],
});

export default client;

export { createClient, fetchExchange, cacheExchange };
