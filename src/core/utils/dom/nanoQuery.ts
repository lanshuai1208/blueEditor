interface INanoQuery {
  init: (selector: string) => INanoQuery;
}

function nanoQuery(selector: string): INanoQuery {
  return new nanoQuery.prototype.init(selector);
}

nanoQuery.prototype = {
  init(selector: string) {
    this.dom = document.querySelector(selector);
    return this;
  },
};

// $(".test")[0].css('')

export default nanoQuery;
