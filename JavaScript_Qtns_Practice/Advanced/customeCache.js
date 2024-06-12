const person = {
  cache: {},
  setCache: function (key, value, expire) {
    this.cache[key] = {
      value,
      expire: Date.now() + expire,
    };
    return this.cache;
  },
  getItem: function (key) {
    let cachedItem = this.cache[key];
    if (cachedItem && cachedItem.expire > Date.now()) {
      return cachedItem.value;
    }
    // delete cachedItem[key];
    return undefined;
  },
};

console.log(person.setCache("Name", "Arshima", 60000));
console.log(person.getItem("Name"));
console.log(person.cache);
