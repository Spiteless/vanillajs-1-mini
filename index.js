let count = 0;
let elemenent = document.getElementById("counter")

function increase(){
    count ++;
    elemenent.innerText = count
    return count
}

function decrease(){
    count --;
    elemenent.innerText = count
    return count
}

function reset(){
    count = 0;
    elemenent.innerText = count
    elemenent.innerHTML = `<mark>${count}</mark>`
    return count
}

function selectTheme(theme){
    console.log("select theme: " + theme);
    document.getElementsByTagName("body")[0]["className"] = theme
    document.getElementsByTagName("main")[0]["className"] = theme
    buttons = document.getElementsByTagName("buttons")

    for(index in buttons){
        buttons[index]["className"] = theme
    }
}