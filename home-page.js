import { heroes } from "./data/heroes.js";

export const url = new URL(window.location.href);

renderHeroesGrid();

function renderHeroesGrid(){
    
    let heroHTML = ``;


    heroes.forEach((hero)=>{
        heroHTML += `
        <div class="hero-container">
            <div class="button-container">
                <button class="hero-button" data-hero-id="${hero.name}">
                    <img src="/Deadlock Images & Videos/${hero.name}/render.png" class="hero-render" >
                    <p class="hero-text">
                        ${hero.name}
                    </p>
                </button>
            </div>
        </div>
        `
    });

    console.log(heroHTML);
    if(document.querySelector('.hero-grid')!== null){
        document.querySelector('.hero-grid').innerHTML = heroHTML;
    }
    

    document.querySelectorAll('.hero-button').forEach((button)=>{
        button.addEventListener('click', () => {
            const name = button.dataset.heroId;
            window.location.href = `./wiki-page.html?hero=${name}`
        })
    })
}