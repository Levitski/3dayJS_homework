function myFirstApp(name, age) {

	alert("Привет! Меня зовут " + name +  ", и это моя программа!");

	function showSkills() {
		let skills = [
			"HTML",
			"CSS",
			"Photoshop"
		]

		document.write("<ul>Я владею навыками:");
		for (let i = 0; i < skills.length; i++) {
			document.write("<li>" + skills[i] + "</li>");	
		}
		document.write("</ul>")

	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Мне больше восемнадцати")
		} else {
			alert("Мне меньше восемнадцати")
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num * num)
	}

	calcPow(4)

}

myFirstApp("Искандер", 23)