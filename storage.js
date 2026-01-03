

const handleAddStorage = () =>{
    // console.log('sharafat rohoman');
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const data = {id, name};

    localStorage.setItem(id , JSON.stringify(data));

}

const handleClear = () =>{
    localStorage.clear();
}


const storeData = localStorage.getItem('123');
console.log(JSON.parse(storeData));