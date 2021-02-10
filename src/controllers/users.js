const jwt = require('jsonwebtoken');
const { users } = require('../models');
const mail = require('../services/mail');

module.exports = {
  validate: async (req, res) => {
    try{
      const { email, password } = req.body;
      const user = await users.findOne({ where: { email }});

      if(!user) return res.status(400).send({ message: 'email inválido!' });

      if(!user.comparePassword(password)) return res.status(400).send({ message: 'senha incorreta' });

      const token = user.genJwt();

      user.password = undefined;

      return res.status(200).json({ user, token });
    }catch(err){
      return res.status(400).json(err);
    }
  },

  show: async (req, res) => {
    try{
      const { id } = req.user;
      const user = await users.findByPk(id);

      user.password = undefined;

      return res.status(200).json(user);
    }catch(err){
      return res.status(400).json(err);
    }
  },

  create: async (req, res) => {
    try{
      const { name, email, password } = req.body;
      const user = await users.create({ name, email, password });

      const userToken = jwt.sign({ id: user.id }, 'activateToken');

      mail.sendMail({
        from: 'joe doe <example@email.com>',
        to: `${user.name} <${user.email}>`,
        subject: 'Confirmação de Email!',
        template: 'activateuser',
        context: {
          username: user.name,
          url: `http://localhost:3000/activate/${userToken}`
        }
      });

      return res.status(201).json(user);
    }catch{
      return res.status(400).json({ message: 'um usuario foi cadastrado com esse email!' });
    }
  },

  update: async (req, res) => {
    try{
      const { id } = req.params;
      const { name, email, password } = req.body;
      const user = await users.update({ name, email, password }, { where: { id } });

      if(user < 1) return res.status(400).json({ message: 'falha ao editar' });

      return res.status(201).json({ message: 'item editado!'});
    }catch(err){
      return res.status(400).json(err);
    }
  },

  remove: async (req, res) => {
    try{
      const { id } = req.params;
      const user = await users.destroy({ where: { id } });

      if(user < 1) return res.status(400).json({ message: 'falha ao excluir' });

      return res.status(200).json({ message: 'item removido' });
    }catch(err){
      return res.status(400).json(err);
    }
  },

  active: async (req, res) => {
    try{
      const { utoken } = req.params;
      const { id } = jwt.verify(utoken, 'activateToken');
      const user = await users.findByPk(id);

      user.active = true;
      await user.save();

      return res.status(200).json({ message: 'usuario ativado' });
    }catch(err){
      return res.status(400).json(err);
    }
  }
}
