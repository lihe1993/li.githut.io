let myImages=document.querySelector('img');
myImages.onclick=function(){
	let mySrc=myImages.getAttribute('src');
	if(mySrc==='images/firefox1.png'){
		myImages.setAttribute('src','images/znxxbrkpeirz.png')
	}else{
		myImages.setAttribute('src','images/firefox1.png');
	}
}
function setHeading(name){
	let myHeading=document.querySelector('h1');
	myHeading.textContent='Mozilla 酷,'+name+'!';
}
function setUserName(){
	let myName=prompt('输入名字：');
	localStorage.setItem('name',myName);
	setHeading(myName);
}
let storedName=localStorage.getItem('name');
if(!storedName){
	setUserName();
}else{
	setHeading(storedName);
}

document.querySelector('button').onclick=setUserName;