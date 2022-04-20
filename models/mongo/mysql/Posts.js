
module.exports = (sequelize, Datatypes) => {
    const Posts = sequelize.define('Posts', {
        userid: { type: Datatypes.STRING, primaryKey: true },
        id: { type: Datatypes.STRING, allowNull: false ,unique:true},
        title: { type: Datatypes.STRING, allowNull: false },
        body: { type: Datatypes.STRING, allowNull: false },
    });

    return Posts;

}
