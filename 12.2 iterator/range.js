class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    get [Symbol.toStringTag]() {
        return 'Range';
    }

    toString(){
        return `${this.from}...${this.to}`;
    }

    async *[Symbol.asyncIterator]() {
        for (let i = this.from; i <= this.to; i++) {
            // 模拟异步操作，每个值生成都等待 1 秒
            yield i;
        }
    }
}

// 创建 Range 实例
const range = new Range(2, 4);

// 输出 Range 对象的字符串表示形式
console.log(Object.prototype.toString.call(range));

// 使用 for await...of 迭代异步生成器
(async () => {
    for await (let r of range) {
        console.log(r);
    }
})();
