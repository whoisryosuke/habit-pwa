module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2043ca1e518243c17d252b8c86ddd7f6'),
  },
});
