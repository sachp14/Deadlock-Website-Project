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
    }, 
    {
        name : "Mina", 
        description : "A vampire who, contrary to popular portrayals of vampires, is a quite frail, but deadly character that has the ability to deal bursts of Spirit damage that only gets stronger over time. Her passive ability, Love Bites, builds up on enemies as she lands bullets on them, and when triggered, deals huge Spirit damage. Her Rake ability is a sweeping motion strike that heals her when enemies are killed using it, allowing her to continue to fight multiple 1 on 1 battles if necessary. Her Sanguine Retreat can be considered one of the best evasive abilities in the game, giving her invulnerability during the channeling phase of the ability. Her ultimate, Nox Nostra, is a shower of bats which Silences enemies and allows her to trigger Love Bites on them in addition to the Spirit damage that the ultimate already deals. If her ultimate triggers Love Bites, the amount of bats released is permanently increased. Her weakness is that she heavily relies on Love Bites, so mobile characters that can evade bullets or builds with high Spirit resistance hinders her abilities.",
        loreEntry : `
        <p style="margin-bottom = 50px">
            Mina Ha had it all...rich parents, elite education, and an arranged marriage that would see her ascend from run-of-the-mill upper class to American royalty. She was happy.
        </p>

        <p style="margin-bottom = 50px">
            Then her betrothed was assassinated.
        </p>

        <p style="margin-bottom = 50px">
            Mina wept; not for the life of her fiancé, but for the future that was stolen from her. Why couldn’t the killer just wait until after the wedding? Then she’d have the last name she always dreamed of and no one would even have to pretend to love anyone. It could have been perfect, but life wasn’t fair...and so Mina did what she always does when things don’t go her way: she told her parents to fix it.
        </p>

        <p style="margin-bottom = 50px">
            Mr. And Mrs. Ha knew that the only way to appease their daughter was to offer her something greater than what she lost... and marrying into one of the world’s most lauded families was a tall order to top. They had to think big. They had to think outside of the box. They had to promise their daughter immortality.
        </p>

        <p>
            It took a small fortune, but eventually they found a vampire who was willing to turn her. Unsurprisingly, Mina thought the idea of eternal youth and a trust fund was an acceptable plan B and happily agreed to the proposal. Now a fledgling vampire, Mina is quickly discovering that the clout she held as a human has no weight in vampire high society...and while at first that annoyed her, if there is one thing Mina has a knack for, it's learning the rules so she can subvert them. She will be the Viscount of New York, the other vampires just don't know it yet.
        </p>
            `,
        weaponInfo : `Mina’s vampiric pistol, New Money, holds a blood vial and fires bullets of blood, fitting for a vampire. She wields New Money in her right hand, and holds an umbrella in the left for which she uses to float in Nox Nostra and when using Rake.`,
        weaponStats : {
            damagePerSecond: 27.8,
            bulletDamage: 7.00,
            ammo: 12,
            bulletsPerSecond: 3.97,
            reloadTime: 1.70,
            bulletVelocity: 762,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 46` 
        },
        weaponImage: "images-&-videos/Mina/weapon",
        healthStats: {
            healthPoints: 580, 
            healthRegen: 2.0 ,
            moveSpeed: 6.7,
            sprintSpeed: 2.0, 
            dashSpeed: 0.62 ,
            stamina: 2
        },
        abilities: {
            ability1 :{
                name : "Rake",
                image : "images-&-videos/Mina/ability1"
            },
            ability2 :{
                name : "Sanguine Retreat",
                image : "images-&-videos/Mina/ability2"
            },
            ability3 :{
                name : "Love Bites",
                image : "images-&-videos/Mina/ability3"
            },
            ability4 :{
                name : "Nox Nostra",
                image : "images-&-videos/Mina/ability4"
            }
        },
        showcase : "images-&-videos/Mina/showcase"
    },
    {
        name : "Mirage", 
        description : "Mirage is a damage dealer that excels in the mid-range, with the ability to stun opponents and capitalize on his high Weapon damage, as well as his Djinn’s Mark. His Fire Scarabs siphons the opponents max health and applies bullet resist reduction, further improving his potential as a Weapon damage dealer. His Tornado lifts up enemies and gives Mirage bullet evasion, allowing him to deal damage easily while making it harder for the opposite to happen. His Djinn’s Mark has a passive and active aspect. The passive aspect of the ability applies an increasing multiplier, and when the multiplier either reaches the max or expires, the target suffers Spirit damage. The active aspect will immediately deal the damage that is built up. Mirage’s ultimate, Traveler, can teleport him to a visible ally or enemy on the map, and after completing the teleport, Mirage is granted bonus move speed and fire rate until his next reload. His ultimate allows him to participate in fights when he isn’t even near, and can swing the fight in his team’s favour.",
        loreEntry : `
        <p style="margin-bottom = 50px">
            The Djinn are one of the more curious groups of people in the modern world. Possessing great power in controlled doses, Djinn are incapable of maintaining corporeal form for longer than 48 minutes without resting within a vessel. As a result, most Djinn employ human bodyguards for transport, protection, and companionship.
        </p>

        <p>
            Mirage is one such bodyguard. Employed by Djinn ambassador Nashala Dion, Mirage is in New York on a diplomatic mission. It's the hope of the Djinn that they can negotiate with the US government for a sale of part of Wyoming so that they can build a sovereign nation for their people.
        </p>
            `,
        weaponInfo : `Mirage’s pistol, Promises Kept, is wielded in his right hand, and is used to protect the Djinn’s vessel, which he holds in his left hand.`,
        weaponStats : {
            damagePerSecond: 39.7,
            bulletDamage: 14.6,
            ammo: 16,
            bulletsPerSecond: 2.72,
            reloadTime: 2.60,
            bulletVelocity: 828,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Mirage/weapon",
        healthStats: {
            healthPoints: 650, 
            healthRegen: 2.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68 ,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Fire Scarabs",
                image : "images-&-videos/Mirage/ability1"
            },
            ability2 :{
                name : "Tornado",
                image : "images-&-videos/Mirage/ability2"
            },
            ability3 :{
                name : "Djinn's Mark",
                image : "images-&-videos/Mirage/ability3"
            },
            ability4 :{
                name : "Traveler",
                image : "images-&-videos/Mirage/ability4"
            }
        },
        showcase : "images-&-videos/Mirage/showcase"
    },
    {
        name : "Mo & Krill", 
        description : "Don’t disrespect The Tunnel Rats, unless you want to be reminded what happens to those who do by Mo & Krill. Fighting together, this slippery duo causes chaos around the battlefield by burrowing around and disrupting the enemies. Their first ability, Scorn, deals damage in a radius around Mo & Krill that also heals themselves based on the damage done. Whenever they’re in a pinch they Burrow underground with increased movement speed and bonuses to their bullet and spirit resistance, allowing for great roaming potential when scouting out potential picks for their team. They can Burrow underneath enemies and jump out to deal spirit damage, a slow, and knock them up. Characters relying on their gun can be shut down whenever Mo & Krill use their third ability which disarms their enemies by throwing a Sand Blast at their face. But the real trouble comes with their ultimate, Combo, holding the target in place, stunning them and dealing damage, setting up their team for easy pickings to get further ahead or to shut down the enemy carry. If an enemy were to die during or within 3 seconds of the Combo ending, then Mo & Krill will receive a permanent increase of 50 health. Mo & Krill, like many other support characters, rely greatly on his team to also do well since his abilities are mostly there to set up kills for his team rather than to hard carry.",
        loreEntry : `
        <p>
            Mo and Krill are members of The Tunnel Rats, a group that help facilitate illicit trade and commerce between the boroughs thanks to a network of underground tunnels. But while most denizens of the New York underworld respect the work The Rats do, every once in a while a gang tries to exploit the tunnel system for personal vendettas...that's when Mo and Krill step in and remind the city what happens to those who disrespect their hospitality.
        </p>
            `,
        weaponInfo : `Mirage’s pistol, Promises Kept, is wielded in his right hand, and is used to protect the Djinn’s vessel, which he holds in his left hand.`,
        weaponStats : {
            damagePerSecond: 57.1,
            bulletDamage: 2.70,
            ammo: 20,
            bulletsPerSecond: 5.29,
            reloadTime: 2.82,
            bulletVelocity: 320,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Mo-&-Krill/weapon",
        healthStats: {
            healthPoints: 850, 
            healthRegen: 3.0 ,
            moveSpeed: 8.1,
            sprintSpeed: 2.0, 
            dashSpeed: 0.70,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Scorn",
                image : "images-&-videos/Mo-&-Krill/ability1"
            },
            ability2 :{
                name : "Burrow",
                image : "images-&-videos/Mo-&-Krill/ability2"
            },
            ability3 :{
                name : "Sand Blast",
                image : "images-&-videos/Mo-&-Krill/ability3"
            },
            ability4 :{
                name : "Combo",
                image : "images-&-videos/Mo-&-Krill/ability4"
            }
        },
        showcase : "images-&-videos/Mo-&-Krill/showcase"
    }, 
    {
        name : "Paige", 
        description : "Paige is a bookworm character that brings fantasies from her favourite novels to life. She can summon dragons through her ability, Conjure Dragons, which summons a dragon from a book she throws, and leaves a fire trail behind the dragon. Her Captivating Read immobilizes enemies, making them vulnerable to her and her teammates' attacks. Her defensive ability, Defend and Fight!, is a defensive ability that can give herself and her teammates a barrier that also increases the target’s weapon damage, both of which can be increased through Spirit scaling. Her ultimate, Rallying Charge, is a group of spectral knights on their steeds which can charge through the entire map, healing allies and dealing Spirit damage to enemies and stunning them. Overall, she is an incredible support character that can deal good Spirit damage, but does not particularly shine. Her weaknesses include 1 on 1 fights, as her projectile weapon has an incredibly low bullet velocity, such to the point where even securing minion orbs is a difficult task.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            The daughter of a rare book dealer, Paige grew up in a loving home that prioritized kindness, magic, and storytelling. But while Paige took naturally to her parents' values, her little brother Bryce did not.
        </p>

        <p style = "margin-bottom: 50px">
            A rebellious teen, Bryce resented not only his family’s saccharine attitude, but also their refusal to let him dabble in magics that they deemed too dangerous. Paige tried everything she could think of to keep him out of trouble, but like most teenagers, the more his big sister tried to tell him what was best for him, the more he turned away.
        </p>
        
        <p style = "margin-bottom: 50px">
            Paige doesn't know what Bryce did to get kicked out of the house...just that she came home from the library to find her brother gone and her parents crying.
        </p>

        <p>
        Days turned to weeks, to months, to years. Paige grew to become a talented bibliomancer, making a living as a storyteller reading at libraries across the five boroughs; and while her parents have remained silent about what happened with Bryce, Paige's obsession with finding him has only grown. She will discover what happened to her brother... and no man or god is going to stand in her way.
        </p>
            `,
        weaponInfo : `Her book, Chapter’s End, is a projectile weapon that she holds with both of her hands, and is the source from which she makes spectral creations come true.`,
        weaponStats : {
            damagePerSecond: 58.3,
            bulletDamage: 35.0,
            ammo: 14,
            bulletsPerSecond: 2.00,
            reloadTime: 2.50,
            bulletVelocity: 37.7,
            lightMeleeDamage: 42,
            heavyMeleeDamage: 120,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Paige/weapon",
        healthStats: {
            healthPoints: 600, 
            healthRegen: 2.0 ,
            moveSpeed: 7.0,
            sprintSpeed: 4.0, 
            dashSpeed: 0.68,
            stamina: 2
        },
        abilities: {
            ability1 :{
                name : "Conjure Dragon",
                image : "images-&-videos/Paige/ability1"
            },
            ability2 :{
                name : "Defend and Fight!",
                image : "images-&-videos/Paige/ability2"
            },
            ability3 :{
                name : "Captivating Read",
                image : "images-&-videos/Paige/ability3"
            },
            ability4 :{
                name : "Rallying Charge",
                image : "images-&-videos/Paige/ability4"
            }
        },
        showcase : "images-&-videos/Paige/showcase"
    },
    {
        name : "Paige", 
        description : "Paige is a bookworm character that brings fantasies from her favourite novels to life. She can summon dragons through her ability, Conjure Dragons, which summons a dragon from a book she throws, and leaves a fire trail behind the dragon. Her Captivating Read immobilizes enemies, making them vulnerable to her and her teammates' attacks. Her defensive ability, Defend and Fight!, is a defensive ability that can give herself and her teammates a barrier that also increases the target’s weapon damage, both of which can be increased through Spirit scaling. Her ultimate, Rallying Charge, is a group of spectral knights on their steeds which can charge through the entire map, healing allies and dealing Spirit damage to enemies and stunning them. Overall, she is an incredible support character that can deal good Spirit damage, but does not particularly shine. Her weaknesses include 1 on 1 fights, as her projectile weapon has an incredibly low bullet velocity, such to the point where even securing minion orbs is a difficult task.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            The daughter of a rare book dealer, Paige grew up in a loving home that prioritized kindness, magic, and storytelling. But while Paige took naturally to her parents' values, her little brother Bryce did not.
        </p>

        <p style = "margin-bottom: 50px">
            A rebellious teen, Bryce resented not only his family’s saccharine attitude, but also their refusal to let him dabble in magics that they deemed too dangerous. Paige tried everything she could think of to keep him out of trouble, but like most teenagers, the more his big sister tried to tell him what was best for him, the more he turned away.
        </p>
        
        <p style = "margin-bottom: 50px">
            Paige doesn't know what Bryce did to get kicked out of the house...just that she came home from the library to find her brother gone and her parents crying.
        </p>

        <p>
        Days turned to weeks, to months, to years. Paige grew to become a talented bibliomancer, making a living as a storyteller reading at libraries across the five boroughs; and while her parents have remained silent about what happened with Bryce, Paige's obsession with finding him has only grown. She will discover what happened to her brother... and no man or god is going to stand in her way.
        </p>
            `,
        weaponInfo : `Her book, Chapter’s End, is a projectile weapon that she holds with both of her hands, and is the source from which she makes spectral creations come true.`,
        weaponStats : {
            damagePerSecond: 58.3,
            bulletDamage: 35.0,
            ammo: 14,
            bulletsPerSecond: 2.00,
            reloadTime: 2.50,
            bulletVelocity: 37.7,
            lightMeleeDamage: 42,
            heavyMeleeDamage: 120,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Paige/weapon",
        healthStats: {
            healthPoints: 600, 
            healthRegen: 2.0 ,
            moveSpeed: 7.0,
            sprintSpeed: 4.0, 
            dashSpeed: 0.68,
            stamina: 2
        },
        abilities: {
            ability1 :{
                name : "Conjure Dragon",
                image : "images-&-videos/Paige/ability1"
            },
            ability2 :{
                name : "Defend and Fight!",
                image : "images-&-videos/Paige/ability2"
            },
            ability3 :{
                name : "Captivating Read",
                image : "images-&-videos/Paige/ability3"
            },
            ability4 :{
                name : "Rallying Charge",
                image : "images-&-videos/Paige/ability4"
            }
        },
        showcase : "images-&-videos/Paige/showcase"
    },
    {
        name : "Paradox", 
        description : "Be wary of Paradox who wields time manipulating abilities that slow and disrupts the momentum of her enemies. She can throw a Pulse Grenade that applies damage, movement slow, and stacking damage amplification for every pulse that hits her enemy. Whenever Paradox needs cover, she can place a Time Wall that slows down time for any bullet or enemy that walks through it, with the wall later being able to deal max health damage and silence to those who touch it.  With a fully charged and well timed shot with Kinetic Carbine, Paradox is able to deal a significant amount of burst spirit damage and apply a brief time-stop to whoever is hit by the carbine. Lastly, Paradox’s ultimate, Paradoxical Swap fires a projectile that swaps her position with the target that is hit while dealing spirit damage over time to them. In combination with the rest of her abilities, Paradox proves herself to be a tricky opponent while thriving off of the disorder she causes.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            An artifact of time, and the name of a notorious thieves' guild... one that prides themselves on constructing elaborate heists that target the most untouchable of individuals and institutions. What does Paradox do with the countless artifacts, state secrets, and celebrity paternity tests that they have stolen? Put it on display at pop-up museums, so that they can show the world that no one is out of Paradox’s reach.
        </p>

        <p>
            Shrouded in mystery, each member of Paradox dons a mask and takes on the organization's name. They are everywhere. They are nowhere. And if they want something, they are inevitable.
        </p>
            `,
        weaponInfo : `Trade Secret is a burst fire gun with a caliper-like design where the handles are pressed together to fire the weapon, which deals damage at a medium range.`,
        weaponStats : {
            damagePerSecond: 49.0,
            bulletDamage: 6.48,
            ammo: 40,
            bulletsPerSecond: 3.40,
            reloadTime: 2.59,
            bulletVelocity: 525,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Paradox/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 6.8,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Pulse Grenade",
                image : "images-&-videos/Paradox/ability1"
            },
            ability2 :{
                name : "Time Wall",
                image : "images-&-videos/Paradox/ability2"
            },
            ability3 :{
                name : "Kinetic Carbine",
                image : "images-&-videos/Paradox/ability3"
            },
            ability4 :{
                name : "Paradoxical Swap",
                image : "images-&-videos/Paradox/ability4"
            }
        },
        showcase : "images-&-videos/Paradox/showcase"
    },
    {
        name : "Pocket", 
        description : "Pocket is a character with a highly mobile set of abilities which allows him to excel in using his shotgun in close range. His briefcase fires out projectiles which deal Spirit damage and applies movement slow in their area of effect. On connection, Pocket gains a short increase in all damage that he deals, which benefits him when engaging in fights. His Enchanter’s Satchel can both be used to deal damage and get him out of sticky situations. When he channels into his briefcase, he is invulnerable, and when he pops out of the briefcase, he deals Spirit damage in an explosion. The small explosion radius further compounds his case as a close range character. His Flying Cloak goes through enemies and deals damage to any that the cloak touches, and Pocket can choose to teleport to the cloak at any point in time, as long as the cloak is on the map. His ultimate, Affliction, deals Spirit damage to enemies in a burst and deals Spirit damage over time afterwards. The damage that Affliction deals will never result in an elimination on its own, but easily sets up for even a little damage to end the life of any opponent afflicted by his ultimate. His weakness is mostly characters that are able to shrug off his Spirit damage through resistances, as all of his abilities deal Spirit damage.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            Arin Fairfax, the eldest heir to Fairfax Industries, has been living in hiding for the past 5 years after being shot and left for dead on their 18th birthday. Arin doesn't know who is trying to keep them from taking control of their parent's company... but in the avarice fueled viper's nest that is Fairfax Industries it could be anyone.
        </p>

        <p>
            Taking on the name "Pocket", Arin desperately wants to keep their true identity a secret… not only for their own protection; but because they want to forge their own identity separate from their parents.
        </p>
            `,
        weaponInfo : `Pocket’s shotgun, The Black Sheep, refers to his estranged existence for the past five years, which is wielded in his right hand, while he holds his trusty briefcase in the left.`,
        weaponStats : {
            damagePerSecond: 54.7,
            bulletDamage: 4.10,
            ammo: 11,
            bulletsPerSecond: 1.90,
            reloadTime: 2.82,
            bulletVelocity: 559,
            lightMeleeDamage: 60,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `16 → 46` 
        },
        weaponImage: "images-&-videos/Pocket/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Barrage",
                image : "images-&-videos/Pocket/ability1"
            },
            ability2 :{
                name : "Flying Cloak",
                image : "images-&-videos/Pocket/ability2"
            },
            ability3 :{
                name : "Enchanter's Satchel",
                image : "images-&-videos/Pocket/ability3"
            },
            ability4 :{
                name : "Affliction",
                image : "images-&-videos/Pocket/ability4"
            }
        },
        showcase : "images-&-videos/Pocket/showcase"
    },
    {
        name : "Seven", 
        description : "The man with no limitations, Seven unleashes havoc on the battlefield through his mystical mastery over electrical currents. Seven can cast Lightning Balls for his first ability that travels in a straight line while dealing spirit damage to any enemies within its radius. He can also stun enemies with his second ability, Static Charge, that he places on an enemy, with anybody else nearby also getting stunned if they are in its radius. However, Seven’s greatest source of damage is through Power Surge, which makes his bullets proc shock damage that can chain to other targets nearby. Last but not least, Seven’s ultimate, Storm Cloud, covers an entire area with his electrifying powers and deals spirit damage to any enemy within his line of sight. While channeling his ult, he can also strike a targeted area once with a powerful bolt of lightning that knocks back enemies.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            When mystic energy awoke on Earth, the world changed... anything was possible. But just because anything WAS possible, didn’t mean that anything SHOULD be possible. And so the government made rules. Laws. A means for US citizens to enjoy the benefits of the supernatural world in safety. But rules and laws are for lesser men. Men with limitations. Men who were not Seven. 
        </p>

        <p style = "margin-bottom: 50px">
            There are many rumors about what Seven did to land himself in Lost Whisper, an oubliette for the most dangerous of occultists. But there is no doubt about what happened on the night of his execution. 
        </p>

        <p style = "margin-bottom: 50px">
            Onlookers viewed in horror as the strongest mentalist employed by the US Army’s head popped like a grape. They screamed as Scotland Yard’s premiere occult investigator, the one who allegedly captured Seven, crumbled to ash. Seven's body buckled and writhed against his restraints; his skin burning from eldritch electricity... and yet he would not die. He laughed.
        </p>

        <p style = "margin-bottom: 50px">
            He laughed as he tore himself free from his bondage.
        </p>

        <p style = "margin-bottom: 50px">
            He laughed as his captors cowered in fear.
        </p>

        <p style = "margin-bottom: 50px">
            He laughed as he massacred his tormentors.
        </p>

        <p style = "margin-bottom: 50px">
            He laughed as he tasted the fresh air that was denied to him for years. 
        </p>  

        <p>
            And he laughed when he thought about what he was going to do once he reached New York City.
        </p>
            `,
        weaponInfo : `Cold Calculus is a burst fire weapon that has been designed with tesla coils that can shoot out bullets that can shock enemies at a medium range. Not only does the gun’s appearance resemble Seven’s, but its name is also a reminder of the merciless and calculating measures that Seven will go through in order to reach his goal.`,
        weaponStats : {
            damagePerSecond: 60.3,
            bulletDamage: 10.4,
            ammo: 29,
            bulletsPerSecond: 3.81,
            reloadTime: 2.35,
            bulletVelocity: 635,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Seven/weapon",
        healthStats: {
            healthPoints: 650, 
            healthRegen: 1.0 ,
            moveSpeed: 6.9,
            sprintSpeed: 1.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Lightning Ball",
                image : "images-&-videos/Seven/ability1"
            },
            ability2 :{
                name : "Static Charge",
                image : "images-&-videos/Seven/ability2"
            },
            ability3 :{
                name : "Power Surge",
                image : "images-&-videos/Seven/ability3"
            },
            ability4 :{
                name : "Storm Cloud",
                image : "images-&-videos/Seven/ability4"
            }
        },
        showcase : "images-&-videos/Seven/showcase"
    },
    {
        name : "Shiv", 
        description : "The man with no limitations, Seven unleashes havoc on the battlefield through his mystical mastery over electrical currents. Seven can cast Lightning Balls for his first ability that travels in a straight line while dealing spirit damage to any enemies within its radius. He can also stun enemies with his second ability, Static Charge, that he places on an enemy, with anybody else nearby also getting stunned if they are in its radius. However, Seven’s greatest source of damage is through Power Surge, which makes his bullets proc shock damage that can chain to other targets nearby. Last but not least, Seven’s ultimate, Storm Cloud, covers an entire area with his electrifying powers and deals spirit damage to any enemy within his line of sight. While channeling his ult, he can also strike a targeted area once with a powerful bolt of lightning that knocks back enemies.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            A loyal member of "The Baxter Society", an international order of monster hunters, Shiv travels across North America looking to put down creatures that prey on the living.
        </p>  

        <p>
        While his less polished nature and criminal past make some of the more traditional members of the Society wary, no one can deny his effectiveness.
        </p>
            `,
        weaponInfo : `Shiv’s shotgun, Busted Flush, has a special alternate fire that knocks him back, and allows him to perform movement with it. He wields Busted Flush in his right hand, and holds his jacket over his left shoulder.`,
        weaponStats : {
            damagePerSecond: 50.1,
            bulletDamage: 4.60,
            ammo: 10,
            bulletsPerSecond: 1.81,
            reloadTime: 2.80,
            bulletVelocity: 610,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 41` 
        },
        weaponImage: "images-&-videos/Shiv/weapon",
        healthStats: {
            healthPoints: 750, 
            healthRegen: 2.0 ,
            moveSpeed: 6.8,
            sprintSpeed: 2.0, 
            dashSpeed: 0.70,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Serrated Knives",
                image : "images-&-videos/Shiv/ability1"
            },
            ability2 :{
                name : "Slice and Dice",
                image : "images-&-videos/Shiv/ability2"
            },
            ability3 :{
                name : "Bloodletting",
                image : "images-&-videos/Shiv/ability3"
            },
            ability4 :{
                name : "Killing Blow",
                image : "images-&-videos/Shiv/ability4"
            }
        },
        showcase : "images-&-videos/Shiv/showcase"
    },
    {
        name : "Sinclair", 
        description : "A magician with lethal capabilities, Sinclair excels in maximizing Spirit damage in bursts and making targets vulnerable to his attacks. His Rabbit Hex turns all enemies within its radius to a rabbit, helpless as the team can drive damage into them without consequence. His Vexing Bolt is a bolt of magic whose direction can be manipulated by casting the ability once again, which will make it go in the direction of your crosshair. His Spectral Assistant attacks wherever he does, dealing Spirit damage. Spectral Assistant can also be teleported to, and can fire Vexing Bolts when the main body does. His ultimate, Audience Participation, copies the ultimate of an enemy hero for a short time, and can be casted, albeit it will be weaker. Upgrading his ultimate will make it deal closer to the damage of the actual ultimate. His main weakness is his reliance on Spirit damage, where opponents can build Spirit resistance and reduce his impact.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            Henry's parents told him he was too young and impulsive to mess with real magic, and so they gave him a deck of cards to play with. He took to sleight of hand naturally and soon was dazzling his classmates with fantastic feats of illusions that were done without mystic artifacts or incantation.
        </p>  

        <p style = "margin-bottom: 50px">
            When he was in high school he met Savannah, and their mutual love of stage magic sparked a whirlwind romance. Soon they fell in love and created an act together. Obviously they were meant to be; and so at prom, Henry proposed to Savannah and they married soon after graduation.
        </p> 

        <p style = "margin-bottom: 50px">
            Unsurprisingly both sets of parents were not thrilled at this prospect, but Henry and Savannah knew they were soulmates. And so they cemented their love for one another by having a blood mystic bind their souls for eternity.
        </p>

        <p>
            When an on-stage accident claimed both their lives, no one was sure who to blame. Henry claims Savannah was out of position. Savannah says Henry didn't wait for his cue. But one thing's for sure, since their souls are tied to each other neither one of them have been able to move on. Now a bickering pair of ghosts, Henry and Savannah need to work together if they want to have any chance of undoing their eternal union.
        </p>
            `,
        weaponInfo : `Sinclair’s wand, The Prestige, is a magic wand that you would see in a magician that practices simple card tricks’ hand. Don’t be fooled, the magic that this wand produces does some real damage. He wields the wand in his right hand.`,
        weaponStats : {
            damagePerSecond: 46.3,
            bulletDamage: 17.0,
            ammo: 16,
            bulletsPerSecond: 1.90,
            reloadTime: 2.50,
            bulletVelocity: 300,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `25  → 61` 
        },
        weaponImage: "images-&-videos/Sinclair/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 3.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Vexing Bolt",
                image : "images-&-videos/Sinclair/ability1"
            },
            ability2 :{
                name : "Spectral Assistant",
                image : "images-&-videos/Sinclair/ability2"
            },
            ability3 :{
                name : "Rabbit Hex",
                image : "images-&-videos/Sinclair/ability3"
            },
            ability4 :{
                name : "Audience Participation",
                image : "images-&-videos/Sinclair/ability4"
            }
        },
        showcase : "images-&-videos/Sinclair/showcase"
    },
    {
        name : "Sinclair", 
        description : "A magician with lethal capabilities, Sinclair excels in maximizing Spirit damage in bursts and making targets vulnerable to his attacks. His Rabbit Hex turns all enemies within its radius to a rabbit, helpless as the team can drive damage into them without consequence. His Vexing Bolt is a bolt of magic whose direction can be manipulated by casting the ability once again, which will make it go in the direction of your crosshair. His Spectral Assistant attacks wherever he does, dealing Spirit damage. Spectral Assistant can also be teleported to, and can fire Vexing Bolts when the main body does. His ultimate, Audience Participation, copies the ultimate of an enemy hero for a short time, and can be casted, albeit it will be weaker. Upgrading his ultimate will make it deal closer to the damage of the actual ultimate. His main weakness is his reliance on Spirit damage, where opponents can build Spirit resistance and reduce his impact.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            Henry's parents told him he was too young and impulsive to mess with real magic, and so they gave him a deck of cards to play with. He took to sleight of hand naturally and soon was dazzling his classmates with fantastic feats of illusions that were done without mystic artifacts or incantation.
        </p>  

        <p style = "margin-bottom: 50px">
            When he was in high school he met Savannah, and their mutual love of stage magic sparked a whirlwind romance. Soon they fell in love and created an act together. Obviously they were meant to be; and so at prom, Henry proposed to Savannah and they married soon after graduation.
        </p> 

        <p style = "margin-bottom: 50px">
            Unsurprisingly both sets of parents were not thrilled at this prospect, but Henry and Savannah knew they were soulmates. And so they cemented their love for one another by having a blood mystic bind their souls for eternity.
        </p>

        <p>
            When an on-stage accident claimed both their lives, no one was sure who to blame. Henry claims Savannah was out of position. Savannah says Henry didn't wait for his cue. But one thing's for sure, since their souls are tied to each other neither one of them have been able to move on. Now a bickering pair of ghosts, Henry and Savannah need to work together if they want to have any chance of undoing their eternal union.
        </p>
            `,
        weaponInfo : `Sinclair’s wand, The Prestige, is a magic wand that you would see in a magician that practices simple card tricks’ hand. Don’t be fooled, the magic that this wand produces does some real damage. He wields the wand in his right hand.`,
        weaponStats : {
            damagePerSecond: 46.3,
            bulletDamage: 17.0,
            ammo: 16,
            bulletsPerSecond: 1.90,
            reloadTime: 2.50,
            bulletVelocity: 300,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `25  → 61` 
        },
        weaponImage: "images-&-videos/Sinclair/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 3.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Vexing Bolt",
                image : "images-&-videos/Sinclair/ability1"
            },
            ability2 :{
                name : "Spectral Assistant",
                image : "images-&-videos/Sinclair/ability2"
            },
            ability3 :{
                name : "Rabbit Hex",
                image : "images-&-videos/Sinclair/ability3"
            },
            ability4 :{
                name : "Audience Participation",
                image : "images-&-videos/Sinclair/ability4"
            }
        },
        showcase : "images-&-videos/Sinclair/showcase"
    },
    {
        name : "Victor", 
        description : "Victor is a close range brawler that harnesses his pain into a lethal weapon, channeling the damage he receives into Pain Battery in order to dish out a significant amount of spirit damage back towards his enemies. Additionally, his Aura of Suffering causes him to unleash pain onto both himself and his enemies with the damage gradually ramping up to a maximum amount. Despite all the damage Victor inflicts on himself, he can also use Jumpstart to receive a massive burst of healing and movement speed. And when you think you’re about to defeat him, Shocking Reanimation will prove you wrong. Victor revives at full health after receiving lethal damage, with an AOE that deals spirit damage and stuns any enemies near his reanimation.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            A lot of people spend their whole lives wondering who they really are. For Victor, this existential question is made more complicated as he woke up on a mortuary table with no knowledge of his creator, why he was made, and whom he is made of.
        </p>  

        <p>
            Now searching the five boroughs for answers, Victor is hoping to find someone who can identify any part of him.
        </p> 
            `,
        weaponInfo : `Memento Mori is a medium range gun, designed similarly to a nailgun, that shoots bullets at a slightly slow velocity. A name contradictory to Victor’s nature, yet serves as a warning to his foes.`,
        weaponStats : {
            damagePerSecond: 70.2,
            bulletDamage: 12.0,
            ammo: 24,
            bulletsPerSecond: 5.05,
            reloadTime: 2.40,
            bulletVelocity: 203,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20  → 58` 
        },
        weaponImage: "images-&-videos/Victor/weapon",
        healthStats: {
            healthPoints: 680, 
            healthRegen: 3.0 ,
            moveSpeed: 6.3,
            sprintSpeed: 1.5, 
            dashSpeed: 0.70,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Pain Battery",
                image : "images-&-videos/Victor/ability1"
            },
            ability2 :{
                name : "Jumpstart",
                image : "images-&-videos/Victor/ability2"
            },
            ability3 :{
                name : "Aura of Suffering",
                image : "images-&-videos/Victor/ability3"
            },
            ability4 :{
                name : "Shocking Reanimation",
                image : "images-&-videos/Victor/ability4"
            }
        },
        showcase : "images-&-videos/Victor/showcase"
    },
    {
        name : "Vindicta", 
        description : "A ghastly sniper who can fly and pick you off from distance, Vindicta excels with dealing with low health targets, and getting them low through Weapon damage. Her Stake binds enemies to the ground and within a certain radius, making it easier for Vindicta to deal damage to them. Her Flight is what it sounds like; it allows Vindicta to fly in the air, adding Spirit damage to her weapon’s damage as well. Her Crow Familiar deals Spirit damage and afterwards applies a bleed. The Crow Familiar also reduces the target's bullet and spirit resistance, allowing Vindicta to further deal Weapon damage to the target with ease. Her ultimate, Assassinate, is an ability that deals a chunk of Spirit damage, and does extra damage to targets after scoping for longer than a second, and if the target is below 50% health. Eliminating a player with Assassinate gives you bonus souls as well, allowing Vindicta to snowball off of her precision. Vindicta’s main weakness is her lack of health and stamina. She has 2 stamina, limiting her movement, and does not have a vast health pool to work with.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            A victim of John Hathorne during the Salem Witch Trials, Vindicta got a second chance of life when her spirit was brought back to the mortal plane during the first Maelstrom (the event that introduced the supernatural to the public at large.)
        </p>  

        <p>
            Waging a one ghost war against "The Friends of Humanity", a neo inquisition formed by Hathorne's descendants; Vindicta looks to keep the supernatural safe from Hathorne's ilk, and she isn't afraid to stack as many bodies as needed to do it.
        </p> 
            `,
        weaponInfo : `Vindicta’s weapon, Wallflower’s Revenge, is a gun that doubles as both a rifle and a sniper, allowing her to pepper enemies down to low health and finish them off with a single weapon. She holds the Wallflower’s Revenge in both hands.`,
        weaponStats : {
            damagePerSecond: 49.4,
            bulletDamage: 11.4,
            ammo: 22,
            bulletsPerSecond: 4.33,
            reloadTime: 2.91,
            bulletVelocity: 557,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20  → 64` 
        },
        weaponImage: "images-&-videos/Vindicta/weapon",
        healthStats: {
            healthPoints: 675, 
            healthRegen: 2.0 ,
            moveSpeed: 8.0,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 2
        },
        abilities: {
            ability1 :{
                name : "Stake",
                image : "images-&-videos/Vindicta/ability1"
            },
            ability2 :{
                name : "Flight",
                image : "images-&-videos/Vindicta/ability2"
            },
            ability3 :{
                name : "Crow Familiar",
                image : "images-&-videos/Vindicta/ability3"
            },
            ability4 :{
                name : "Assassinate",
                image : "images-&-videos/Vindicta/ability4"
            }
        },
        showcase : "images-&-videos/Vindicta/showcase"
    },
    {
        name : "Viscous", 
        description : "This psychic sea anemone isn’t one to be underestimated as Viscous can Splatter his enemies with a ball of goo that deals spirit damage, or use his Puddle Punch to knock around both enemies and allies alike. Whenever he or an ally is in a pinch, Viscous can come save the day using The Cube, which encapsulates his target in a cube of restorative goo. If Viscous ever needs an escape or wants to cause maximum chaos, he can morph into a large Goo Ball and roll into his enemies, stunning while dealing spirit damage. Viscous is especially difficult to deal with during the midgame, however, he begins to weaken during the late game as his damage falls off.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            The Bermuda Triangle was never a myth, it was a shadowline nexus deep underneath the Atlantic Ocean. For the most part, the things that escaped this astral gate were benign (like Nessie), but now something dark and predatory known only as The Adversary hunts the seas... and ocean denizens are scared to death.
        </p>  

        <p>
            One of those inhabitants, a psychic sea anemone, wants to do something about it. Summoning an ectoplasmic goo body to traverse the surface, Viscous is desperately trying to summon the Patrons in order to keep The Deep safe from the horror that lurks below.
        </p> 
            `,
        weaponInfo : `The Deep Sea Interpreter shoots a slow, medium-range projectile made out of goo that also has an alternate fire mode, which releases an even larger ball of goo that splashes a small area at the cost of 5 ammo.`,
        weaponStats : {
            damagePerSecond: 47.1,
            bulletDamage: 9.90,
            ammo: 20,
            bulletsPerSecond: 4.76,
            reloadTime: 2.50,
            bulletVelocity: 254,
            lightMeleeDamage: 63,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20  → 58` 
        },
        weaponImage: "images-&-videos/Viscous/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Splatter",
                image : "images-&-videos/Viscous/ability1"
            },
            ability2 :{
                name : "The Cube",
                image : "images-&-videos/Viscous/ability2"
            },
            ability3 :{
                name : "Puddle Punch",
                image : "images-&-videos/Viscous/ability3"
            },
            ability4 :{
                name : "Goo Ball",
                image : "images-&-videos/Viscous/ability4"
            }
        },
        showcase : "images-&-videos/Viscous/showcase"
    },
    {
        name : "Vyper", 
        description : "A slippery lizard with a frightening fire rate, Vyper is a character that is quite unique amongst the Deadlock landscape. Vyper benefits greatly from sliding, due to his high fire rate and disproportionally low magazine size. Her Slither is a passive ability that grants her the ability to slide longer, up hills, and turn faster. This allows her to fire an infinite amount of bullets during his slide, and simply dash once more to start yet another slide. Her Screwjab Dagger deals Spirit damage, and applies a fading movement slow, allowing her to chase his targets easier. Her Lethal Venom injects her opponent with venom, and after a short delay, deals Spirit damage. This damage is amplified by the amount of missing health of the target. Finally, Vyper’s ultimate, Petrifying Bola, slows and damages all enemies in the area. Enemies that are directly hit take additional Spirit damage, and applies Petrify to them instead of a slow. Vyper’s weakness is her low accuracy with her weapon, and her dependence on always having stamina to dash.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            When it comes to breaking the law, not getting caught is a pretty important part of the job. Vyper never got that memo. Luckily for her, if there’s one thing she’s better at than being arrested, it’s escaping out of jail.
        </p>  

        <p>
            Having done time in every major prison in the tri-state area, Vyper has built an impressive network of street level lowlifes that owe her one. She’s also built an impressive network of street level lowlifes that want her dead, but she tries to focus on the positive.
        </p> 
            `,
        weaponInfo : `Vyper’s weapon, The Rattler, is a two-handed rifle with an insane fire rate. The Rattler seems to fire pellets, but don’t be fooled, they deal heavy damage.`,
        weaponStats : {
            damagePerSecond: 90.0,
            bulletDamage: 6.30,
            ammo: 24,
            bulletsPerSecond: 14.3,
            reloadTime: 1.60,
            bulletVelocity: 411,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `15 → 33` 
        },
        weaponImage: "images-&-videos/Vyper/weapon",
        healthStats: {
            healthPoints: 700, 
            healthRegen: 2.0 ,
            moveSpeed: 7.0,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 4
        },
        abilities: {
            ability1 :{
                name : "Screwjab Dagger",
                image : "images-&-videos/Vyper/ability1"
            },
            ability2 :{
                name : "Lethal Venom",
                image : "images-&-videos/Vyper/ability2"
            },
            ability3 :{
                name : "Slither",
                image : "images-&-videos/Vyper/ability3"
            },
            ability4 :{
                name : "Petrifying Bola",
                image : "images-&-videos/Vyper/ability4"
            }
        },
        showcase : "images-&-videos/Vyper/showcase"
    },
    {
        name : "Warden", 
        description : "A tough military man and an excellent brawler, Warden is an alchemist with the ability to deal all kinds of damage and sustain himself. His Alchemical Flask deals Spirit damage and applies both a movement slow and weapon damage debuff, reducing his opponent’s ability to fight back against the fearsome soldier. His Binding Word capitalizes upon the reduced movement speed, immobilizing enemies that do not escape the radius within a short time. His Willpower gives him a barrier and bonus movement speed, allowing him to stay in his opponent’s faces and deal damage consistently. His ultimate, Last Stand, deals Spirit damage, and heals based on the damage done in the ult. Last Stand deals damage in a cone in front of him. His weaknesses are characters with the ability to deal damage from a long distance, as his abilities do not have much range.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            Most people think the supernatural came into the world 50 years ago. They’re wrong. Its presence shaped folklore for generations… and as long as there have been people afraid of the shadows, there have been those who dedicated their lives to fighting in them.
        </p>  

        <p style = "margin-bottom: 50px">
            Coming from a lineage of militant alchemists, Warden’s family always trained for the day they would have to stave off a mystic apocalypse… but as time passed the importance of the lessons seemed less and less important. What once was viewed as a sincere warning slowly morphed into being perceived as amusing anecdotes told by their superstitious grandparents.
        </p> 

        <p>
            When the portal opened in Central Park, Warden’s parents realized not only was everything they were told was true, they were unprepared. Refusing to let the next generation fall asleep on the job, Warden was trained since birth to be a supernatural killing machine with one purpose: stopping the Patrons from ever entering our world.
        </p> 
            `,
        weaponInfo : `Warden’s weapon, Freedom’s Cost, is a two-handed weapon that Warden wields with military precision.`,
        weaponStats : {
            damagePerSecond: 57.1,
            bulletDamage: 15.0,
            ammo: 17,
            bulletsPerSecond: 3.81,
            reloadTime: 2.91,
            bulletVelocity: 290,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `20 → 58` 
        },
        weaponImage: "images-&-videos/Warden/weapon",
        healthStats: {
            healthPoints: 725, 
            healthRegen: 3.0 ,
            moveSpeed: 6.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Alchemical Flask",
                image : "images-&-videos/Warden/ability1"
            },
            ability2 :{
                name : "Willpower",
                image : "images-&-videos/Warden/ability2"
            },
            ability3 :{
                name : "Binding Word",
                image : "images-&-videos/Warden/ability3"
            },
            ability4 :{
                name : "Last Stand",
                image : "images-&-videos/Warden/ability4"
            }
        },
        showcase : "images-&-videos/Warden/showcase"
    },
    {
        name : "Wraith", 
        description : "While operating a massive underground gambling scene in New York, Wraith proves to her adversaries why you shouldn’t get in her way. A damage dealer that is a hybrid between gun and spirit damage, Wraith shoots her opponents with her trusty Tommy gun while charging her first ability, Card Tricks, which flies in the direction of her crosshair dealing bursts of spirit damage. If she ever needs to get to a place or escape quickly, she can always teleport using Project Mind, but if she’s forced to fight it out then her Full Auto boosts her and her allies fire rate while also giving herself lifesteal when fully leveled. Wraith can also decide who on the enemy team is getting put out of the fight first using Telekinesis, which lifts the enemy up into the air and slam them into the ground to silence and disarm them afterwards.",
        loreEntry : `
        <p>
            The cornerstone of the New York gambling scene, Wraith's organization is about as open a secret as it comes. However, thanks to a non-trivial amount of bribes, shakedowns, and blackmail, Wraith knows that she's above the law.
        </p> 
            `,
        weaponInfo : `The Rake is a gun with a similar model to a Thompson submachine gun, with a high fire rate that shoots at a medium range.`,
        weaponStats : {
            damagePerSecond: 54.1,
            bulletDamage: 5.12,
            ammo: 52,
            bulletsPerSecond: 10.6,
            reloadTime: 2.82,
            bulletVelocity: 572,
            lightMeleeDamage: 50,
            heavyMeleeDamage: 116,
            weaponFalloffRange: `18 → 52` 
        },
        weaponImage: "images-&-videos/Wraith/weapon",
        healthStats: {
            healthPoints: 650, 
            healthRegen: 2.0 ,
            moveSpeed: 7.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Card Trick",
                image : "images-&-videos/Wraith/ability1"
            },
            ability2 :{
                name : "Prject Mind",
                image : "images-&-videos/Wraith/ability2"
            },
            ability3 :{
                name : "Full Auto",
                image : "images-&-videos/Wraith/ability3"
            },
            ability4 :{
                name : "Telekinesis",
                image : "images-&-videos/Wraith/ability4"
            }
        },
        showcase : "images-&-videos/Wraith/showcase"
    },
    {
        name : "Yamato", 
        description : "A cunning swordwoman, Yamato excels in close range duels. With her sword, she can perform a Power Slash, sending forth a spectral form of herself forwards and slashing the enemy, dealing Spirit Damage. Her Crimson Slash deals Spirit damage, heals Yamato, and slows the fire rate of her opponents. Her Flying Strike allows her to grapple onto an enemy, and pulls Yamato towards them. From there, she can deal damage much better, allowing her some very intricate combos to maximize her damage. Her ultimate, Shadow Transformation, refreshes her abilities and reduces their cooldowns, and gives her greatly increased spirit and bullet resist, allowing her to fight longer fights as well. Whenever Yamato gets an elimination during her ultimate, the duration is increased, allowing her to fight longer.",
        loreEntry : `
        <p style = "margin-bottom: 50px">
            犯罪組織のボスの家に生まれた花桜梨とその兄の大和にとって、
            父の死後に「セブンスムーン」の跡目を継ぐのは自明のことでもあった。
            そして何年もの間、かれらは対等の立場で組織を率いて利益と成功を
            もたらし、やがてはアメリカへの進出をも目論むようになった。
        </p>  

        <p style = "margin-bottom: 50px">
            思い描いていた計画は単純で、 大和がアメリカに渡って花桜梨の
            国際的な存在感を高め、その間花桜梨は日本に残って国内を統制する、
            といったものだった。 兄妹にとって不運だったのは、花桜梨が日本で
            指揮をとるという計画を快く思わない部下たちがいたことだった。
        </p> 

        <p style = "margin-bottom: 50px">
            そして迅速かつ暴力的な形で、反乱は発生した。大和は花桜梨を
            守るために命を落とし、花桜梨と数人の忠実な部下たちは、
            その大和の犠牲のおかげもあって、日本からアメリカへと
            逃げ延びることに成功した。

        </p>

        <p>
            アメリカに着いた花桜梨たちを出迎えたのは、本来であれば大和が
            会う予定となっていた男であった。彼は日本人の名前になじみが
            なかったため性別の区別がついておらず、花桜梨のことを
            「ヤマト」と呼んだ。花桜梨は男の間違いを正そうと思ったが、
            結局そのままにした。兄の記憶を残し続けるためにも、その名を名乗り、
            その夢を受け継ぐことが最善の道であろうと考えたからだ。
        </p> 
            `,
        weaponInfo : `Yamato’s sword, Sister’s Lament, is a katana that she wields on her left hip, while throwing shuriken and exploding bombs from the right hand .`,
        weaponStats : {
            damagePerSecond: 60.5,
            bulletDamage: 5.09,
            ammo: 12,
            bulletsPerSecond: 2.38,
            reloadTime: 2.44,
            bulletVelocity: 254,
            lightMeleeDamage: 55,
            heavyMeleeDamage: 128,
            weaponFalloffRange: `20 → 46` 
        },
        weaponImage: "images-&-videos/Yamato/weapon",
        healthStats: {
            healthPoints: 725, 
            healthRegen: 3.0 ,
            moveSpeed: 6.3,
            sprintSpeed: 2.0, 
            dashSpeed: 0.68,
            stamina: 3
        },
        abilities: {
            ability1 :{
                name : "Power Slash",
                image : "images-&-videos/Yamato/ability1"
            },
            ability2 :{
                name : "Flying Strike",
                image : "images-&-videos/Yamato/ability2"
            },
            ability3 :{
                name : "Crimson Slash",
                image : "images-&-videos/Yamato/ability3"
            },
            ability4 :{
                name : "Shadow Transformation",
                image : "images-&-videos/Yamato/ability4"
            }
        },
        showcase : "images-&-videos/Yamato/showcase"
    }
]