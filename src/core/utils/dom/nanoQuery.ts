


export function nanoQuery(selector: string) {

    return new nanoQuery.fn.init(selector)
}

nanoQuery.fn = nanoQuery.prototype = {
    init(selector: string) {

    }
}

// $(".test")[0].css('')