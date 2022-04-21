

const postBiz = require('../biz/post.biz')

class PostController {



    register(app) {
        app.route('/scrapper/posts/:postid').post(async (request, response) => {
            try {
                let result;
                const PostBiz = new postBiz();
                /*result=await PostBiz.getPost(request.params);
                if(result){
                    response.json({result},'','')
                    return;
                }*/

                result = await PostBiz.insertPost(request.params);
                response.json({ result }, '', '')

            }
            catch (error) {
                next(error);
            }
        });
    }
}
module.exports = PostController