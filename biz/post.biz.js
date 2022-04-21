
const HttpProxy = require('../proxy/http-proxy');
const api_suit = require('../constants/api-suit')
const PostRepo = require('../repositories/post.repository')


class postBiz {
    
    
    insertPost(data) {
        return new Promise(async (resolve, reject) => {
            const postrepo = new PostRepo();

            try {

                let  result;
                result=await postrepo.getPost(data)
                if(result!=null){
                    return resolve("Post already exist")
                }
                const httpproxy = new HttpProxy(api_suit.JSONTYPICODE_FLOW, '', data)
                const output = await httpproxy.make_request();
                 result = await postrepo.registerPost(output);
                resolve(result);
            } catch (error) {
                reject(error);
            }

        });

    }
    
}

module.exports=postBiz