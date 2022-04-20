
const HttpProxy = require('../proxy/http-proxy');
const api_suit = require('../constants/api-suit')

const PostRepo = require('../repositories/PostRepo')

const postrepo = new PostRepo();

class PostController {


    register(app) {
        app.route('/scrapper/posts/:postid').post(async (request, response) => {
            try {
                const httpproxy = new HttpProxy(api_suit.JSONTYPICODE_FLOW, '', request.params)
                const output = await httpproxy.make_request();
                let result = await postrepo.registerPost(output);
                response.json({result},'stored successfully','')


            }
            catch (error) {
                next(error);
            }
        });
    }
}
module.exports = PostController