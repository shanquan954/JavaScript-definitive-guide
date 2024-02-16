class DefaultMap extends Map {
    constructor(defaultValue){
        super();
        this.defaultValue = defaultValue;
    }

    get(key){
        if(this.has(key)){
            return super.get(key);
        }else{
            return this.defaultValue;
        }
    }
}

class Histogram {
    constructor(){
        this.map = new DefaultMap(0);
        this.total = 0
    }

    add(text){
        text = text.replace("/\s/g","").toUpperCase();
        for (let charactor of text) {
            let count = this.map.get(charactor);
            this.map.set(charactor, count + 1)
            this.total++;
        }
    }

    toString(){
        let entries = [...this.map]
        entries.sort((a,b)=>{
            if(a[1] === b[1]){
                return a[0] < b[0] ? -1 : 1;
            }else{
                return b[1] - a[1];
            }
        })
        for(let entry of entries){
            entry[1] = entry[1] / this.total*100
        }
        entries.filter(x=>x[1]>=1)
        const line = entries.map(([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`)
        return line.join("\n")
    }


}

let histogram = new Histogram();
process.stdin.setEncoding('utf8');

console.log('请输入字符：');

process.stdin.on('data',function (data) {
  // 处理用户输入的数据
  histogram.add(data.trim())
  console.log(histogram.toString());
  // 结束输入流
  process.stdin.destroy();
});

let ab\u00e9 = 12_111

console.log(abé);




