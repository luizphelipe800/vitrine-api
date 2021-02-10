const { shops, users, files } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  index: async (req, res) => {
    try{
      const { uid } = req.query;

      if(!uid){
        const shopsList = await shops.findAll({ include: {
          model: users,
          attributes: ['name', 'email']
        } });

        return res.status(200).json(shopsList);
      }

      const shopsList = await shops.findAll({ where: { userId: uid }, include: {
        model: users,
        attributes: ['name', 'email']
      } });

      return res.status(200).json(shopsList);
    }catch(err){
      return res.status(400).json(err);
    }
  },
  show: async (req, res) => {
    try{
      const { id } = req.params;
      const shop = await shops.findByPk(id, { include: {
        model: users,
        attributes: ['name', 'email']
      }});

      const shopimages = await files.findAll({ where: { shopId: id }});

      return res.status(200).json({ shop, shopimages });
    }catch(err){
      return res.status(400).json(err);
    }
  },
  create: async (req, res) => {
    try{
      const { id } = req.user;
      const { name, address } = req.body;

      const shop = await shops.create({ name, address, userId: id });

      return res.status(201).json(shop);
    }catch(err){
      return res.status(400).json(err);
    }
  },
  update: async (req, res) => {
    try{
      const { id } = req.params;
      const { id: userId } = req.user;
      const { name, address } = req.body;

      const shop = await shops.update(
        { name, address },
        { where: { [Op.and]: [
          {id},
          {userId}
        ] } });

      if(shop < 1) return res.status(400).json({ message: 'falha ao editar' });

      return res.status(201).json({ message: 'item editado!'});
    }catch(err){
      return res.status(400).json(err);
    }
  },
  remove: async (req, res) => {
    try{
      const { id } = req.params;
      const { id: userId } = req.user;

      const shop = await shops.destroy({ where: { [Op.and]: [{id}, {userId}] } });

      if(shop < 1) return res.status(400).json({ message: 'falha ao excluir' });

      return res.status(200).json({ message: 'item removido' });
    }catch(err){
      return res.status(400).json(err);
    }
  }
}
