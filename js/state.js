const target = {
    activities: []
};

const handler = {
    get: function (target, key) {
        return Reflect.get(...arguments);
    },
    set: function (target, key) {
        // console.log("set", target, key);
        if (target.activities.includes(key)) {
            let ind = target.activities.indexOf(key);
            target.activities.splice(ind, 1);
            return target;
        }

        target.activities.push(key);
        return target;
    }
}

const state = new Proxy(target, handler)

export {
    state
}
