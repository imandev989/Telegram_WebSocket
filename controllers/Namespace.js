const NamespaceModel = require("./../models/Chat");

exports.getAll = async (req, res, next) => {
  try {
    const namespaces = await NamespaceModel.find({}, { room: 0 });
    return res.json(namespaces);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, href } = req.body;

    const namespace = await NamespaceModel.findOne({
      $or: [{ title }, { href }],
    });

    if (namespace) {
      return res
        .status(400)
        .json({ message: "There is namespace with this info !!" });
    }

    await NamespaceModel.create({ title, href });
    return res
      .status(201)
      .json({ message: "New namespace created successfully :))" });
  } catch (err) {
    next(err);
  }
};
