'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notebookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User, { foreignKey: 'userId'});
    Note.belongsTo(models.Notebook, { foreignKey: 'notebookId'});
  };
  return Note;
};
