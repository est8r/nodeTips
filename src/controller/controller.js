const advice = (app, db) => {
  app.get("/tips", (req, res) => {
    res.json({
      tips: db.tips[parseInt(Math.random() * db.tips.length)],
    });
  });

  app.post("/create", (req, res) => {
    const body = req.body;
    db.tips.push(body.tips);
    res.json(body);
    console.log("recebido com sucesso!");
  });
};

export default advice;
