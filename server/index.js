// 创建服务
const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
// 密钥
const secret = require('./secret')
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// 登录接口
app.get('/login', (req, res) => {
  let user = req.query.user
  let pwd = req.query.pwd
  // 省略了查询数据库的步骤
  // 生成token
  const token = jwt.sign({user, id:123}, secret.secretKey, {expiresIn: 20})
  res.send({
    info: 'success',
    status: 200,
    token
  })
})

//后端校验token是否过期
app.post('/getuser', (req, res) => {
  let token = req.headers.authorization;//接受token字段
  console.log('token',token);
  if (token) {
      jwt.verify(token, secret.secretKey, (err, decoded) => {
          if (err) {
              switch (err.name) {
                  case 'JsonWebTokenError':
                      res.send({ success:false, status:403, code: -1, msg: '无效的token' });
                      break;
                  case 'TokenExpiredError':
                      res.send({ success:false,status:403, code: -1, msg: 'token过期' });
                      break;
              }
          } else {//token验证通过了 
              //返回给前端相应的信息
              res.send({
                  status: 200,
                  success:true,
                  info: "token验证成功--返回请求的数据",
                  result:[1,2,3,4]
              })
          }
      })
  } else {
      res.send({
          success:false,
          status:403,
          info: "需要携带发送token"
      })
  }
})

app.listen(8888, () => {
  console.log(8888)
})