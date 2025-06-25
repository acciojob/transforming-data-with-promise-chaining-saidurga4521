//your JS code here. If required.
const valueE1=document.getElementById('ip');
const outputE1=document.getElementById('output');
const btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
	const value=Number(valueE1.value)
	normal(value).then((res)=>{
		outputE1.innerText=`Result:${res}`;
		return multiply(res);
	}).then((res)=>{
		outputE1.innerText=`Result:${res}`;
		return subtract(res);
	}).then((res)=>{
		outputE1.innerText=`Result:${res}`;
		return divide(res);
	}).then((res)=>{
		outputE1.innerText=`Result:${res}`;
		return add10(res);
	}).then((res)=>{
		outputE1.innerText=`Final Result:${res}`;
	})
	function normal(value){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(value)
			},2000)
			
		})
}
	function multiply(value){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(value*2)
			},2000)
		})
	}
	function subtract(value){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(value-3)
			},1000)
		})
	}
	function divide(value){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(value/2)
			},1000)
			
		})
	}
	function add10(value){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(value+10)
			},1000)
		})
	}

})

