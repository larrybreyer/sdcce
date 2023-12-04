
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200 ) {
        let xmlDoc = xhr.responseXML
        let team = xmlDoc.getElementsByTagName('teammember')
        for (let i = 0; i < team.length; i++) {
            document.body.innerHTML +=
            xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue + '<br>' +   
            xmlDoc.getElementsByTagName('title')[i].childNodes[0].nodeValue + '<br>' +
            xmlDoc.getElementsByTagName('bio')[i].childNodes[0].nodeValue + '<br><br>'  
        }
    }
}
xhr.open('Get','data/team.xml')  
<<<<<<< HEAD
xhr.send()
=======
xhr.send()
>>>>>>> 768f2225fdba2834510be57ec7da4f7aa7b154fd
