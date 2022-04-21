const db = require('../models/mysql')
const { Op } = require('sequelize')
const Posts = db.posts;

class PostRepo {
    registerPost(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await Posts.findAll({
                    where: {
                        [Op.or]: [{ id: data.id }],
                        [Op.or]: [{ body: data.body }]
                    }
                })
                if (post.length) {
                    return resolve("Post already exist")
                }
                else {
                    const newPost = {
                        id: data.id,
                        body: data.body,
                        userid: data.userId,
                        title: data.title
                    };
                    console.log(newPost);
                    const pst = Posts.create(newPost)
                    if (pst) {
                        resolve(newPost)
                    }
                    else {
                        resolve("error in creating Post")
                    }
                }
                /* .then( post => {
                     if (post.length) {

                         return resolve("Post already exist")
                     } else {
                         const newPost = {
                             id: data.id,
                             body: data.body,
                             userid: data.userId,
                             title: data.title
                         };
                         console.log(newPost);
                         Posts.create(newPost)
                             .then(function (posts) {
                                 if (posts) {
                                     return resolve(posts)
                                 }
                                 else {
                                     result = "Error in inserting new record";
                                 }
                                 return resolve(result);
                             });
                     }
                 });*/

            }
            catch (error) {
                reject(error);
            }
        });
    }

    getPost(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await Posts.findOne({
                    where: {
                        id: data.postid
                    }
                })
                return resolve(post);
                }
            catch (error) {
                reject(error);
            }
        });
    }
}
module.exports = PostRepo