
const Picture = require("../models/Img");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;
    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();
    res.json(picture);
    res.status(200).json({ message: "Imagem salva com sucesso!" })
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." });
  }
};

exports.findAll = async ( req, res ) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagens "})
  }
}