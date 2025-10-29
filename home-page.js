import { heroes } from "./data/heroes.js";

renderHeroesGrid();

function renderHeroesGrid(){

    let heroHTML = ``;


    heroes.forEach((hero)=>{
        heroHTML += `
        <div class="hero-container">
            <div class="button-container">
                <button class="hero-button">
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

    document.querySelector('.hero-grid').innerHTML = heroHTML;
}