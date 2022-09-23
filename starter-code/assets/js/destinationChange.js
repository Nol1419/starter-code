console.log('Conected')

// Contenido del Html -> preparado para enviar el fragment
// const contentArticle = document.querySelector('.article-section__body');

 // 1 step
const dataJson = fetch('./data.json');
// const data = dataJson.clone();

//change img
const contentImg = document.getElementById('img');
const figcaptionImg = document.getElementById('content_img');
const imgNew = document.getElementById('img')

// change contents
const parragraph = document.querySelector('.parragraph')
const section__footer = document.querySelector('.section__footer')
const title = document.querySelector('.title')

// CALL A THE LINKS
const btnLinkMoon = document.getElementById("moon")
const btnLinkMars = document.getElementById("mars")
const btnLinkEuropa = document.getElementById("europa")
const btnLinkTitan = document.getElementById("titan")


btnLinkMoon.addEventListener('click', () =>{
    // console.log("click")
    dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    // console.log(dataJson)

    const getData = (data) => {
            
        let viweData = data[0]
        console.log(viweData)      
    
        imgNew.src = viweData.images.png
        parragraph.innerHTML = viweData.description
        title.innerHTML = viweData.name
        section__footer.innerHTML = `
            <div class="footer__left">
                <h4>Avg. distance</h4>
                <p>384,400 km</p>
            </div>

            <div class="footer__rigth">
                <h4>Est. travel time</h4>
                <p>3 days</p>
                
            </div>
        `

        figcaptionImg.replaceChild(img, contentImg)

    }

})

btnLinkMars.addEventListener('click', () =>{
    dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    // console.log(dataJson)

    const getData = (data) => {
            
        let viweData = data[1] 

        imgNew.src = viweData.images.png
        parragraph.innerHTML = viweData.description
        title.innerHTML = viweData.name
        section__footer.innerHTML = `
                <div class="footer__left">
                    <h4>Avg. distance</h4>
                    <p>225 mil. km</p>
                </div>

                <div class="footer__rigth">
                    <h4>Est. travel time</h4>
                    <p>9 months</p>
                    
                </div>
            `

        figcaptionImg.replaceChild(img, contentImg)

    }

})


btnLinkEuropa.addEventListener('click', () =>{
     dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    // console.log(dataJson)

    const getData = (data) => {
            
        let viweData = data[2]     
    
        imgNew.src = viweData.images.png
        parragraph.innerHTML = viweData.description
        title.innerHTML = viweData.name
        section__footer.innerHTML = `
                <div class="footer__left">
                    <h4>Avg. distance</h4>
                    <p>628 mil. km</p>
                </div>

                <div class="footer__rigth">
                    <h4>Est. travel time</h4>
                    <p>3 years</p>
                    
                </div>
            `

        figcaptionImg.replaceChild(img, contentImg)

    }
})

btnLinkTitan.addEventListener('click', () =>{

     dataJson
        .then(res =>res.clone().json())
        .then(res => getData(res.destinations))

    const getData = (data) => {
            
        let viweData = data[3];
    
        imgNew.src = viweData.images.png;
        parragraph.innerHTML = viweData.description;
        title.innerHTML = viweData.name;

        section__footer.innerHTML = `
                <div class="footer__left">
                    <h4>Avg. distance</h4>
                    <p>1.6 bil. km</p>
                </div>

                <div class="footer__rigth">
                    <h4>Est. travel time</h4>
                    <p>7 years</p>
                    
                </div>
            `;

        figcaptionImg.replaceChild(img, contentImg)

    }

})


