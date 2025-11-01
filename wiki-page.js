import { heroes, getHero} from "./data/heroes.js";
import { url } from "./home-page.js";

renderWikiPage();

function renderWikiPage(){

    let heroParam = url.searchParams.get('hero');

    if(heroParam == "Mo"){
        heroParam = "Mo & Krill";
    }

    const hero = getHero(heroParam);

    document.querySelector('title').innerHTML = `${hero.name} Info`;



    let wikiPageHTML = `
    <header class="hero-name">
            ${hero.name}
    </header>
        <div class="content-wrapper">
            <div class="info-container">
                <div class="content-container">
                    <div class="description-container">
                        <h2 class="description-header">
                            Description
                        </h2>
                        <p class="hero-description">${hero.description}</p>
                    </div>
                    <div class="lore-entry">
                        <h2>
                            Lore Entry
                        </h2>
                        <div class="lore-text">
                            ${hero.loreEntry}
                        </div>
                    </div>    
                    <div class="weapon-info">
                        <h2>
                            Weapon
                        </h2>
                        <div class="weapon-container">
                            <p class="weapon-description">${hero.weaponInfo}</p>
                            <img src="${hero.weaponImage}" class="weapon-image">
                        </div>
                    </div>
                    <div class="showcase-section">
                        <h2>
                            Showcase & Abilities
                        </h2>
                        <div class="video-container">
                            <video src="${hero.showcase}" controls muted></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wiki-sidebar">
                <div class="sidebar-header">    
                    <img src="/Deadlock Images & Videos/${hero.name}/stylized-text.png" class="stylized-text">
                </div>
                <div class="hero-image">
                    <img src="/Deadlock Images & Videos/${hero.name}/portrait.png">
                </div>
                <div class="weapon-stats-container">
                    <div class="weapon-stats-header">
                        <h3 class="weapon-stats-headtext">
                            Weapon Stats
                        </h3>
                    </div>
                    <div class="weapon-stats-numbers">
                        <div class="damage-per-second">
                            <p class="weapon-text">
                                Damage Per Second : ${hero.weaponStats.damagePerSecond}
                            </p>
                        </div>
                        <div class="bullet-damage">
                            <p class="weapon-text">
                                Bullet Damage : ${hero.weaponStats.bulletDamage}
                            </p>
                        </div>
                        <div class="ammo">
                            <p class="weapon-text">
                                Ammo : ${hero.weaponStats.ammo}
                            </p>
                        </div>
                        <div class="reload-time">
                            <p class="weapon-text">
                                Reload Time : ${hero.weaponStats.reloadTime}s
                            </p>
                        </div>
                        <div class="bullet-velocity">
                            <p class="weapon-text">
                                Bullet Velocity : ${hero.weaponStats.bulletVelocity} m/s
                            </p>
                        </div>
                        <div class="light-melee-damage">
                            <p class="weapon-text">
                                Light Melee Damage : ${hero.weaponStats.lightMeleeDamage}
                            </p>
                        </div>
                        <div class="heavy-melee-damage">
                            <p class="weapon-text">
                                Heavy Melee Damage : ${hero.weaponStats.heavyMeleeDamage}
                            </p>
                        </div>
                        <div class="damage-falloff">
                            <p class="dmg-falloff">
                                Damage Falloff Range (m) : ${hero.weaponStats.weaponFalloffRange}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="health-stats-container">
                    <div class="health-stats-header">
                        <h3 class="health-stats-headtext">
                            Health Stats
                        </h3>
                    </div>
                    <div class="health-stats-numbers">
                        <div class="health-points">
                            <p class="health-text">
                                Health Points : ${hero.healthStats.healthPoints}
                            </p>
                        </div>
                        <div class="health-regen">
                            <p class="health-text">
                                Health Regen : ${hero.healthStats.healthRegen}
                            </p>
                        </div>
                        <div class="move-speed">
                            <p class="health-text">
                                Move Speed : ${hero.healthStats.moveSpeed} m/s
                            </p>
                        </div>
                        <div class="sprint-speed">
                            <p class="health-text">
                                Sprint Speed : ${hero.healthStats.sprintSpeed} m/s
                            </p>
                        </div>
                        <div class="dash-speed">
                            <p class="health-text">
                                Dash Speed : ${hero.healthStats.dashSpeed} s
                            </p>
                        </div>
                        <div class="Stamina">
                            <p class="health-text">
                                Stamina : ${hero.healthStats.stamina}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="abilities">
            <div class="ability-container">
                <img class="ability-image" src="${hero.abilities.ability1.image}">
            </div>
            <div class="ability-container">
                <img class="ability-image" src="${hero.abilities.ability2.image}">
            </div>
            <div class="ability-container">
                <img class="ability-image" src="${hero.abilities.ability3.image}">
            </div>
            <div class="ability-container">
                <img class="ability-image" src="${hero.abilities.ability4.image}">
            </div>
        </div>
    `

    document.querySelector('.page-wrapper').innerHTML = wikiPageHTML;
}