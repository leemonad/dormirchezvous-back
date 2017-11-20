const requireParams = params => (req, res, next) => {
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
};
