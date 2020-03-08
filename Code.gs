if(!Array.prototype.isArray) {
  Array.prototype.isArray    = () => true;
  Boolean.prototype.isArray  = () => false;
  Date.prototype.isArray     = () => false;
  Function.prototype.isArray = () => false;
  Number.prototype.isArray   = () => false;
  Object.prototype.isArray   = () => true;
  RegExp.prototype.isArray   = () => false;
  String.prototype.isArray   = () => false;
}

if (!Date.prototype.isDate) {
  Array.prototype.isDate    = () => false;
  Boolean.prototype.isDate  = () => false;
  Date.prototype.isDate     = () => true;
  Function.prototype.isDate = () => false;
  Number.prototype.isDate   = () => false;
  Object.prototype.isDate   = () => false;
  RegExp.prototype.isDate   = () => false;
  String.prototype.isDate   = () => false;
}

if(!Number.prototype.isNumber) {
  Array.prototype.isNumber    = () => false;
  Boolean.prototype.isNumber  = () => false;
  Date.prototype.isNumber     = () => false;
  Function.prototype.isNumber = () => false;
  Object.prototype.isNumber   = () => false;
  Number.prototype.isNumber   = () => true;
  RegExp.prototype.isNumber   = () => false;
  String.prototype.isNumber   = () => false;
}

if(!Object.prototype.isObject) {
  Array.prototype.isObject    = () => true; // Array is object
  Boolean.prototype.isObject  = () => false;
  Date.prototype.isObject     = () => true; // Date is object
  Function.prototype.isObject = () => false;
  Number.prototype.isObject   = () => false;
  Object.prototype.isObject   = () => true; 
  RegExp.prototype.isObject   = () => true; // RegExp is object
  String.prototype.isObject   = () => false;
}

if(!String.prototype.isString) {
  Array.prototype.isString    = () => false;
  Boolean.prototype.isString  = () => false;
  Date.prototype.isString     = () => false;
  Function.prototype.isString = () => false;
  Number.prototype.isString   = () => false;
  Object.prototype.isString   = () => false;
  RegExp.prototype.isString   = () => false;
  String.prototype.isString   = () => true;
}

if(!Function.prototype.isFunction) {
  Array.prototype.isFunction    = () => false;
  Boolean.prototype.isFunction  = () => false;
  Date.prototype.isFunction     = () => false;
  Function.prototype.isFunction = () => true
  Number.prototype.isFunction   = () => false;
  Object.prototype.isFunction   = () => false;
  RegExp.prototype.isFunction   = () => false;
  String.prototype.isFunction   = () => false;
}

if(!Boolean.prototype.isBoolean) {
  Array.prototype.isBoolean    = () => false;
  Boolean.prototype.isBoolean  = () => true;
  Date.prototype.isBoolean     = () => false;
  Function.prototype.isBoolean = () => false;
  Number.prototype.isBoolean   = () => false;
  Object.prototype.isBoolean   = () => false;
  RegExp.prototype.isBoolean   = () => false;
  String.prototype.isBoolean   = () => false;
}

if(!RegExp.prototype.isRegExp) {
  Array.prototype.isRegExp    = () => false;
  Boolean.prototype.isRegExp  = () => false;
  Date.prototype.isRegExp     = () => false;
  Function.prototype.isRegExp = () => false;
  Number.prototype.isRegExp   = () => false;
  Object.prototype.isRegExp   = () => false;
  RegExp.prototype.isRegExp   = () => true;
  String.prototype.isRegExp   = () => false;
}