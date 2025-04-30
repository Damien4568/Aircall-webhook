const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/', (req, res) => {
  console.log('📞 Otrzymano żądanie z Aircall:');
  console.log(JSON.stringify(req.body, null, 2));

  // Odpowiedź dla Aircall - wskazujemy użytkownika Emmy po ID
  res.json({
    target_user: "1421419"
  });
});

app.listen(port, () => {
  console.log(`✅ Webhook działa na http://localhost:${port}`);
});
