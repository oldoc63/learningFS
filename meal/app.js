const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  get desserts () {
    return this.courses.desserts;
  },
  set appetizers (entradas) {
    return this._courses.appetizers = entradas;
  },
  set mains (principal) {
    return this._courses.mains = principal;
  },
  set desserts (postres) {
    return this._courses.desserts = postres;
  },
}






