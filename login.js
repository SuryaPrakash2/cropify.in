const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

let captcha_arr = new Array()
captcha_arr.push(['img/c1.jpeg','smwm'])
captcha_arr.push(['img/c2.jpeg','qGphJ'])
captcha_arr.push(['img/c3.jpeg','2VYK'])
captcha_arr.push(['img/c4.jpeg','W68HP'])

let ind = Math.floor(Math.random()*captcha_arr.length)

function generatecaptcha(){
    let url = captcha_arr[ind][0]
    let text = captcha_arr[ind][1]
    document.getElementById("captcha").src = url

}

generatecaptcha()
let url = captcha_arr[ind][0]
let text = captcha_arr[ind][1]

function verify(){
    console.log("Hi")
    let enteredcaptcha = document.getElementById("enteredcaptcha").value
    window.prompt(enteredcaptcha)
    let verifier = document.getElementById("verifier")
    // console.log(enteredcaptcha.length)
    // console.log(text.length)
    console.log()
    if(enteredcaptcha==text){
        verifier.href = "home.html"
    }else{
        alert("Invalid Captcha")
    }
}