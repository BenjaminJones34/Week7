//objects but with functions
const defObject = (...data) => {
    return (key, setter = false, value = undefined) =>  { 
        if (setter) {
            data = [key, value, ...data];
        }
        const location = data.indexOf(key);
        return (location === -1) ? undefined : data[location+1];
    }; 
}

const extendObject = (parent, ...data) => {
    data = ["__parent__", parent, ...data];
    return (key, setter = false, value = undefined) => {
        if (setter) {
            data = [key, value, ...data];
        }
        
        const location = data.indexOf(key);
        return (location == -1) ? (getProperty(parent, key)) : data[location+1]
    }
}


const getProperty = (object, property) => object.apply(null, [property]);
const setProperty = (object, property, value) => object.apply(null, [property, true, value]);
const parent = (object) => getProperty(object, "__parent__");

const call = (object, method, ...args) => {
    const fn = getProperty(object, method);
    return fn.apply(null, [object, ...args]);
}

//demo code
const obj = defObject(
    "name", "BJones", 
    "age", 563, 
    "sayHi", (self) => `Hi: ${getProperty(self, "name")}`,
    "eat", (self, food) => `${getProperty(self, "name")} is eating ${food}`
);

console.log(obj("age"));
console.log(setProperty(obj, "age", 1234));
console.log(getProperty(obj, "age"));
console.log(call(obj, "sayHi"));
console.log(call(obj, "eat", "chicken tikka masala"));
console.log("")

const obj2 = extendObject(obj, "pets", "dog");
console.log(getProperty(obj2, "pets"));
console.log(getProperty(obj2, "name"));
console.log("")

const obj3 = extendObject(obj2, "pets", "cat");
console.log(getProperty(obj3, "pets"));
console.log(getProperty(obj3, "name"));
console.log("")

console.log(getProperty(parent(obj3), "pets"));