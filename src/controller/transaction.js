const ModelTransaction = require("./../model/transaction");

const transactionController = {
  update: (req, res) => {
    ModelTransaction.updateData(req.params.id, req.body)
      .then((result) =>
        res.send({
          status: 200,
          message: `berhasil memasukan data`,
          data: result,
        })
      )
      .catch((err) => res.send({ status: 400, message: "error", err }));
  },
  delete: (req, res) => {
    ModelTransaction.deleteData(req.params.id)
      .then(() => res.send({ status: 200, message: `berhasil menghapus data` }))
      .catch((err) => res.send({ status: 400, message: "error", err }));
  },
  getTransaction: (req, res) => {
    console.log("masuk");
    ModelTransaction.selectData()
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ status: 400, message: "error", err }));
  },
  insert: (req, res) => {
    ModelTransaction.insertData(req.body)
      .then(() => res.send({ status: 200, message: `berhasil memasukan data` }))
      .catch((err) => res.send({ status: 400, message: "error", err }));
  },
};

exports.transactionController = transactionController;
