const searchbar = document.getElementById("searchbar");
const searchbtn = document.getElementById("sbtn");
const hot=document.getElementById("hotelcontainer")



function getUser(value) {
	let apiUrl="https://geek-hotel.free.beeceptor.com/gethotels"
	if(value === undefined){
		 apiUrl=`https://geek-hotel.free.beeceptor.com/gethotels`
	}
	else{
		 apiUrl=`https://geek-hotel.free.beeceptor.com/gethotels/${value}`
	}
	const promise = fetch(apiUrl);
	console.log(promise);
	promise.then((response) => {
		return response.json()
	}).then((data)=>{
		let result=data
	    console.log(result);
		if(value===undefined){
			result.map((ele)=>{
				const card=document.createElement("div")
				const image=document.createElement("img")
				const name=document.createElement("h2")
				const rat=document.createElement("p")
				const price=document.createElement("p")
				name.innerText=ele.name
				image.src=ele.img
				rat.innerText=ele.rating
				price.innerText=ele.price
				card.appendChild(name)
				card.appendChild(image)
				card.appendChild(rat)
				card.appendChild(price)
				hot.appendChild(card)
				})
		}
		else{
			hot.innerHTML="";
				const card=document.createElement("div")
				const image=document.createElement("img")
				const name=document.createElement("h2")
				const rat=document.createElement("p")
				const price=document.createElement("p")
				name.innerText=result.name
				image.src=result.img
				rat.innerText=result.rating
				price.innerText=result.price
				card.appendChild(name)
				card.appendChild(image)
				card.appendChild(rat)
				card.appendChild(price)
				hot.appendChild(card)
		}
	
	})
}

searchbtn.addEventListener("click",(e)=>{
	e.preventDefault()
	const value=searchbar.value
	getUser(value)
})

	getUser()

