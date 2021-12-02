console.log("hello?");


const residentBtn = document.querySelector('button')

const clickedMe = () => {
    
    axios.get('https://swapi.dev/api/planets/2')
        .then(res => {
            const residents = res.data.residents
            residents.forEach(resident => {
                axios.get(resident)
                .then((res2) => {
                    console.log(res2);
                    const characters = document.createElement('h2')
                    characters.textContent = res2.data.name
                    document.body.append(characters)
                })
            })  
        })
    }

  
residentBtn.addEventListener('click', clickedMe)