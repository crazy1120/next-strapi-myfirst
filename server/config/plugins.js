module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",

      defaultLimit: 25,
      maxLimit: 100,

      apolloServer: {
        tracing: true,
      },
    },
  },
});
