const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const ShowType = new GraphQLObjectType({
  name: "Show",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, args){
        return Director
      }
    }
  }),
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    show: {
      type: ShowType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // Gets data from database
        return _.find(directorId, { id: args.id });
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
