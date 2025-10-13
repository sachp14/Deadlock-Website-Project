export const heroes = [
    {
        name : "Abrams", 
        description : "Abrams is a close range tank character that excels in using his shotgun and melee’s to deal high burst damage while having consistent sustainability. His abilities help him sustain himself through lifesteal and regeneration effects, as well as apply stun effects to make it easier for Abrams to land heavy melee hits for maximum damage. He excels highly in the close range, and if supplied with the proper items, can become an unkillable monster in team fights and 1v1 situations. His ability to deal high burst damage through melee attacks comes with a downside; the parry mechanic in the game. If Abrams gets parried, there is a very high chance that the opposition will target you, causing you to take massive damage, and possibly causing you to limp out of a team fight, or worse, dead. ",
        loreEntry : `<p style = "margin-bottom: 50px">Hard hitting, hard headed, and hard drinking; Detective Abrams has been a fixture on the New York investigating scene for years. From stolen art, to missing persons, to ritual murders; Abrams didn't just take any case that came across his desk... he solved them.</p>
    <p style = "margin-bottom: 50px">But his days of following cheating spouses came to an end the day he opened his office door and found The Tome sitting on his desk.</p>
    <p style = "margin-bottom: 50px">No instruction was left for him save for a brief note scrawled in onyx blood that read "Don't let them have it". Abrams hasn't figured where the thing came from; but seeing as his home has been broken into, his office tossed on 3 different occasions, and his car firebombed he has a vested interest in figuring out what the hell is going on.</p>
        `,
        weaponInfo : `Abrams’ shotgun is known as Case Closed. It is a one-handed shotgun that he holds in his right hand. In his left hand is The Tome that he found on his desk. `,
        weaponStats : {
            damagePerSecond: 52.9, 
            bulletDamage: 3.7, 
            ammo: 9,
            bulletsPerSecond: 1.59,
            reloadTime: 0.353,
            bulletVelocity: 610, 
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponRange: `20 → 46` ,
        },
        weaponImage: "images-&-videos/Abrams/weapon",
        healthStats: {
            healthPoints: 720, 
            healthRegen: 1.5 ,
            moveSpeed: 6.5,
            sprintSpeed: 2.0, 
            dashSpeed: 0.7 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Siphon Life",
                image : "images-&-videos/Abrams/ability1"
            },
            ability2 :{
                name : "Shoulder Charge",
                image : "images-&-videos/Abrams/ability2"
            },
            ability3 :{
                name : "Infernal Resilience",
                image : "images-&-videos/Abrams/ability3"
            },
            ability4 :{
                name : "Seismic Impact",
                image : "images-&-videos/Abrams/ability4"
            }
        },
        showcase : "images-&-videos/Abrams/showcase"
    },
       {
        name : "Bebop", 
        description : "Bebop specializes in getting far away targets close and setting him and his team up to deal high burst damage and turning the tide of a fight. The method in which Bebop gets his opponents close is by a hook ability Grapple Arm, and also pulls his teammates towards him. He can deal high bursts through applying Sticky Bombs to his opponents. He can also apply his Sticky Bombs to himself, supporting and opposing minions, and his teammates. He also has the ability to push opponents away with his Exploding Uppercut. His weakness lies in his low ability to deal damage after applying Sticky Bombs, making a long drawn out fight disadvantageous for him. Overall, he is an amazing character when combined with his team members.",
        loreEntry : `<p>
        Forged by the hands of a widowed junk yard attendant; Bebop was more than just some scrap golem laborer... he was the son she couldn't have. Together they would work in the iron yard during the day, and listen to jazz at night. It was a predictable, if not comforting routine. But now, Bebop's creator has fallen ill and while Miss Shelly wouldn't approve of the activities that Bebop does at night to pay for her medicine, what she doesn't know can't hurt her.
        </p>
        `,
        weaponInfo : `Bebop’s laser is named Humble Pie. It is a laser that is equipped in Bebop’s right hand, and has no bullet travel. Its maximum range begins at 32m and can be increased by 2m by each boon.`,
        weaponStats : {
            damagePerSecond: 56.8,
            bulletDamage: 4.77,
            ammo: 66,
            bulletsPerSecond: 11.9,
            reloadTime: 2.35,
            bulletVelocity: 508,
            lightMeleeDamage: 63,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 51` 
        },
        weaponImage: "images-&-videos/Bebop/weapon",
        healthStats: {
            healthPoints: 800, 
            healthRegen: 1.5 ,
            moveSpeed: 6.6,
            sprintSpeed: 2.0, 
            dashSpeed: 0.7 ,
            stamina: 2
        },
        abilities: {
            ability1 :{
                name : "Exploding Uppercut",
                image : "images-&-videos/Bebop/ability1"
            },
            ability2 :{
                name : "Sticky Bomb",
                image : "images-&-videos/Bebop/ability2"
            },
            ability3 :{
                name : "Grapple Arm",
                image : "images-&-videos/Bebop/ability3"
            },
            ability4 :{
                name : "Hyper Beam",
                image : "images-&-videos/Bebop/ability4"
            }
        },
        showcase : "images-&-videos/Bebop/showcase"
    },
    {
        name : "Billy", 
        description : "Billy specializes in close range battles and has an incredible close range melee kit that allows for feints and good engagements with his Rising Ram. His Bashdown ability can bring down enemies above him and slams down dealing great Melee and Spirit damage. His Blasted allows him to gain extra health for every heavy melee that is landed, and also passively reloads his weapon for both his heavy and light melee. His ultimate, Chain Gang, allows him to extend fights and bring enemies close to him. His weakness, much like Abrams, is the parry.",
        loreEntry : `<p style = "margin-bottom: 50px">
        Billy is a white hot ball of rage, furious at the very notion of...something. Maybe it’s the cops. Maybe it’s magic regulations. Maybe it’s the service at the gyro place downtown. (Not the good one. The other one.)
        </p>
        <p>Don't ask him how he got the goat head.</p>
        `,
        weaponInfo : `Billy’s SMG is called Biquette. It excels in close range but in early game it is difficult to farm with. The Biquette is in his right hand, while a spiked baseball bat is in his left, which he uses to melee his enemies.`,
        weaponStats : {
            damagePerSecond: 76.5,
            bulletDamage: 6.5,
            ammo: 30,
            bulletsPerSecond: 11.8,
            reloadTime: 2.9,
            bulletVelocity: 513,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `14 → 32` 
        },
        weaponImage: "images-&-videos/Billy/weapon",
        healthStats: {
            healthPoints: 730, 
            healthRegen: 3 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.7 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Bashdown",
                image : "images-&-videos/Billy/ability1"
            },
            ability2 :{
                name : "Rising Ram",
                image : "images-&-videos/Billy/ability2"
            },
            ability3 :{
                name : "Blasted",
                image : "images-&-videos/Billy/ability3"
            },
            ability4 :{
                name : "Chain Gang",
                image : "images-&-videos/Billy/ability4"
            }
        },
        showcase : "images-&-videos/Billy/showcase"
    },
    {
        name : "Calico", 
        description : "Calico is yet another close range burst damage character with good engaging abilities and an ultimate that can be used for both disengaging and engaging in a fight. Her Gloom Bombs allow her to deal great burst Spirit damage mid-fight, and her Leaping Slash will allow her to engage and deal a burst of damage as well. Her spectral cat form, Ava, allows her to disengage and become a difficult target to hit while low HP. Her ultimate, Return To Shadows, allows her to become untargetable and deals spirit damage. After the ultimate timer ends, she deals additional Spirit damage, allowing for a great burst of damage to re-engage. She also utilizes melee attacks, which also gives her the weaknesses of her close range brethren, getting parried. ",
        loreEntry : `<p style = "margin-bottom: 50px">
        Once a decorated member of The Baxter Society, Calico left the august order once she realized that killing monsters for free was less profitable than killing people for money. 
        </p>
        
        <p>Now an in demand contract killer, Calico is living her best life ending someone else’s</p>
        `,
        weaponInfo : `Calico’s shotgun, Sweetest Lie, is part of her mechanical right arm, which is a spreadshot shotgun with 10 shells.`,
        weaponStats : {
            damagePerSecond: 72.4,
            bulletDamage: 1.9,
            ammo: 10,
            bulletsPerSecond: 4.76,
            reloadTime: 2.5,
            bulletVelocity: 318,
            lightMeleeDamage: 63,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Calico/weapon",
        healthStats: {
            healthPoints: 650, 
            healthRegen: 2.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Gloom Bombs",
                image : "images-&-videos/Calico/ability1"
            },
            ability2 :{
                name : "Leaping Slash",
                image : "images-&-videos/Calico/ability2"
            },
            ability3 :{
                name : "Ava",
                image : "images-&-videos/Calico/ability3"
            },
            ability4 :{
                name : "Return To Shadows",
                image : "images-&-videos/Calico/ability4"
            }
        },
        showcase : "images-&-videos/Calico/showcase"
    },
    {
        name : "The Doorman", 
        description : "The Doorman is a Spirit-based damage dealer, with the opportunity to build into Weapon damage as well. His Call Bell is an amazing early-game poke ability, and with the proper items, can deal massive chunks of damage to enemies, making it easy to finish them off. His Doorway, a portal ability, allows versatility during a fight. It can be placed as an escape, or can give you an unexpected angle on the enemy, allowing you to throw Call Bells through the door to deal damage as well. His Luggage Cart can create space for himself, or can engage through its ability to stun the enemy if they hit the wall. His ultimate, Hotel Guest, can take an enemy out of the fight, forcing them to do parkour successfully within an alternate dimension, or take massive Spirit damage.",
        loreEntry : `<p style = "margin-bottom: 50px">
        He’s proper, he’s polite, but the humble Doorman of The Baroness Hotel is more than meets the eye.
        </p>
        
        <p>While he had only planned to experience life on this plane for a few weeks, The Doorman quickly discovered that the New York service industry was a great way to see the strange demands that please humans.</p>
        `,
        weaponInfo : `The Doorman’s pistol, Service With A Smile, shoots keyhole-shaped bullets, and is wielded in his right hand, while his left hand stays strictly behind his back, maintaining perfect posture. `,
        weaponStats : {
            damagePerSecond: 41.2,
            bulletDamage: 28,
            ammo: 8,
            bulletsPerSecond: 1.59,
            reloadTime: 2.4,
            bulletVelocity: 203,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Doorman/weapon",
        healthStats: {
            healthPoints: 675, 
            healthRegen: 2.0 ,
            moveSpeed: 8.0,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Call Bell",
                image : "images-&-videos/Doorman/ability1"
            },
            ability2 :{
                name : "Doorway",
                image : "images-&-videos/Doorman/ability2"
            },
            ability3 :{
                name : "Luggage Cart",
                image : "images-&-videos/Doorman/ability3"
            },
            ability4 :{
                name : "Hotel Guest",
                image : "images-&-videos/Doorman/ability4"
            }
        },
        showcase : "images-&-videos/Doorman/showcase"
    },
    {
        name : "Drifter", 
        description : "Drifter is an incredible assassin who gets stronger when eliminating enemies who are all alone. His Bloodscent, a passive ability, allows him to detect enemies that are alone, buffs his damage in the moment, and also gives him a permanent Weapon damage buff when eliminating an isolated enemy. His Rend deals both melee and spirit damage, allowing him to bypass their Spirit resistances by dealing heavy melee damage and vice versa. His Stalker’s Mark bleeds enemies through Spirit Damage, and allows Drifter to teleport to their backs to deal damage without them even knowing where he went. His ultimate, Eternal Night, restricts the vision of his enemies and makes their map useless for detecting enemies outside of their sight, making Drifter erratic and unpredictable.",
        loreEntry : `<p style = "margin-bottom: 50px">
        An ancient vampire roaming across America, the nameless monstrosity known as The Drifter has been preying on the living for generations. 
        </p>
        
        <p>Unlike most vampires Drifter doesn’t value finery or titles and has naked contempt for vampiric laws and tradition. This refusal to toe the line has made him a marked man all over the North American Baronies; but while the Viscounts and Elders cry for his execution, Drifter continues to do what he pleases… </p>
        `,
        weaponInfo : `Drifter’s nails, the Crimson Grasp, are nails that he ejects in a shotgun-like spreadshot fashion straight from the both of his hands, alternating as the bloody nails rip through the skin of his prey.`,
        weaponStats : {
            damagePerSecond: 47.4,
            bulletDamage: 20.9,
            ammo: 12,
            bulletsPerSecond: 2.27,
            reloadTime: 2.44,
            bulletVelocity: 508,
            lightMeleeDamage: 51.5,
            heavyMeleeDamage: 120,
            weaponFalloffRange: `24 → 27` 
        },
        weaponImage: "images-&-videos/Drifter/weapon",
        healthStats: {
            healthPoints: 750, 
            healthRegen: 2.5 ,
            moveSpeed: 7.0,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Call Bell",
                image : "images-&-videos/Drifter/ability1"
            },
            ability2 :{
                name : "Doorway",
                image : "images-&-videos/Drifter/ability2"
            },
            ability3 :{
                name : "Luggage Cart",
                image : "images-&-videos/Drifter/ability3"
            },
            ability4 :{
                name : "Hotel Guest",
                image : "images-&-videos/Drifter/ability4"
            }
        },
        showcase : "images-&-videos/Drifter/showcase"
    },
    {
        name : "Dynamo", 
        description : "Dynamo is a support-style character with the potential to swing team fights on his own.  His Kinetic Pulse can deal huge damage and knockup, as well as debuff enemies both offensively and defenses. Kinetic Pulse can have multiple charges, and the charge count can be buffed with items. His Quantum Entanglement allows for him and his teammates to escape fights by making them temporarily invulnerable while moving them to a new position. His Rejuvenating Aurora heals himself and his teammates who are within the radius, allowing him to leave fights for a short time just to come back at significantly higher HP with his teammates healed as well. His ultimate, Singularity, allows him to make enemies completely unable to fight back, dealing Spirit damage and allowing his teammates free reign on the helpless souls stuck in his Singularity.",
        loreEntry : `<p style = "margin-bottom: 50px">
       As a Scientist, Professor Dynamo always had an inquisitive mind. So when a rift in space and time opened up in central park he was first on the scene to investigate – and while he expected such a majestic sight to be life changing, he was thinking more in a metaphorical way as opposed to having his body atomized and reduced to a tiny dying star.
        </p>
        
        <p>But while his body is gone, his spirit and lust for knowledge lives on. A tenured professor at Columbia College, Dynamo looks to learn more about his condition while maintaining his class load, after all: he has future minds to inspire.</p>
        `,
        weaponInfo : `Dynamo’s pistol, The Vonnegun, is a gun that shoots blasts of cosmic energy. He wields The Vonnegun in his right hand.`,
        weaponStats : {
            damagePerSecond: 44.6,
            bulletDamage: 11.7,
            ammo: 18,
            bulletsPerSecond: 3.81,
            reloadTime: 2.35,
            bulletVelocity: 320,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Dynamo/weapon",
        healthStats: {
            healthPoints: 800, 
            healthRegen: 2.0 ,
            moveSpeed: 6.8,
            sprintSpeed: 2.0, 
            dashSpeed: 0.7 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Kinetic Pulse",
                image : "images-&-videos/Dynamo/ability1"
            },
            ability2 :{
                name : "Quantum Entanglement",
                image : "images-&-videos/Dynamo/ability2"
            },
            ability3 :{
                name : "Rejuvenating Aurora",
                image : "images-&-videos/Dynamo/ability3"
            },
            ability4 :{
                name : "Singularity",
                image : "images-&-videos/Dynamo/ability4"
            }
        },
        showcase : "images-&-videos/Dynamo/showcase"
    },
    {
        name : "Grey Talon", 
        description : "Grey Talon is a long-range combatant that can snipe his enemies using Charged Shot, dealing a burst of spirit damage while also unleashing a Rain of Arrows from the sky, shooting multiple arrows with a horizontal spread. In combination with his powerful bow, Grey Talon can also throw traps called Spirit Snare that apply a Curse and Movement Slow which can be detonated early when shot at with Charged Shot. And just when you think you’re out of Grey Talon’s reach, his ultimate, Guided Owl, launches a spirit owl that he controls and explodes on impact.",
        loreEntry : `<p style = "margin-bottom: 50px">
       A founding member of "The Baxter Society", Wesley Grey Talon spent close to 40 years hunting monsters that preyed on man before finally deciding to find a replacement and lay down his bow. Grey Talon's duties had meant that he never spent much time with his wife and kid, and now that his son had started a family of his own he realized that this was his last chance to reconnect with the people he loved.
        </p>

        <p style = "margin-bottom: 50px">
       Retirement suited Wesley. He made up for lost time with his wife. He doted on his grandkids. He cooked dinner for the whole family every Wednesday. He was happy.
        </p>

        <p style = "margin-bottom: 50px">
        Then he got the call.
        </p>

        <p style = "margin-bottom: 50px">
        The authorities claimed that it was a freak accident... that the fire consumed his son's house before anyone got a chance to escape. But Wesley knew better. His son's wife was an Ixian who could snuff out flame with a thought. If their bodies were found burned they had to be dead long before there was a fire.
        </p>
        
        <p>And so Grey Talon has picked up his bow once more, and when he finds who's responsible there will be a bloody reckoning.</p>
        `,
        weaponInfo : `The Mourning Comes is a heavy hitting bow that shoots arrows at a medium range, dealing a moderately high amount of damage despite its low damage-per-second.`,
        weaponStats : {
            damagePerSecond: 39.0,
            bulletDamage: 22.5,
            ammo: 17,
            bulletsPerSecond: 1.73,
            reloadTime: 2.35,
            bulletVelocity: 495,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `18 → 54` 
        },
        weaponImage: "images-&-videos/Grey-Talon/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 1.5 ,
            moveSpeed: 6.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 4
        },
        abilities: {
            ability1 :{
                name : "Charged Shot",
                image : "images-&-videos/Grey-Talon/ability1"
            },
            ability2 :{
                name : "Rain of Arrows",
                image : "images-&-videos/Grey-Talon/ability2"
            },
            ability3 :{
                name : "Spirit Snare",
                image : "images-&-videos/Grey-Talon/ability3"
            },
            ability4 :{
                name : "Guided Owl",
                image : "images-&-videos/Grey-Talon/ability4"
            }
        },
        showcase : "images-&-videos/Grey-Talon/showcase"
    },
    {
        name : "Haze", 
        description : "A secret agent working in the Sandman Division of OSIC, Haze is a devastating assassin that eliminates anyone who is caught alone. She can throw a Sleep Dagger that causes them to move slowly while unable to do anything, leaving them vulnerable to attacks, and her Smoke Bomb makes her invisible while increasing her speed, allowing her to sneak up on enemies. Her Fixation passive allows her Weapon damage to ramp up, allowing her to reach new heights with her damage as her fire rate increases. And when you think you have her surrounded, Haze’s ultimate, Bullet Dance, fills a radius around her with bullets while she moves, allowing her to deal bullet damage to a large area and to multiple targets in combination with her Fixation passive.",
        loreEntry : `<p style = "margin-bottom: 50px">
       The Occult Security and Investigation Commission is a black box government organization that makes the CIA look transparent. It falls on the men, women, and entities of the OSIC to keep the country safe from sinister forces that are beyond the capabilities of local law enforcement.
        </p>

        <p>
        As a member of the notorious Sandman Division, Haze is routinely tasked with infiltrating the dreams of persons of interest, to assess their threat level, and if needed… to put them to sleep. 
        </p>
        
        `,
        weaponInfo : `Haze’s twin SMG’s, Censure & Penance, are high-fire rate weapons that she uses to fill enemies with bullets quickly to assassinate her targets.`,
        weaponStats : {
            damagePerSecond: 48.0,
            bulletDamage: 5.04,
            ammo: 25,
            bulletsPerSecond: 9.52,
            reloadTime: 2.35,
            bulletVelocity: 762,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 46` 
        },
        weaponImage: "images-&-videos/Haze/weapon",
        healthStats: {
            healthPoints: 650, 
            healthRegen: 2.0 ,
            moveSpeed: 8.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Sleep Dagger",
                image : "images-&-videos/Haze/ability1"
            },
            ability2 :{
                name : "Smoke Bomb",
                image : "images-&-videos/Haze/ability2"
            },
            ability3 :{
                name : "Fixation",
                image : "images-&-videos/Haze/ability3"
            },
            ability4 :{
                name : "Bullet Dance",
                image : "images-&-videos/Haze/ability4"
            }
        },
        showcase : "images-&-videos/Haze/showcase"
    },
    {
        name : "Holliday", 
        description : "A secret agent working in the Sandman Division of OSIC, Haze is a devastating assassin that eliminates anyone who is caught alone. She can throw a Sleep Dagger that causes them to move slowly while unable to do anything, leaving them vulnerable to attacks, and her Smoke Bomb makes her invisible while increasing her speed, allowing her to sneak up on enemies. Her Fixation passive allows her Weapon damage to ramp up, allowing her to reach new heights with her damage as her fire rate increases. And when you think you have her surrounded, Haze’s ultimate, Bullet Dance, fills a radius around her with bullets while she moves, allowing her to deal bullet damage to a large area and to multiple targets in combination with her Fixation passive.",
        loreEntry : `<p style = "margin-bottom: 50px">
        There are people who spent their whole lives dreaming about moving to New York. Holliday isn't one of those people. Content with being a Sheriff in a small town, Holliday enjoyed a career where the only time she had to use her gun was when trick shooting at the county fair...then the murders started. 
        <p>

        <p style = "margin-bottom: 50px">
        Grisly and inhumane; the bodies were found with their ribcages ripped open... their innards picked apart as if by birds. Holliday tracked down the killer, a travelling folk musician that the media dubbed "The Troubadour", but when she confronted him he exploded into a murder of crows and flew away.
        </p>

        <p>
        That was 6 months ago, and while the murders in central Illinois have stopped, Holliday's investigation has not. She believes that The Troubadour is travelling to New York, and when she finds him she's going to kill that evil son of a bitch.
        </p>
        `,
        weaponInfo : `Holliday’s sheriff pistol, Doc’s Orders, is a one handed pistol she holds in her right hand. The echoes of the Wild West ring through every shot of her Doc’s Orders.`,
        weaponStats : {
            damagePerSecond: 55.0,
            bulletDamage: 26.0,
            ammo: 10,
            bulletsPerSecond: 2.12,
            reloadTime: 2.75,
            bulletVelocity: 635,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Holliday/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 8.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 2
        },
        abilities: {
            ability1 :{
                name : "Powder Keg",
                image : "images-&-videos/Holliday/ability1"
            },
            ability2 :{
                name : "Bounce Pad",
                image : "images-&-videos/Holliday/ability2"
            },
            ability3 :{
                name : "Crack Shot",
                image : "images-&-videos/Holliday/ability3"
            },
            ability4 :{
                name : "Spirit Lasso",
                image : "images-&-videos/Holliday/ability4"
            }
        },
        showcase : "images-&-videos/Holliday/showcase"
    },
    {
        name : "Infernus", 
        description : "Infernus is a fire-bending bartender who burns his enemies to death, often not letting them escape with his ability to enhance his sprinting with his control of flame. His Flame Dash allows him to move swiftly and without the compromise of control, leaving behind a fiery path that deals Spirit damage to enemies that follow him. His Napalm allows him to set fire to his enemies easier by slowing them, allowing him to use his passive ability, Afterburn, which burns the enemy and deals ticks of fire damage. His ultimate, Concussive Combustion, stuns enemies as he releases a burst of flame energy around him, dealing Spirit damage to enemies within the ultimate radius.",
        loreEntry : `
        <p>
        Like most teenagers; Infernus was wild, rebellious, and impetuous. Unlike most teenagers, Infernus was a creature from another plane and had a supernatural mastery over fire. Needless to say: his youth was filled with no small amount of arson, murder, and evidence disposal. But that was then. Now an adult, Infernus has mellowed out considerably. He’s happy working at a bar with good live music, and talking to interesting people. That being said when someone at the bar gets belligerent or violent, he’s not afraid to dust off the skills he once honed.
        </p>
        `,
        weaponInfo : `Infernus’ finger gun, Incendiary Remarks, fires bullets of fire straight out of a finger gun that he makes. It is shot from his right hand, which is covered in what appears to be runic marks channeling his fire ability.`,
        weaponStats : {
            damagePerSecond: 56.6,
            bulletDamage: 5.94,
            ammo: 27,
            bulletsPerSecond: 9.52,
            reloadTime: 2.49,
            bulletVelocity: 660,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Infernus/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 8.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.7 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Napalm",
                image : "images-&-videos/Infernus/ability1"
            },
            ability2 :{
                name : "Flame Dash",
                image : "images-&-videos/Infernus/ability2"
            },
            ability3 :{
                name : "Afterburn",
                image : "images-&-videos/Infernus/ability3"
            },
            ability4 :{
                name : "Concussive Combustion",
                image : "images-&-videos/Infernus/ability4"
            }
        },
        showcase : "images-&-videos/Infernus/showcase"
    },
    {
        name : "Ivy", 
        description : "A gargoyle-turned-vigilante, Ivy is a support that assists her allies in combat through clever use of her abilities. Her Kudzu Bomb spawns a patch of vines that damages and slows any enemy in its radius. When any ally near Ivy can be connected to her, sharing a quarter of their healing and bonuses to their bullet lifesteal and fire rate with Watcher’s Covenant. Additionally, Ivy can punish any enemy that gets too close to her by turning into a massive stone gargoyle that stuns and heals a percentage of her max health when she hits any enemies beneath her using Stone Form. For Ivy’s ultimate, she can grab an ally and take flight with the option to drop them to cause an explosion that knocks up enemies and slows them.",
        loreEntry : `
        <p style="margin-bottom = 50px">
            The gargoyle didn't know what was happening when it sprang to life... just that a big human and a small human were being hurt. And so the gargoyle leapt to action, sending the attackers fleeing in horror. The small human said thank you and asked the gargoyle's name. The gargoyle didn't have one. And so the small human said, "I'm going to call you Ivy." The gargoyle, being covered in ivy at the time, thought it was a bit obvious, but decided to go along with it for the small human's sake.
        </p>

        <p style="margin-bottom = 50px">
            The humans asked if Ivy would come home with them so they could show their appreciation, and so Ivy walked with them. That night she learned much. The family were called The Arroyo's. The little one, Sophia. Mofongo is what they called a plate of deliciousness. But most importantly, she learned that the people attacking them were called "The Mendoza Syndicate", and they were hurting people...nice people like The Arroyo's.
        </p>

        <p>
            18 years have passed since the day the Arroyo's took Ivy home... and during that time she made it her mission to dismantle the Mendoza Syndicate and free Spanish Harlem from its grasp. However the thing about dedicating your life to a single pursuit for nearly 2 decades is that you don't really know what to do once you achieve it. For the first time in her life, Ivy is prepared to venture outside of Spanish Harlem and see what the world has to offer beyond vigilante justice.
        </p>
        `,
        weaponInfo : `Protector’s Hand is a medium ranged gun resembling the design of a Sten gun with magazines on both sides of the weapon, and has a high firerate.`,
        weaponStats : {
            damagePerSecond: 59.9,
            bulletDamage: 4.40,
            ammo: 33,
            bulletsPerSecond: 13.6,
            reloadTime: 2.44,
            bulletVelocity: 572,
            lightMeleeDamage: 43,
            heavyMeleeDamage: 99,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Ivy/weapon",
        healthStats: {
            healthPoints: 675, 
            healthRegen: 2.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 4
        },
        abilities: {
            ability1 :{
                name : "Kudzu Bomb",
                image : "images-&-videos/Ivy/ability1"
            },
            ability2 :{
                name : "Watcher's Covenant",
                image : "images-&-videos/Ivy/ability2"
            },
            ability3 :{
                name : "Stone Form",
                image : "images-&-videos/Ivy/ability3"
            },
            ability4 :{
                name : "Air Drop",
                image : "images-&-videos/Ivy/ability4"
            }
        },
        showcase : "images-&-videos/Ivy/showcase"
    },
    {
        name : "Kelvin", 
        description : "Kelvin, an undead arctic scientist, has a plethora of ice-based abilities that slows down opponents and can heal his teammates. His Frost Grenade has the capability to deal a chunk of Spirit Damage, but also can be used to heal teammates. If used offensively, his Frost Grenade explodes, creating a cloud of subzero air, slowing enemies. His floating Ice Path allows him maneuverability around the map, allowing him to manage waves and jungle denizens very efficiently, and can reach locations where he is needed quickly. His Arctic Beam shoots a beam of freezing energy that deals Spirit damage and gradually reduces the enemies movement and fire rates, but this sacrifices Kelvin’s movement speed. Kelvin’s Frozen Shelter creates a dome of ice that can not be entered or left until the duration of the ultimate has ended, and rapidly regenerates the health of Kelvin and his allies.",
        loreEntry : `
        <p style="margin-bottom = 50px">
            A famed adventuring scientist, Kelvin made it his life's mission to explore and understand the unknowable. So naturally when rumors surfaced regarding an 8th astral gate hidden in the arctic, Kelvin couldn't build an expedition team fast enough. Assembling the brightest minds of his generation, Kelvin and his team set forth with much fanfare.
        </p>

        <p style="margin-bottom = 50px">
            They never returned.
        </p>

        <p style="margin-bottom = 50px">
            A year and a half later the frozen body of Kelvin was found by a fishing trawler, his corpse clutching a rock etched with glowing runes. The crew chipped away at the ice, looking to get a closer look at the body and were shocked when Kelvin opened his eyes. They checked his vitals... there was no pulse. They sought to bandage his open wounds... there was no blood. And yet, impossibly, Kelvin was "alive".
        </p>

        <p>
            Having no memory of what happened on the expedition, Kelvin is looking for answers.
        </p>
            `,
        weaponInfo : `Kelvin’s frost gun, Expedition’s End, shoots blasts of ice at his enemies, an homage to his life’s work in the Arctic, and to his untimely end. He wields Expedition’s End in his right hand.`,
        weaponStats : {
            damagePerSecond: 7,
            bulletDamage: 4.40,
            ammo: 33,
            bulletsPerSecond: 13.6,
            reloadTime: 2.44,
            bulletVelocity: 572,
            lightMeleeDamage: 43,
            heavyMeleeDamage: 99,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Kelvin/weapon",
        healthStats: {
            healthPoints: 800, 
            healthRegen: 2.0 ,
            moveSpeed: 6.8,
            sprintSpeed: 1.5, 
            dashSpeed: 0.70 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Frost Grenade",
                image : "images-&-videos/Kelvin/ability1"
            },
            ability2 :{
                name : "Ice Path",
                image : "images-&-videos/Kelvin/ability2"
            },
            ability3 :{
                name : "Arctic Beam",
                image : "images-&-videos/Kelvin/ability3"
            },
            ability4 :{
                name : "Frozen Beam",
                image : "images-&-videos/Kelvin/ability4"
            }
        },
        showcase : "images-&-videos/Kelvin/showcase"
    },
    {
        name : "Kelvin", 
        description : "Kelvin, an undead arctic scientist, has a plethora of ice-based abilities that slows down opponents and can heal his teammates. His Frost Grenade has the capability to deal a chunk of Spirit Damage, but also can be used to heal teammates. If used offensively, his Frost Grenade explodes, creating a cloud of subzero air, slowing enemies. His floating Ice Path allows him maneuverability around the map, allowing him to manage waves and jungle denizens very efficiently, and can reach locations where he is needed quickly. His Arctic Beam shoots a beam of freezing energy that deals Spirit damage and gradually reduces the enemies movement and fire rates, but this sacrifices Kelvin’s movement speed. Kelvin’s Frozen Shelter creates a dome of ice that can not be entered or left until the duration of the ultimate has ended, and rapidly regenerates the health of Kelvin and his allies.",
        loreEntry : `
        <p style="margin-bottom = 50px">
            A famed adventuring scientist, Kelvin made it his life's mission to explore and understand the unknowable. So naturally when rumors surfaced regarding an 8th astral gate hidden in the arctic, Kelvin couldn't build an expedition team fast enough. Assembling the brightest minds of his generation, Kelvin and his team set forth with much fanfare.
        </p>

        <p style="margin-bottom = 50px">
            They never returned.
        </p>

        <p style="margin-bottom = 50px">
            A year and a half later the frozen body of Kelvin was found by a fishing trawler, his corpse clutching a rock etched with glowing runes. The crew chipped away at the ice, looking to get a closer look at the body and were shocked when Kelvin opened his eyes. They checked his vitals... there was no pulse. They sought to bandage his open wounds... there was no blood. And yet, impossibly, Kelvin was "alive".
        </p>

        <p>
            Having no memory of what happened on the expedition, Kelvin is looking for answers.
        </p>
            `,
        weaponInfo : `Kelvin’s frost gun, Expedition’s End, shoots blasts of ice at his enemies, an homage to his life’s work in the Arctic, and to his untimely end. He wields Expedition’s End in his right hand.`,
        weaponStats : {
            damagePerSecond: 70.0,
            bulletDamage: 4.40,
            ammo: 33,
            bulletsPerSecond: 13.6,
            reloadTime: 2.44,
            bulletVelocity: 572,
            lightMeleeDamage: 43,
            heavyMeleeDamage: 99,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Kelvin/weapon",
        healthStats: {
            healthPoints: 800, 
            healthRegen: 2.0 ,
            moveSpeed: 6.8,
            sprintSpeed: 1.5, 
            dashSpeed: 0.70 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Frost Grenade",
                image : "images-&-videos/Kelvin/ability1"
            },
            ability2 :{
                name : "Ice Path",
                image : "images-&-videos/Kelvin/ability2"
            },
            ability3 :{
                name : "Arctic Beam",
                image : "images-&-videos/Kelvin/ability3"
            },
            ability4 :{
                name : "Frozen Beam",
                image : "images-&-videos/Kelvin/ability4"
            }
        },
        showcase : "images-&-videos/Kelvin/showcase"
    },
    {
        name : "Lady Geist", 
        description : "An old-time socialite who maintains her appearance through taking the life force of others, and her kit as a character reflects that quality. She sacrifices a small portion of her health to deal Spirit damage to enemies through her Essence Bomb, which can be supplemented with items to deal immense damage. Her Life Drain allows her to tether to enemies, weaning off their life force, dealing Spirit damage and healing herself with it. Her Malice shoots a projectile that applies a stack of Malice at the cost of her health. Malice slows the enemy and increases the damage that Lady Geist deals to them. Her ultimate, Soul Exchange, allows you to switch HP values with an opponent, allowing her to take the life force of a healthy opponent and make them weak to turn the tables on them.",
        loreEntry : `
        <p style="margin-bottom = 50px">
            Once, Lady Jeanne Geist was the toast of the town. But as time passed and her beauty faded she found herself further and further from her glory days in High Society until finally she was nothing more than a frail woman in a nursing home, telling stories of a glorious past. And that’s when Oathkeeper revealed himself. A powerful spirit from another plane, Oathkeeper offered her a path to reclaim her past glories… he could restore her youth; all she had to do was drain the essence of the living to sustain herself.
        </p>

        <p style="margin-bottom = 50px">
            Geist was torn. Obviously murder was ghoulish business, and undoubtedly Oathkeeper was not an entity that could be trusted… but still, the thought of having a second chance of reliving her youth was too good to pass up. And so she concocted a plan: after making a pact with Oathkeeper she would bind and ward him, limiting his influence and pull over her. Oathkeeper would still get fed; but on her terms, not his.
        </p>

        <p>
            However, as years have turned to decades; the strength of the Ward has weakened, and Oathkeeper hungers more than he ever has in the past…
        </p>
            `,
        weaponInfo : `Lady Geist’s pistol resembles a six shooter, and is known as Johann’s Gift. She wields Johann’s Gift in her left hand while draining the lives of others with her right.`,
        weaponStats : {
            damagePerSecond: 44.4,
            bulletDamage: 21,
            ammo: 10,
            bulletsPerSecond: 2.12,
            reloadTime: 2.59,
            bulletVelocity: 828,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Lady-Geist/weapon",
        healthStats: {
            healthPoints: 800, 
            healthRegen: 1.0 ,
            moveSpeed: 6.3,
            sprintSpeed: 3.0, 
            dashSpeed: 0.68 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Essence Bomb",
                image : "images-&-videos/Lady-Geist/ability1"
            },
            ability2 :{
                name : "Life Drain",
                image : "images-&-videos/Lady-Geist/ability2"
            },
            ability3 :{
                name : "Malice",
                image : "images-&-videos/Lady-Geist/ability3"
            },
            ability4 :{
                name : "Soul Exchange",
                image : "images-&-videos/Lady-Geist/ability4"
            }
        },
        showcase : "images-&-videos/Lady-Geist/showcase"
    },
    {
        name : "Lash", 
        description : "An acrobatic brawler who specializes in using vertical height to deal damage, Lash is a character that relies on both map knowledge and movement to get the most out of his abilities. He can engage on enemies, using either an opponent or a teammate as a tether, with his Grapple, and slam down on enemies, dealing massive spirit damage using Ground Strike. He can also sustain himself by using his Flog, healing for a portion of the damage that it deals. His ultimate, Death Slam, can take large groups of enemies and slam them together, allowing both him and his team to deal a large burst of damage to a group of enemies. Lash’s main weakness is that he struggles against characters with high Spirit resistance, as well as good sustain, as long drawn out fights tend to go against his favour.",
        loreEntry : `
        <p>
            Jacob Lash is an asshole.
        </p>
            `,
        weaponInfo : `Lash’s glove, which also acts as his gun, is a burst fire weapon which he wields in his right hand. He uses his left elbow to slam into enemies from above with acrobatic lethality.`,
        weaponStats : {
            damagePerSecond: 47.2,
            bulletDamage: 8.1,
            ammo: 29,
            bulletsPerSecond: 3.81,
            reloadTime: 2.35,
            bulletVelocity: 635,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Lash/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.5, 
            dashSpeed: 0.68 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Ground Strike",
                image : "images-&-videos/Lash/ability1"
            },
            ability2 :{
                name : "Grapple",
                image : "images-&-videos/Lash/ability2"
            },
            ability3 :{
                name : "Flog",
                image : "images-&-videos/Lash/ability3"
            },
            ability4 :{
                name : "Death Slam",
                image : "images-&-videos/Lash/ability4"
            }
        },
        showcase : "images-&-videos/Lash/showcase"
    },
    {
        name : "McGinnis", 
        description : "The genius inventor and head of Fairfax Industries Military R&D department, McGinnis creates chaos on the battlefield with her structures that lock down any area she places them. If her machine gun wasn’t scary enough, McGinnis can also place down Mini Turrets that deal spirit damage over time and can be devastating if not taken care of. With her Medicinal Specter, she deploys a heal spirit that can increase the fire rate of any ally within its radius, and her Spectral Wall divides the terrain in half while also dealing damage and slowing any enemy nearby. When the situation gets rough, or if the enemies are trying to take cover, McGinnis can unleash a volley of rockets dishing out AOE damage with her ultimate, Heavy Barrage. She can’t aim her rockets too close to herself though, and if she isn’t building gun damage, then taking out her turrets will significantly reduce her damage.",
        loreEntry : `
        <p style="margin-bottom = 50px">
            Maggie McGinnis always had a knack for building things. At 4 she was using Lincoln Logs to recreate architectural marvels. At 10 she built and rewired a custom light fixture for her parent's anniversary. At 15 she designed a machine that refined the souls of the dead...that last one got a little more attention than the Lincoln Logs.
        </p>

        <p>
            Now the head of Fairfax Industries Military R&D department, McGinnis spends her time in the machine shop, not in a lab. She's not interested in theory, to her science is magic you can touch.
        </p>
            `,
        weaponInfo : `Services Rendered is a medium range machine gun that increases its fire rate the longer you continue firing.`,
        weaponStats : {
            damagePerSecond: 76.6,
            bulletDamage: 6.44,
            ammo: 66,
            bulletsPerSecond: 11.9,
            reloadTime: 3.29,
            bulletVelocity: 650,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/McGinnis/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 6.8,
            sprintSpeed: 2.0, 
            dashSpeed: 0.70 ,
            stamina: 2
        },
        abilities: {
            ability1 :{
                name : "Mini Turret",
                image : "images-&-videos/McGinnis/ability1"
            },
            ability2 :{
                name : "Medicinal Specter",
                image : "images-&-videos/McGinnis/ability2"
            },
            ability3 :{
                name : "Spectral Wall",
                image : "images-&-videos/McGinnis/ability3"
            },
            ability4 :{
                name : "Heavy Barrage",
                image : "images-&-videos/McGinnis/ability4"
            }
        },
        showcase : "images-&-videos/McGinnis/showcase"
    }
    
]