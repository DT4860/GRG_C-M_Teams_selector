function save_table() { 
    let table_save = document.getElementById("table");
    table_save.oldHTML=table_save.innerHTML;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function isOdd (number) {
    return number % 2 !== 0;
}

function handleEnter(event) {
    if (event.key==="Enter") {
       const form = document.getElementById('form')
       const index = [...form].indexOf(event.target);
       form.elements[index + 1].focus();
       //event.preventDefault();
     }
 }

let dym_inputs = () => {
    let users = document.getElementById("people_count").value;
    //Reset
    for (x=9; x<=12; x++) {
        let ip_id = "user"+x;
        document.getElementById(ip_id).type = 'hidden'

        let p_id = "hidden"+x
        document.getElementById(p_id).innerHTML = ``
        document.getElementById(p_id).className = "hidden-p"
    }
    //Set
    for (x=9; x<=users; x++) {
        let ip_id = "user"+x;
        document.getElementById(ip_id).type = 'text'
        let p_id = "hidden"+x
        document.getElementById(p_id).innerHTML = `Player ${x}: `
        document.getElementById(p_id).className = ""
    }

}


let makeTeams = () => {
    let table_save = document.getElementById("table");
    table_save.innerHTML=table_save.oldHTML
    table_save.oldHTML=table_save.innerHTML;
    colors = ["red", "blue", "green", "yellow", "pink", "white", "black"]
    let users = document.getElementById("people_count").value;
    let shuffle_array = []
    for (x=1; x<=users; x++) {
        let ip_id = "user"+x
        let users_name = document.getElementById(ip_id).value
        shuffle_array.push(users_name)
        shuffle(shuffle_array)
    }
    shuffle(shuffle_array)
    let table = document.getElementById("table");
    color_count = 0
    people_count = 0
    if (isOdd(users)){
        for (y=0; y<(users/2)-1; y++) {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            row.className = `${colors[color_count]}`
            cell1.innerHTML = colors[color_count]
            cell2.innerHTML = shuffle_array[people_count]
            people_count +=1
            cell3.innerHTML = shuffle_array[people_count]
            cell1.className = `${colors[color_count]}`
            cell2.className = `${colors[color_count]}`
            cell3.className = `${colors[color_count]}`
            people_count +=1
            color_count +=1
        }
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = "Assasin"
        cell2.innerHTML = shuffle_array[shuffle_array.length - 1]
        cell1.className = `${colors[colors.length - 1]}`
        cell2.className = `${colors[colors.length - 1]}`
    }

    else{
        for (y=0; y<(users/2); y++) {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = colors[color_count]
            cell2.innerHTML = shuffle_array[people_count]
            people_count +=1
            cell3.innerHTML = shuffle_array[people_count]
            cell1.className = `${colors[color_count]}`
            cell2.className = `${colors[color_count]}`
            cell3.className = `${colors[color_count]}`
            people_count +=1
            color_count +=1
        }
    }

}