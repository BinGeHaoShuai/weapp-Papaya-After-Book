const store = {
	_init(){
		if(uni.getStorageSync('store')==''){
			uni.setStorageSync('store',{})
			return
		}
		const data = uni.getStorageSync('store')
		for(let i in data){
			if(!this[i]){
				this[i] = data[i]
			}
		}
	},
	setData(key,value){
		if(key == '_init'||key=='setData'){
			console.error('store:非法key值',key)
			return
		}
		this[key] = value
		uni.setStorageSync('store',this)
		console.log(uni.getStorageSync('store'))
	}
}

export default store;