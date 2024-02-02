const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8080;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/static'));

const upload = multer({
  storage: multer.diskStorage({
    // 저장경로(요청, 파일, 콜백 인자)
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    // 파일명 설정
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 용량 제한 바이트 * 1024(킬로바이트) * 1024(메가바이트) 즉 5MB
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/profileUpload', upload.single('profile'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.render('result', { userInfo: req.body, profileInfo: req.file });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
