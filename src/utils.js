export const asyncHandler = handler => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (err) {
    next(err);
  }
};

export const requireParams = params => (req, res, next) => {
  for (const paramName in params) {
    const requestParam = req.body[paramName];

    if (!requestParam) {
      const err = new Error(`Missing required parameter ${paramName}`);
      err.status = 400;
      return next(err);
    }

    const param = params[paramName];
    if (param.type === Number) {
      const convertedParam = Number(requestParam);
      if (Number.isNaN(convertedParam)) {
        const err = new Error(`Expected number type for ${paramName}`);
        err.status = 400;
        return next(err);
      }
      req.body[paramName] = convertedParam;
    }
  }
  next()
};

export const requireAuth = (req, res, next) => {
  if (!req.user) {
    const err = new Error('Forbidden')
    err.status = 403
    return next(err)
  }
  next()
};
