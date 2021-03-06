const sqlBuilder = require('sql-bricks');
class QueryBuilderBiz {
	constructor(table) {
		this.table = table;
		this.builder = sqlBuilder;
	}

	select(where,params = "*") {
		return new Promise(async (resolve, reject) => {
			try {
				const query = this.builder.select(params).from(this.table).where(where).toString();
				return resolve(query)
			} catch(error){
				return reject(error);
			}
		});
	}
	insert(params) {
		return new Promise(async (resolve, reject) => {
			try {
				const query = this.builder.insert(this.table, params).toString();
				return resolve(query)
			} catch(error){
				return reject(error);
			}
		});
	}
	update(where,params) {
		return new Promise(async (resolve, reject) => {
			try {
				const query = this.builder.update(this.table, params).where(where).toString();
				return resolve(query);
			} catch(error){
				return reject(error);
			}
		});
	}
}


module.exports = QueryBuilderBiz;
