const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {
  console.log('📞 Otrzymano żądanie z Aircall:');
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`✅ Webhook działa na http://localhost:${port}`);
});
