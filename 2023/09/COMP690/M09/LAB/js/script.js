
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200 ) {
        console.log(xhr.responseXML)
    }
}
xhr.open('Get','/data/team.xml')  
xhr.send()