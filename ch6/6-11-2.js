import fs from 'fs';
class FileUtil {
  #process;

  constructor(process) {
    this.#process = process;
  }

  get process (){
    return this.#process;
  }
  get checkFileName() {
    if (!this.#process.argv[2]) {
      throw new Error('파일 이름을 입력하세요');
    }
  }

  get fileName() {
    const fileName = `./${this.process.argv[2]}.json`;
    return fileName;
  }


  get fileCheck(){
    if (!fs.existsSync(this.fileName)) {
      throw new Error('파일이 존재하지 않습니다');
    }
  }
  get parseOrders (){
    const rawData = fs.readFileSync(this.fileName);
    return JSON.parse(rawData);
  }
  get printOrders (){
    const orders = this.parseOrders;
    if (this.process.argv.includes('-r')) {
      console.log(orders.filter((order) => order.status === 'ready').length);
    } else {
      console.log(orders.length);
    }
  }
}
//nodemon 명령어 입력시 입력하는 방법 도 가능하다
//예 nodemon ch6/orders -r
//process.argv[2] = 'ch6/orders';
process.argv[2] = 'ch6/orders -r';
const fileUtil = new FileUtil(process);
fileUtil.checkFileName;
fileUtil.fileCheck;
fileUtil.printOrders;

