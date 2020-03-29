// VERSION 2

/*
1.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM. 
- Creates an unordered list for each book

Use the following array of objects:
*/
const books = [
	{
		bookName: 'The Nature of Software Development',
		author: 'Ron Jeffries',
		coverURL: 'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
	},
	{
		bookName: 'Clean Code',
		author: 'Robert Cecil Martin',
		coverURL: 'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
	},
	{
		bookName: 'Refactoring',
		author: 'Kent Beck & Martin Fowler',
		coverURL: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg',
	},
];



function craetAndAppend(name,parent,options={}){
	const elem=document.createElement(name);
	parent.appendChild(elem);
	Object.entries(options).forEach(([key,value])=>{
		if(key==='text'){
			elem.textContent=value;
		}
		else {
			elem.setAttribute(key,value);
		}
	})
	return elem;
}

craetAndAppend("h1",root,{text:"The Book List"})
craetAndAppend("ul",root,{id:"ul"})
books.forEach(book=>{craetAndAppend('li',ul,{text:`${book.bookName} -wirtten by : ${book.author} `})})
books.forEach(book=>{craetAndAppend("img",ul,{src:`${book.coverURL}`})})


/*
2.
Write a function that:
- Makes an API call using the Fetch API.
- Uses the following URL: https://jsonplaceholder.typicode.com/users/1
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await
*/
const xhr = new XMLHttpRequest ;

xhr.onload=()=>{
	if(xhr.status==200){
		let data = JSON.parse(xhr.response);
		callback(data);
	}
	else{
		console.log('error!')

	}
}

function callback(data){
	console.log(data);
	data.forEach(element=>{
	let ul = document.createElement('ul')
	document.body.appendChild(ul);
	ul.innerHTML=`<li><h3>name:${element.name} </h3><li>
	<li><h3>email:${element.email} </h3><li>
	<li><h3>city:${element.city} </h3><li>`
console.log('ul')

})};

xhr.open('GET','https://jsonplaceholder.typicode.com/users/1')
xhr.send


/*

3.
Write a JavaScript function that:
- Accepts a string of 4 words as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '
*/
//from stack over flow website
function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
	}
	// Directly return the joined string
	return splitStr.join(' '); 
 }
 titleCase('the quick brown fox');
 




//my attempts are below 


/*function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
capitalizeFirstLetter('the quick brown fox');*/



//function toUpperCase(str){
	//let outPut=str.charAt(0).toUpperCase;
	//console.log("outPut")

//}
//toUpperCase('the quick brown fox')
