// part 1 iterator
// es2015 规定可迭代对象拥有或其原型链拥有Symbol.iterator 属性方法
// Symbol.iterator () => obj 返回一个【迭代器协议】对象
// 【迭代器协议】对象，拥有next属性方法，():{value, done: boolean} => val

typeof Array.prototype[Symbol.iterator]().next === "function"
Array.prototype[Symbol.iterator]().next()  // {value: undefined, done: true}

const arrIterObj = [1, 2, 3][Symbol.iterator]()
arrIterObj.next() // {value: 1, done: false}
arrIterObj.next() // {value: 2, done: false}
arrIterObj.next() // {value: 3, done: false}
arrIterObj.next() // {value: undefined, done: true}

// 自定义可迭代对象
const myIter = {
    [Symbol.iterator]: function() {
        return {
            i: 0,
            next: function () {
                return {
                    done: this.i >= 2,
                    value: this.i >= 2 ? undefined : this.i++
                }
            }
        }
    }
}

for (const i of myIter) {console.log(i)}
/**
 * for of
 * 解构赋值
 * 扩展运算符
 * yeild* 都会使用 iterator接口
 */


/**
 * Part 2 generator
 * generator: 生成器对象，符合【迭代器协议】，由生成器函数(generator function)返回
 * 生成器函数执行时能暂停，后面又能从暂停处运行
 * 掉用生成器函数，并不会立即执里面的语句，而是返回一个迭代器(iterator)。
 * 当iterator的next方法被首次调用时，语句会执行到出现yield的位置， yield后面紧跟返回值
 * 或者是yield* 表示将控制权交给来一个生成器函数
 * next方法返{value, done}, value是本次yield表达式的返回值
 */
function* gen(i){
    console.log("before yield1")
    yield 1;
    console.log("after yield1")
    yield 2;
    yield 1+2
    yield i+2
    yield i+3
    yield *gen2(i+4)
    yield 8
}
function* gen2 (i) {
    yield i
    yield i+1
}
const g = gen(2)
for (const i of g) {console.log(i)}
console.log(
'/////////////////////////////////////////////////////'
)
;

function* gen3() {
    let a = yield 1;
    console.log(a)
    let b = yield a + 1
    yield b + 1
}
const g3 = gen3()
console.log(g3.next())
console.log(g3.next(100)) // 100 代替了第三行yield a
console.log(g3.next()) // 第四行 next没有传入参数， b为undefined，b+1 为NaN
console.log(g3.next())

/**
 * part 3
 * iterator,generator & async异步操作
 */

function myAjax(url, cb) {
    setTimeout(() => {
        return cb({
            retcode: 0,
            msg: "seccess"
        })
    }, 1000)
}

function thunkAjax(url) {
    return function ajax(cb) {
        return myAjax(url, cb)
    }
}
function* gen4() {
    const ajax = yield thunkAjax('')
}
const g4 = gen4()
const y1 = g4.next()
y1.value(c => {
    // const 
    console.log(c)

})

// 模仿co
function autoGenerator(genFunc) {
    const generator = genFunc()
    const run = (data) => {
        const res = generator.next(data)
        if (res.done) {return}
        res.value(run)
    }
    run()
}

function* gen5() {
    const res1 = yield thunkAjax("111");
    console.log(res1)
    // const res2 = yield thunkAjax("222")
    // console.log(res2)
}

console.log("\n")
autoGenerator(gen5)

/**
 * part 4 async, await
 * 异步操作使用generator和iterator麻烦，es2017提供asnyc，await
 * 在某种程度上await 是语法糖
 */

// 函数声明为async，返回promise。该函数为 asyncFunction
async function foo() {
    setTimeout(() => 3, 0)
}
console.log(foo()) // promise {<resolved>: 1}

// await 操作符用于等待一个promise对象。只用用于async function中

const p = function() {
    return new Promise(resolve => setTimeout(() => resolve(1), 0))
}

async function Bar() {
    const res = await p()
    const res2 = await 2
}