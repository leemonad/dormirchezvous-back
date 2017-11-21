const requireAuth = (req, res, next) => {
  if (!req.user) {
    const err = new Error('Forbidden')
    err.status = 403
    return next(err)
  }
  next()
}

module.exports = requireAuth
