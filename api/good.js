module.exports = function(router) {
  /* user */
  router.get('/good', function(req, res, next) {
    res.json({ title: 'good' });
  });

  router.get('/good/describe', function(req, res, next) {
    res.json({ title: 'describe' });
  });

  router.get('/good/repertory', function(req, res, next) {
    res.json({ title: 'repertory' });
  });
}
