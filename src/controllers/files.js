const { files, shops } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  show: async (req, res) => {
    try{
      const { id } = req.params;
      const file = await files.findByPk(id);

      return res.status(200).json(file);
    }catch(err){
      return res.status(400).json(err);
    }
  },
  create: async (req, res) => {
    try{
      const { filename } = req.file;
      const { id: shopId } = req.params; //shop id

      const file = await files.create({
        path: filename,
        shopId: parseInt(shopId)
      });

      return res.status(201).json(file);
    }catch(err){
      return res.status(400).json(err);
    }
  },
  remove: async (req, res) => {
    try{
      const { id } = req.params;
      const { id: userId } = req.user;

      const file = await files.findByPk(id);
      const shop = await shops.findByPk(file.shopId);

      if(shop.userId !== userId) return res.status(401).json({ message: 'usuário não autorizado!' });

      const resp = await files.destroy({ where: { [Op.and]: [{id}] } });

      if(resp < 1) return res.status(400).json({ message: 'falha ao excluir' });

      return res.status(200).json({ message: 'item removido' });
    }catch(err){
      return res.status(400).json(err);
    }
  }
}
