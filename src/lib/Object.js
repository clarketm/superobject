/**
 * Check for nested JavaScript object value from string key
 *
 * @memberof  Object.prototype
 * @param     {String}              path property
 * @return    {Boolean}             has property value
 */
Object.prototype.hasNested = function (path) {
  let self = this;
  path = path.replace(/\[(\w+)\]/, '.$1');
  path = path.replace(/^\./, '');

  const keys = path.split('.');
  for (let key of keys) {
    if (typeof self === 'object' && key in self) self = self[key];
    else return false;
  }
  return true;
};

/**
 * Get nested JavaScript object value from string key
 *
 * @memberof  Object.prototype
 * @param     {String}              path property
 * @return    {*}                   property value
 */
Object.prototype.getNested = function (path) {
  let self = this;
  path = path.replace(/\[(\w+)\]/, '.$1');
  path = path.replace(/^\./, '');

  const keys = path.split('.');
  for (let key of keys) {
    if (typeof self === 'object' && key in self) self = self[key];
    else return;
  }
  return self;
};

export default Object;
