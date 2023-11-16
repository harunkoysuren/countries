// // sort

// let arr = ["arda","mehmet","emre","ata","gökhan","hasan"]

// const siralanmis = arr.sort()

// console.log(siralanmis)

// //sort ilk kelimeye bakar sayılarda ise 1 - 2 -3 e bakar 

// let sayilar = [1,6,3,9,20,12,30,35,67,81,43,96,71]

// // büyükten küçüğe a-b      küçükten büyüğe b-a
// let num_siralanmis = sayilar.sort((a,b) => a-b) 


// console.log(num_siralanmis)



const btn = document.getElementById("button")
const container = document.querySelector(".container")
const title = document.querySelector(".total-pop")

let sortedCountries = countries_data.sort((a,b) => b.population - a.population)

function calcWorldPopulation(){
    let toplam = 0 ;
    sortedCountries.forEach(country => {
        toplam += country.population
    })
    return toplam
}



btn.addEventListener("click",() => {
    sortedCountries.forEach(country => {
        const div = document.createElement("div")
        const name = document.createElement("h2")
        const capital = document.createElement("h3")
        const flag = document.createElement("img")
        const population = document.createElement("p")
        const percent_of_pop = document.createElement("p")
        const toplam_kisi = document.createElement("h1")
        

        let percent = Number(((country.population / calcWorldPopulation()) * 100).toFixed(5))


        name.textContent = country.name
        capital.textContent = country.capital
        flag.setAttribute("src",country.flag)
        population.textContent = country.population



        div.style.border = "1px solid black"
        div.style.textAlign = "center"
        flag.style.width = "50px"

        percent_of_pop.textContent = `Bu Ülkenin Nüfusunun Dünya Nufüsuna Oranı : ${percent}`

        div.appendChild(name)
        div.appendChild(capital)
        div.appendChild(flag)
        div.appendChild(population)
        div.appendChild(percent_of_pop)
        div.style.width = "400px"
        div.style.height = "300px"

        title.textContent = `Toplamda ${sortedCountries.length} Tane Ülke Var. Toplam Nufüs : ${calcWorldPopulation()}`

        container.appendChild(div)

        // if(percent > 3){
        //     percent_of_pop.style.color = "red"
        // }else{
        //     percent_of_pop.style.color = "green"
        // }

        percent >= 3 ? percent_of_pop.style.color = "red" : percent_of_pop.style.color = "green"
        
    })
})

