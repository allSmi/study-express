module.exports = function(router) {
  /* user */
  router.get('/user', function(req, res, next) {
    res.json({ title: 'user' });
  });

  router.get('/user/userName', function(req, res, next) {
    res.json({ title: 'name' });
  });

  router.get('/user/old', function(req, res, next) {
    res.json({ title: 'old' });
  });
}
