const mysql = require('mysql');
const sqlConfig = require('./config');

const connection = mysql.createConnection(sqlConfig);

module.exports = class SdsSql {
  constructor() {
    this.tableName = 'normal_error'
    this.init()
  }

  init() {
    let sqlStr = `
      create table if not exists ${this.tableName}(
        id int primary key auto_increment,
        message varchar(255) not null,
        stack text not null
      )engine=InnoDB default charset=utf8
    `
    connection.query(sqlStr, (err, data) => {
      if (err) {
        conosle.log(err)
      } else {
        console.log('建表成功')
      }
    })
  }

  writeError(errInfo) {
    let sqlStr = `
      INSERT INTO ${this.tableName} SET ?
    `
    console.log(errInfo)
    connection.query(sqlStr, errInfo, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log('插入错误数据成功' + errInfo.message)
      }
    })
  }
}