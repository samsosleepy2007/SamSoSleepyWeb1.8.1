
import React, { useState, useMemo } from 'react';
import { Card } from './Card';
import { Search, X } from 'lucide-react';
import packIcon from '../../assets/pack_icon.png';

export function AddonPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const addonCards = [
    {
      title: 'Action and Stuff 1.6',
      image: 'https://i.ytimg.com/vi/p7dP3VtENL4/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "The Animation Pack You Didn't Know You Needed: Bring your world to life with new animations, particles, textures, and more!",
      link: 'https://gofile.io/d/0gy57P'
    },
    {
      title: 'RLCraft Bedrock Edition 1.0.2',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/6c5dfef3-15cf-4a97-933e-6ad50114bee3/Rlcraft_thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "RLCraft is here. It's hardcore. It's unforgiving. It's unfair. It's the hardest most realistic Dynamic World out there. GLHF.",
      link: 'https://www.mediafire.com/file/gldvardkvcj2f9a/RLCraft_Bedrock_Edition_1.0.2_%2528addon%2529.mcaddon/file'
    },
    {
      title: 'RieeMote Beta V1.9.5',
      image: packIcon,
      name: 'RieeMote Beta V1.9.5 – The ultimate Minecraft PE addon to bring your gameplay to life!',
      description: 'Express yourself with fun and unique emotes, making every adventure more exciting than ever.',
      link: 'https://www.mediafire.com/file/rvi4pf3ra1piwec/RieeMoteBetaV1.9.5.mcaddon.zip/file'
    },
    {
      title: 'Wings',
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/760a4981-8dba-4a01-8f67-c46497cc2aab/wings__Thumbnail_1.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Unleash your imagination with our 200+ Wings! Choose from a stunning collection, including Angel Wings, Cyborg Wings, Dragon Wings, Fairy Wings, and more.",
      link: 'https://www.mediafire.com/file/m62p8ppa8e1s5td/Wings_Update.mcaddon/file'
    },
    {
      title: 'Carry More',
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/c28a4d7b-3345-4735-bc51-9ff7ae2b7890/CarryMoreAdd-On_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "PICK UP, MOVE and PUT DOWN anything, from your pet pig and your FILLED chests to your friends!",
      link: 'https://www.mediafire.com/file/grny8onho2jxwme/Carry_More_Add-On_by_domikalmazika.mcaddon/file'
    },
    {
      title: 'World Builder 1.6.1',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/f71453df-3c7c-49f2-ae93-1656c962312d/worldbuilder_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Unleash your creativity with World Builder, the ultimate building tool! With intuitive selection, effortless copy-pasting, quick undo/redo actions, & custom brushes, you can easily edit entire landscapes & structures. Crafting your dream world has never been simpler, or faster!",
      link: 'https://www.mediafire.com/file/w7p47y87dpv61nw/World_Builder_1.6.1.mcaddon/file'
    },
    {
      title: 'Mine Mote Beta v0.6.0',
      image: 'https://media.forgecdn.net/avatars/thumbnails/1206/370/256/256/638784513362431046.png',
      name: 'Enhanced Gaming Experience',
      description: "Emotes follow what's trending on social media",
      link: 'https://www.mediafire.com/file/3vmyzsj4d4iexfp/Mine_Mote_Beta_v0.6.0.mcaddon.zip/file'
    },
    {
      title: "TaCZBE V0.45",
      image: 'https://media.forgecdn.net/attachments/description/1028108/description_c0fae731-ebb5-48bb-9bf4-964b05e22c34.png',
      name: 'Enhanced Gaming Experience',
      description: "The most Immersive and Customizable modern FPS experience in Minecraft - A complete Remaster of the TaC gun mod by the original team.",
      link: 'https://www.mediafire.com/file/643s901scfaruuj/TACZBE_v0.45_By_Akang_Krep.mcaddon/file'
    },
    {
      title: 'Japanese Build Set',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/4ed670cd-ef0d-4a24-ac74-60ba6af15eee/JDP_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Transform your Minecraft world with the 'Japanese Build Set' addon! Crafted for creative minds, it offers new blocks for Japanese-style builds. Elevate your creations and immerse in the charm of Japanese architecture!",
      link: 'https://www.mediafire.com/file/mw4jj6i7xvcr9wk/Japanese_Build_Set.mcaddon/file'
    },
    {
      title: 'Animations+',
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/4496a1cc-1b3e-4bd5-8b03-d29a4bb25029/A_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Animations+ Add-On adds realistic animations to YOUR actions! Add 20+ player animations to yourself with these animation Add-Ons!",
      link: 'https://www.mediafire.com/file/uwjgige5a5m370d/Animations%252B.mcaddon/file'
    },
    {
      title: "Sort Your Inventory",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/62f7b561-2931-4120-ac0e-f1c6696c6c3e/contentname_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Stay organized with the Sort Your Inventory Add-On",
      link: 'https://www.mediafire.com/file/90qtm3wbcisuo8d/Sort_Your_Inventory_Add-On_by_skupka.mcaddon/file'
    },
    {
      title: 'Parkour++',
      image: 'https://media.forgecdn.net/attachments/1218/78/mcpedl-png.png',
      name: 'Enhanced Gaming Experience',
      description: "Experience greater freedom of movement in Minecraft with this parkour add-on!",
      link: 'https://www.mediafire.com/file/zq30n1lr7n6r6mk/Parkour_Add-On_by_S7D_%255B0.9.0%255D.mcaddon/file'
    },
    {
      title: 'Wizard Craft',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/728ef750-841c-451a-8cc4-0e224cabef7e/wizardcraftaddon_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Immerse yourself in the enchanting universe of Wizard Craft Add-On, where magic, spells, custom brewing, and flying through your world on magical mobs and brooms come to life.",
      link: 'https://www.mediafire.com/file/haoeadllavr4s4m/Wizard_Craft.mcaddon/file'
    },
    {
      title: "Combat Plus",
      image: 'https://www.9minecraft.net/wp-content/uploads/2022/09/Thumbnail-Combat-Plus-Texture-Pack-MCPE.jpg',
      name: 'Enhanced Gaming Experience',
      description: "This resource pack is inspired by the Toolbelt mod, which will later give the player a belt, sword on the side of the player, bow, quiver, shield behind the player, etc. The method is the same as my previous texture pack,  Adventure Plus, which will display additional accessories to players.",
      link: 'https://www.mediafire.com/file/0dk3lr39p5odawh/Combat-Plus-Texture-Pack-MCPE-1.20.mcpack/file'
    },
    {
      title: 'Harvestcraft',
      image: 'https://i.ytimg.com/vi/anakmJIg1LE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_YXlPUUT4uGqfhMp5g9cYB3UW3w',
      name: 'Enhanced Gaming Experience',
      description: "One of Minecraft’s biggest mods comes to the Marketplace! Eight crops have been replaced with brand-new plants. Discover new craftable items, expand your farm, complete quests and more!",
      link: 'https://www.mediafire.com/file/nymzzq7alav6lf3/Harvestcraft.mcaddon/file'
    },
    {
      title: 'Primal Overworld',
      image: 'https://i.ytimg.com/vi/RCmyJFv_M2Y/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Tame and command over 35 dinosaurs in a fully upgraded prehistoric world. Battle 4 epic bosses, face off against rival tribes, and explore revamped biomes filled with new structures. Craft powerful gear and lead your ultimate dino army!",
      link: 'https://www.mediafire.com/file/1uqyady6kxi62fv/Primal_Overworld_Add-On_by_matiss.mcaddon/file'
    },
    {
      title: 'Realism VFX',
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/0aadf363-a1cf-42ca-92fa-77ad30f5ee1c/Realism_VFX_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "BRING THE VFX FROM REALISM CRAFT INTO YOUR OWN WORLDS! Experience VFX such as dynamic light and lens flares. Enhance your world with biome, water, sky, and weather VFX.",
      link: 'https://www.mediafire.com/file/bburk5b495q5vaq/Realism_VFX_1.mcaddon/file'
    },
    {
      title: "Morphs++",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/e2e8f8d8-b723-4db0-bccc-7c3b10a24a2f/BenxMME_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Are you ready for the ultimate morphing experience? Try out all 100+ morphs and discover their unique special abilities with your friends!",
      link: 'https://www.mediafire.com/file/yoy5nne0kp71x3s/Morphs+++(addon).mcaddon.zip/file'
    },
    {
      title: "Security Cameras",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/e26ced6a-be5e-426c-a9d8-da15f592305e/SecurityCamerasAdd-On_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Secure your base with 10 cameras using the Security Camera Add-On!",
      link: 'https://www.mediafire.com/file/7l46wxam6tvk993/Security+Cameras+@YashoFree.mcaddon.zip/file'
    },
    {
      title: "Crimson moon",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/a82f856f-5a4b-4185-bc2f-c791cf283ce6/CrimsonMoon_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Crimson Moon event! A hardcore night where totems appear, corrupt the land, powerful infected monsters emerge, and total chaos unfolds!",
      link: 'https://www.mediafire.com/file/pl0fn7va05agabn/Crimson+moon+v1.0.0+Add-On+(addon).mcaddon.zip/file'
    },
    {
      title: 'Difficulty Brutal',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/aea9d449-f8d2-4f17-b9e0-7eb32a230fd5/DifficultyBrutal_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Experience this extreme add-on that intensifies survival with thirst, limb damage, climate hazards, rotting food, and mobs that grow stronger over time. Food decays, injuries cripple, and biomes shape how you explore and endure.",
      link: 'https://www.mediafire.com/file/cg55n1wcs8c9iyq/Difficulty_Brutal_Add-On_by_matiss.mcaddon/file'
    },
    {
      title: 'The Storage Expansion',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/76d8d896-040d-4ae5-99a1-ebc9626e18c7/StorageExpansion_thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "The Ultimate Add-On for Your Storage Needs",
      link: 'https://www.mediafire.com/file/1wnwtbk83ud4ife/Storage_Add-On_%2528addon%2529.mcaddon/file'
    },
    {
      title: 'Essentials 1.5',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/962e8ca7-0187-4ff1-975b-c5f1dfd66af6/essentials_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Essential Additions to Minecraft! Say goodbye to doing boring chores!",
      link: 'https://www.mediafire.com/file/nzdeum1cn930ohb/Essentials_1.5.mcaddon/file'
    },
    {
      title: 'TreeCapitator',
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/5cdeb890-d77a-48c0-9ffe-763b2a75c3ac/treecapitator_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Tired of spending hours chopping trees in Minecraft? Wish there was a faster way to harvest wood? Introducing TreeCapitator! Fell entire trees with one swing!",
      link: 'https://www.mediafire.com/file/jo59iaskeg590oo/TreeCapitator_Add-On_By_Ronak.mcaddon/file'
    },
    {
      title: 'ZOMBIES REALISM',
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/71bb4c43-83e4-40db-ab91-7b766d6b89e7/ZOMBIESREALISM_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Add REALISTIC ZOMBIES to ANY WORLD with ZOMBIES REALISM Add-On! This Add-On contains horror content for your apocalypse adventures!",
      link: 'https://www.mediafire.com/file/2fs5dkbikjbdpdd/ZOMBIES_REALISM_Add-On_BY_SKYPKA.mcaddon/file'
    },
    {
      title: 'Dark Visuals RP',
      image: 'https://media.forgecdn.net/attachments/description/1341671/description_1148da21-11de-4eb8-820f-6fd3f562565f.png',
      name: 'Enhanced Gaming Experience',
      description: "Dark Fantasy is a Vibrant Visuals lighting pack for Minecraft: Bedrock that reimages the world of Minecraft with a dark and moody atmosphere like that of popular games such as Elden Ring & Dark souls.",
      link: 'https://www.mediafire.com/file/d3bzftfu1w5h9ws/Dark_Visuals_RP.mcpack/file'
    },
    {
      title: 'Raft Survival ',
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/dcc9f932-733e-4cb9-975c-df464e401c6d/Raft_Survival_Add-On_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Set sail on your own crafted raft! Survive by fishing, collecting treasure chests and loot from the water, and expanding your raft. But watch out, sharks will attack and damage your raft! Beware of pirate ships too, as they may fire upon you!",
      link: 'https://www.mediafire.com/file/vvmd7x61ssmo5ie/Raft_Survival_Add-On_%2528addon%2529.mcaddon/file'
    },
    {
      title: 'Enchant Icons',
      image: 'https://www.9minecraft.net/wp-content/uploads/2024/10/Enchant-Icons-Texture-Pack-MCPE-Thumbnail.png',
      name: 'Enhanced Gaming Experience',
      description: "Tired of how confusing enchantments are to understand? This texture will give Minecraft enchantments a new look, adding custom emojis and colors to each one, making your game more beautiful and organized.",
      link: 'https://www.mediafire.com/file/j0q9dvdkcqvxm2m/%255BRP%255D_Enchant_Icons.mcaddon/file'
    },
    {
      title: "Mowzie's Mobs",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/49cc359d-8806-44f6-b2be-8ec00fd49bfd/mowzie_thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Mowzie’s Mobs adds a variety of fictional creatures to Minecraft, priding itself in unique AI, rich atmosphere, and fluid animations. Prove your might against new bosses and enemies and claim their magical abilities as your own.",
      link: 'https://www.mediafire.com/file/529t61w8yqqsrrl/Mowzie%2527s_Mobs_-_V_1.1.0_%2528addon%2529.mcaddon/file'
    },
    {
      title: "How to Train Your Dragon",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/bb2b25eb-3953-447a-aebe-ae62e56a260d/zenith_thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Discover Toothless and other beloved dragons in your Minecraft Worlds! Become a dragon rider with this Add-On based on Universal Pictures’ live-action reimagining of DreamWorks Animation’s How to Train Your Dragon.",
      link: 'https://www.mediafire.com/file/dgrzfavnp4jafh3/How_to_Train_Your_Dragon_Add-On_by_matiss.mcaddon/file'
    },
    {
      title: "PaperDollG",
      image: 'https://r2.mcpedl.com/submissions/249662/images/paperdollg_2.png',
      name: 'Enhanced Gaming Experience',
      description: "This paper doll has a unique feature, you can move the position according to your taste. How it works is you click on the position and above it there is a button if you press it it will display the slider.",
      link: 'https://www.mediafire.com/file/gaxv0lufdddjsxc/PaperDollG.mcpack/file'
    },
    {
      title: "DWELLERS",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/07bc32a9-bda2-4c94-a95c-04925a1a9dd5/Dwellers_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Face these terrifying DWELLERS, watch out for jump scares and prepare to fail. Horror at its finest.",
      link: 'https://www.mediafire.com/file/z4r49crlmv903g0/DWELLERS_Add-On_by_Panascais_%2528addon%2529.mcaddon/file'
    },
    {
      title: "Realistic Biomes",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/d229653e-b87b-40f5-82e6-e325ed2bc762/realisticbiomes_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Transform your world with beautiful custom skies, dynamic weather, stunning visual effects, and immersive audio.",
      link: 'https://www.mediafire.com/file/4k5juy8pzhclqtr/Realistic_Biomes_Add-On_%2528addon%2529.mcaddon/file'
    },
    {
      title: "Waypoints",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/d85a270c-2440-4c1a-8e21-3ed8fefa88ab/Waypoints_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Do you often get lost in your world? Not anymore! With Waypoints, you can save all your important locations using different colors, names, and icons! And even better, you can teleport to them with one click.",
      link: 'https://www.mediafire.com/file/vlhy82ezp9es0t1/Waypoints_Add-On.mcaddon/file'
    },
    {
      title: "Naturalist",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/a99b5dad-4d44-404d-8ad2-6f5fc4b577b2/Naturalist_Thumbnail.jpg',
      name: 'Enhanced Gaming Experience',
      description: "The Naturalist Animals Add-On works in ANY WORLD! Find NEW ANIMALS in forests, deserts, oceans, and more in this UPGRADED survival experience.",
      link: 'https://www.mediafire.com/file/v7m7541o5r1c4yg/Naturalist_3.1_Add-On_by_matiss.mcaddon/file'
    },
    {
      title: "LUNAR MOON",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/b7527076-47db-44ea-86e8-36360510a667/LUNAR_MOON_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "The Lunar Moon Add-On has arrived in your world! Experience horror in a new way.",
      link: 'https://www.mediafire.com/file/w4hdllaiwgjisyc/LUNAR_MOON_Add-On_by_matiss.mcaddon/file'
    },
    {
      title: "FOOD EXPANSION",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/b0324021-365e-4d7e-b74e-297f795f7207/FE_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Adding tons of new food & seeds to farm, fruits, veg, meals, desserts, and 6 pieces of cooking furniture. Experience new farming, cooking food in pans, make new stews using pots, make juices using the juicer, or even craft ender & nether cakes to teleport to dimensions!",
      link: 'https://www.mediafire.com/file/8uxtfatq6vgu7dd/FOOD_EXPANSION_Huge_Update_Add-On_by_matiss.mcaddon/file'
    },
    {
      title: "World Editing",
      image: 'https://media.forgecdn.net/attachments/1194/445/mcpedl-png.png',
      name: 'Enhanced Gaming Experience',
      description: "Tired of placing blocks one by one? This WorldEdit-style addon lets you shape terrain, paint blocks, copy-paste structures, and automate tasks with ease. Build faster, smarter, and take full control of your Minecraft creations!",
      link: 'https://www.mediafire.com/file/1vk9mt9jdk1eiu9/World_Editing.mcaddon/file'
    },
    {
      title: "DAMAGE INDICATORS",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d0f4cd27-809e-4ef2-b54b-16ccbb99b40a/damage_indicators_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "With the Damage Indicators Add-On, you can freely customize what shows and doesn't show when a mob (or you) takes damage! Choose the damage number's font, style, sound and effect to try against any armor set on customizable dummies!",
      link: 'https://www.mediafire.com/file/9s7axfdsh3updvs/%255BDAMAGE_INDICATORS%255D.mcaddon/file'
    },
    {
      title: "TECH CRAFT",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/ba657ba4-3adf-4c71-9797-d80de9994049/Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Add MACHINES, TECHNOLOGY and new CRAFTING STATIONS to your Minecraft world!",
      link: 'https://www.mediafire.com/file/jq35yw652k5opn2/Tech_Craft_Add-On.mcaddon/file'
    },
    {
      title: "Hollow Knight Silksong",
      image: 'https://media.forgecdn.net/attachments/1344/626/hkpng-png.png',
      name: 'Enhanced Gaming Experience',
      description: "The addon adds the Hollow Knight Silksong franchise to the game, blocks and mobs.",
      link: 'https://www.mediafire.com/file/1a66xhu9lodhq6m/Hollow_Knight_Silksong.mcaddon/file'
    },
    {
      title: "BIOMES + STRUCTURES",
      image:'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/3571cf32-0919-458b-9bfa-deb3cfa65d54/Biomes_Structure_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: " Experience your world in a new way! BIOMES + STRUCTURES Add-On!",
      link: 'https://www.mediafire.com/file/ahgvjx8qeiqlcl3/BIOMES_%252B_STRUCTURES.mcaddon/file'
    },
    {
      title: "E Brewing Guide Overhauled",
      image: 'https://media.forgecdn.net/attachments/1095/357/brewing-guide-gallery-template-png.png',
      name: 'Enhanced Gaming Experience',
      description: " Adds a Brewing Guide next to the GUI",
      link: 'https://www.mediafire.com/file/zs7uion3l4i72qt/E_Brewing_Guide_Overhauled_v2.0.10.mcpack.zip/file'
    },
    {
      title: "The Dawn Era",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/6e1b7a34-3fab-4213-889b-9832582e2aeb/TheDawnEra_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "The Dawn Era Add-On has 5 incredible dinosaurs to discover, tame and raise. Bring dinosaurs to your survival world!",
      link: 'https://www.mediafire.com/file/nueukj626t6oibx/%25C2%25A7o%25C2%25A7aThe_Dawn_Era%25C2%25A7r_Resources_%2528addon%2529.mcaddon/file'
    },
    {
      title: "Cave Biomes",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/63842217-4304-4b35-80ce-0b2c6f6b1d16/CaveBiomes_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Add on your world 3 new Caves with Cave Biomes Add-On!",
      link: 'https://www.mediafire.com/file/ojoi1dmhx3gzeq7/Cave_Biomes_%2528New%2529.mcaddon.zip/file'
    },
    {
      title: "Kawaii Build Set",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/52caffc0-6da5-4843-9305-74d1e713503a/KB_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Add a splash of cuteness to your builds with the Kawaii Build Set Add-On Pack! This pack introduces adorable new blocks with pastel colors, heart and star patterns, soft textures, and playful designs. Perfect for creating dreamy cafes, cozy bedrooms, or magical villages full of charm and personality!",
      link: 'https://www.mediafire.com/file/3p4w8han3ngle78/Kawaii_Build_Set_%2528addon%2529.mcaddon.zip/file'
    },
    {
      title: "Military Craft",
      image: 'https://i.ytimg.com/vi/2qCjkDkaAFE/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Ten-hut! Hello soldier! Ever wondered what it feels like to maneuver vehicles and planes? In this base, you can hop in military trucks, fly planes and try out shooting grounds to better your aim!",
      link: 'https://www.mediafire.com/file/62vlefrpchqibv5/Military_Craft_%2528world_template%2529.mctemplate/file'
    },
    {
      title: "Mob Heads",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/2957ef82-af48-43bd-a9b2-81c676a4b051/mobheads_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Player killed mobs (animals and monsters) have a chance to drop their head on death. Fully wearable and placeable!",
      link: 'https://www.mediafire.com/file/qo4pc9fjw16nkuc/Mob_Heads.mcaddon/file'
    },
    {
      title: "NINJA TOOLS",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/fb1f0bee-05a4-41f2-9c28-d4247daa302f/pick_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Become a ninja warrior with NINJA TOOLS! This adds custom weapons, armor, tools and more to the world. Fight other ninja enemies across different biomes!",
      link: 'https://www.mediafire.com/file/qzr4d6y3gj35wps/NINJA_TOOLS_%2528world_template%2529.mctemplate/file'
    },
    {
      title: "Trains",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/20f59dca-3ab7-4e17-9ed9-3e14995684e1/TA_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "All aboard the Trains Add-On. Next stop, fun!",
      link: 'https://www.mediafire.com/file/8xmjxt2y7qvyqco/Trains.mcaddon/file'
    },
    {
      title: "BiomeCraft ",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/a96aeda8-b8bd-4648-9b22-1b36bd537d76/biomecraftaddon10_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Expand your world with 4 BRAND-NEW BIOMES and 2 REVAMPED CLASSICS! Discover unique landscapes filled with new blocks, mobs, and powerful gear. Explore, survive, and thrive in a fresh adventure!",
      link: 'https://www.mediafire.com/file/m2ulbxfwnd2jykc/BiomeCraft_Add-On.mcaddon/file'
    },
    {
      title: "Can You Survive?",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/933ec60b-64e9-42b8-899c-1d1478297d1c/CanYouSurvive_Thumbnail.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Your world has been overrun by FEARSOME MONSTERS! Enhance any world and try to survive against TERRIFYING creatures! Can you survive?",
      link: 'https://www.mediafire.com/file/1l59fx8q72ibyxa/Can_You_Survive_%2528addon%2529.mcaddon/file'
    },
    {
      title: "Everest Ascension",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/62a99dc6-6fea-4632-a82f-6fddc2b0d898/EverestAscension_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Experience the true adventure of the real Everest ascension! Watch every step for realistic avalanches and the threat of falling ice spikes. Equip your oxygen bottle and brace yourself for a challenging journey up the world's highest peak on the real-life terrain.",
      link: 'https://www.mediafire.com/file/cksm4rdbhq71ap3/Everest_Ascension_by_domikalmazika.mctemplate/file'
    },
    {
      title: "Horror Circus",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/f7f415b1-65c2-42c6-b379-6482795bb43e/HorrorCircus_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Are you afraid of clowns? Enter the Horror Circus! Transform your world into a true atmosphere of terror, where a terrifying fog covers everything at night! Facing these bizarre clowns will be your worst nightmare. Are you ready for the challenge?",
      link: 'https://www.mediafire.com/file/qdp2r0t1a430vnd/Horror_Circus_Add-On_%2528addon%2529.mcaddon/file'
    },
    {
      title: "Raiyons Item Physics",
      image: 'https://media.forgecdn.net/attachments/1297/528/mcpedl-png.png',
      name: 'Enhanced Gaming Experience',
      description: "This addon adds more immersive physics to your Minecraft world, making items on the ground appear realistic and allowing you to pick them up at will.",
      link: 'https://www.mediafire.com/file/6fpjo0jm6o89tya/Raiyons-Item-Physics-Addon-MCPE-Behavior-1.21.mcpack/file'
    },
    {
      title: "Immersive Interfaces Gui",
      image: 'https://www.9minecraft.net/wp-content/uploads/2024/09/Shrimps-Immersive-Interfaces-Resource-Pack.png',
      name: 'Enhanced Gaming Experience',
      description: "A complete graphical revamp of Minecraft's GUI, brings variety and charm to the previously grey boxes.",
      link: 'https://www.mediafire.com/file/tbdvjrnm78h4bnd/Immersive+Interfaces+Gui.mcpack/file'
    },
    {
      title: "Bushy trees",
      image: 'https://i.imgur.com/joLQ5c5.png',
      name: 'Enhanced Gaming Experience',
      description: "A simple pack that give a bushy look to leaves while staying true to vanilla. Since there is no culling on leaves, you might end up with lower performance using this pack especially where there is a lot of trees.",
      link: 'https://www.mediafire.com/file/wwgepf23rxq2nr0/Bushy_trees.mcpack/file'
    },
    {
      title: "fanimationu7.1",
      image: 'https://i.ytimg.com/vi/Q1_gZ1d2sqY/mqdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "FAnimation is an animation pack inspired by Minecraft Dungeon, there are tons of new animations that make your gaming experience even more fun!",
      link: 'https://www.mediafire.com/file/6aohcvaxmholbqn/fanimationu7_1.mcpack/file'
    },
    {
      title: "FarmersDelightV3.0.0",
      image: 'https://i.ytimg.com/vi/WbpX5dPtJOM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB20opoCVJf8io9VJ91VaL5YUFLCw',
      name: 'Enhanced Gaming Experience',
      description: "This mod adds four new crops: Tomatoes, Onions, Cabbages, and Rice. These crops, along with vanilla crops, can generate as wild crops around the world.",
      link: 'https://www.mediafire.com/file/3xpdzkh730mxzze/FarmersDelightV3.0.0-1.21.40+.mcaddon/file'
    },
    {
      title: "Realism Effects",
      image: 'https://i.ytimg.com/vi/8w4_498FuyM/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Transform your worlds with stunning graphics, enhanced sounds, and immersive weather events. Realism Effects Add-On lets you customise every detail, turning effects on or off to suit your style!",
      link: 'https://www.mediafire.com/file/l3s7y69jkm9wn90/Realism+Effects+Add-On+by+skupka.mcpack/file'
    },
    {
      title: "Aplok Guns",
      image: 'https://i.ytimg.com/vi/9AOwmjsPDU0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzo1wHQJvF58LNco8YNlt_p5pyZQ',
      name: 'Enhanced Gaming Experience',
      description: "Survival-friendly military-themed add-on with vanilla styled and beautiful guns, satisfying effects, various animations, explosives, custom armor and blocks, and various details that make the difference.",
      link: 'https://gofile.io/d/ROCyRl'
    },
    {
      title: "Vitals Expansion",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/5b35f565-0d07-4a15-b2d5-605580f52839/Vitals_Expansion_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "In this survival expansion, you'll need to manage four new vital stats: Energy, Sleep, Temperature, and Thirst. Running, jumping, and mining drain your stamina, low energy will slow you down. Stay cool in hot biomes and warm in icy areas.",
      link: 'https://www.mediafire.com/file/1qdbs6wsi728vk9/Vitals_Expansion_by_skupka.mctemplate/file'
    },
    {
      title: "VDX DesktopUI",
      image: 'https://modbay.org/uploads/posts/2025-10/d587742bf4_vdx-desktop-ui-cover.webp',
      name: 'Enhanced Gaming Experience',
      description: "Convert from Bedrock Edition UI to Java Edition UI!",
      link: 'https://www.mediafire.com/file/jlgid38vtela9jt/VDX-DesktopUI-v3.2.7%2528Main%2529.mcpack/file'
    },
    {
      title: "BETTER DAYS",
      image: 'https://i.ytimg.com/vi/78-I4ipaeps/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Customize the display of days played and coordinates above the hotbar, with multiple variants available!",
      link: 'https://gofile.io/d/7PvME2'
    },
    {
      title: "Piggyback",
      image: 'https://media.forgecdn.net/attachments/1293/383/slide1-png.PNG',
      name: 'Enhanced Gaming Experience',
      description: "The Piggyback Add-on lets you carry other players on your back, making your Minecraft adventures more fun and interactive!",
      link: 'https://www.mediafire.com/file/obqvnubr90qapql/Piggyback+by+Daniye+-+v1.1.2.mcaddon/file'
    },
    {
      title: "Better Bedrock",
      image: 'https://i.ytimg.com/vi/4XSc0J0mrlU/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "The best Minecraft Bedrock Texture Pack ever existing. It is texture pack that enhances your gameplay experience by upgrading UI!",
      link: 'https://www.mediafire.com/file/ljjrbbomyftgnd6/Better%20Bedrock%20v8.1%20by%20domikalmazika.mcpack'
    },
    {
      title: "Furniture Life v2.0",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/7d13636b-0b3f-4fdc-96c7-8dfefaa41bc8/furniturelife_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Welcome to Furniture Life! With 2000+ real furniture blocks, you can design everything from cozy homes to sprawling cities. From modern styles to timeless classics, there's a style for everyone. Plus, discover new foods, vehicles, and NPCs to bring your pixel dream to life!",
      link: 'https://www.mediafire.com/file/7lfephriplk3nb8/Furniture+Life+Add-On+v2.0+(addon).mcaddon/file'
    },
    {
      title: "Pro Builder",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/69f16ff9-0127-4aa5-9a49-6c2d71d6f55f/probuilder_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "TOOL UPDATE! This Add-On adds 2000+ Custom Block Variants, matching most Resource Packs! Useful for the most creative builders out there!",
      link: 'https://www.mediafire.com/file/fk8pl1r2gbpaa52/Pro_Builder_Add-On_by_domikalmazika.mcaddon/file'
    },
    {
      title: "Roads+",
      image: 'https://i.ytimg.com/vi/Hg63JaQU6Rg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcC0pNygm3TpS4Kz9YIa2st09t1g',
      name: 'Enhanced Gaming Experience',
      description: "Add over 250 new road blocks to your worlds. Bring life into your worlds with essential urban elements like construction signs, sidewalks, and street lights. Immerse yourself in a more expansive city experience as you craft realistic streets and highways. Roads + Add-On is perfect for any city builder!",
      link: 'https://www.mediafire.com/file/ar05ku76qs3f1ua/Roads.mcaddon/file'
    },
    {
      title: "Trash Button",
      image: 'https://i.ytimg.com/vi/TMXzxpp7d4Y/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "adding a trash button in the inventory, you can use it to destroy items in creative mode or drop item in survival!",
      link: 'https://www.mediafire.com/file/8d1css4qoaczwm1/Trash+Button+V1.1.1.mcpack.zip/file'
    },
    {
      title: "Crops And Farms V1.3",
      image: 'https://i.ytimg.com/vi/LAYCOMxfVJY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6i2Y2AMRClev_eNbBMRDcZbtglQ',
      name: 'Enhanced Gaming Experience',
      description: "Live the complete farming dream with our Crops & Farms Add-On! Expand your homestead with NEW farm animals, and get growing exciting fresh crops. Harvest with your tools and craft into your favorite dish or produce.",
      link: 'https://www.mediafire.com/file/7objhmr18emql8y/Crops+And+Farms+1.3.mcaddon.zip/file'
    },
    {
      title: "Morph Gauntlet",
      image: 'https://i.ytimg.com/vi/eD95TofbcMg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9_7cr5dNmUszNS6KpVHlfaAQjVg',
      name: 'Enhanced Gaming Experience',
      description: "Add MORPH Add-On to ANY WORLD! This Add-On adds content to MORPH INTO MOBS! Includes NEW HORROR MODE!",
      link: 'https://www.mediafire.com/file/c9wqf0pvkhhedxz/Morph+Gauntlet+Add-On+(addon).mcaddon/file'
    },
    {
      title: "GARDENING",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/94e5d8b9-0f1d-4acb-b1d0-8490b91da084/GARDENING_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "It's time to add new life to your garden. Gardening brings hundreds of new plant life that can be discovered worldwide. Walk through vibrant meadows of flowers or find the hardiest plants sprouting from sandy deserts. Gardening also offers new ways to decorate your outdoor spaces with new bird baths, benches, gnomes and more!",
      link: 'https://www.mediafire.com/file/41khlf706wpy7gb/GARDENING+Add-On.mcaddon/file'
    },
    {
      title: "SHIPPING SERVICES",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/578a2286-6695-4242-b083-a9c0df138f06/Shipping_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "The Shipping Services Add-On enhances your gameplay with flexible delivery options, a convenient E-Shop, and fun, interactive mechanics for trading and transporting items!",
      link: 'https://www.mediafire.com/file/rq8c10tcpue4q97/SHIPPING+SERVICES+UPRL.mcaddon/file'
    },
    {
      title: "Friendly Fishing",
      image: 'https://www.minecraft.net/content/dam/minecraftnet/games/education-edition/key-art/Friendly_Fishing_AddOn_VIDEOTHUMB.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Conservation International – a non-profit working to protect nature for the benefit of humanity – Mojang Studios have created an epic fishing adventure loaded with everything from tuna and clams to anchovies, sharks, and treasures – the Minecraft Friendly Fishing add-on!",
      link: 'https://www.mediafire.com/file/6n324jp2iy55utg/Friendly+Fishing.mcaddon/file'
    },
    {
      title: "Advanced Machines V2.0",
      image: 'https://i.ytimg.com/vi/XOl8ybhHB_w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIMHuAdfLmdWHteBkUKwFLuXeaQg',
      name: 'Enhanced Gaming Experience',
      description: "Advanced Machines Add-On! Automate your tasks and create complex networks. Build your own factory on ANY world! Use pipes to transport items, fluids and power to machines!",
      link: 'https://www.mediafire.com/file/sl3jfd8lswhf0g4/Advanced+Machines+2.0+Add-On.mcaddon/file'
    },
    {
      title: "AsianCraft V2.0",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/d6500ec4-a6c8-4938-ad52-a78c689c55c9/AsianCraftBuildingAddOn_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Introducing an Asian-inspired building pack that includes more than 90 new building and decoration blocks with multiple variations! Enhance your builds with the charm of Eastern architecture and design!",
      link: 'https://www.mediafire.com/file/fbgr7975xmhnsn9/AsianCraft+2.0.mcaddon/file'
    },
    {
      title: "REDSTONE TECH",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/4640d124-f8d5-4155-be7e-31a00e1fed9b/Redstone_Tech_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Create awesome redstone contraptions with all-new redstone components! This Add-On includes everything from double pistons to wireless redstone, offering limitless new redstone possibilities!",
      link: 'https://www.mediafire.com/file/n9uo34jcuk940x2/REDSTONE+TECH+UPRL.mcaddon/file'
    },
    {
      title: "ZOMBIFIED",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/1acd90ac-27c5-4fd0-8864-461688fd1286/Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "ZOMBIFY your world with the ZOMBIFIED Add-On! Brace yourself for HORDE NIGHTS, INFECTED BIOMES, CUSTOM STRUCTURES, and over a ton of ZOMBIES!",
      link: 'https://www.mediafire.com/file/igm1t548qdnahid/ZOMBIFIED.mcaddon/file'
    },
    {
      title: "Item_Physics",
      image: 'https://i.ytimg.com/vi/C0tcA_6tP6U/sddefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Enhance your Minecraft experience with the Realistic Item Physics Addon. Items now behave according to the laws of physics, staying on the ground until manually picked up.",
      link: 'https://www.mediafire.com/file/y3j1lnk4b79q6ub/Item_Physics.mcaddon/file'
    },
    {
      title: "magnificent minimap",
      image: 'https://i.ytimg.com/vi/5WB8oEZSuvM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBANkWInPcSJi8ETxm30AvsgLL-Vw',
      name: 'Enhanced Gaming Experience',
      description: "Magnificent Minimap is a powerful addon that offers a real-time, responsive, and highly customizable mini-map experience. Players can freely adjust their size, style, and the information displayed, ensuring the minimap remains practical without disrupting core gameplay. Combining performance, adaptability, and aesthetics, Magnificent Minimap makes exploring and navigating the game world more fluid, efficient, and enjoyable.",
      link: 'https://www.mediafire.com/file/1nou58ic0d04j0z/Magnificent+Minimap+Resource+v1.2.mcpack/file'
    },
    {
      title: "Mine Buddy",
      image: 'https://i.ytimg.com/vi/o3slh8V7vzE/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Meet the Mine Buddy! Your ultimate helper for farming, building, mining, and more! This trusty companion automates boring tasks, making your adventures easier than ever.",
      link: 'https://www.mediafire.com/file/ee8tiayhado3366/Mine+Buddy+Add-On+by+matiss.mcaddon/file'
    },
    {
      Computersle: "Computers",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/9b9f1eab-94e0-4741-a7b2-dc54a98a5312/COM_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Send emails and items to your friends and mobs. Leave a message on the forum, advertise your goods or just tell jokes. This powerful utility Add-On is essential for you and your friends.",
      link: 'https://www.mediafire.com/file/whpdkcyov3mbhva/Computers+Update+3+Add-On+by+skupka.mcaddon/file'
    },
    {
      Computersle: "Epic Kill Animations",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/3a0aeaad-e26f-43e1-a851-f9f681941846/contentname_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Become the hero! Turn YOUR battles into awesome action scenes with slow-motion finishers and EPIC animations!",
      link: 'https://www.mediafire.com/file/a9i1b6qfoz55za3/Epic+Kill+Animations+Add-On.mcaddon/file'
    },
    {
      Computersle: "Insane Disasters",
      image: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/803acf91-6c55-404d-9838-b30a861f9039/Insane_Disasters_Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Beware! Adds seven insane natural disasters to your world!",
      link: 'https://www.mediafire.com/file/4crs1r0e17cmh4k/Insane_Disasters_Add-On.mcaddon/file'
    },
    {
      Computersle: "Dinosaurs 1.1",
      image: 'https://images.bedrockexplorer.com/minecraft-marketplace-content/pixelbiester-dinosaurs-add-on-thumbnail-b34d96d1fa181360-800.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Dinosaurs Add-On! Hunt, tame, ride & fight your favorite dinosaurs. Craft weapons, modern tools & armor, and discover unique dinosaurs in any of your worlds!",
      link: 'https://www.mediafire.com/file/7trrxw62qkypn0c/Dinosaurs_1.1_Add-On_by_matiss.mcaddon/file'
    },
    {
      Computersle: "Modern Military II V1.35",
      image: 'https://i.ytimg.com/vi/ymdGrKSiRw8/maxresdefault.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Modern Military II Addon (1.20) is a gun mod for MCPE/Bedrock that adds MW19 Animation, Sound + Gun Sound Assets MW2022 & MW2023",
      link: 'https://www.mediafire.com/file/vytwkfmbfflrxcg/Modern_Military_II_V1.35%255BTeddy%255D_Beta_%25281%2529.mcaddon/file'
    },
    {
      Computersle: "Sieves Things",
      image: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/0908e242-35c5-4a17-9e7d-1b4ffdbaea88/SievesThings-Thumbnail_0.jpg',
      name: 'Enhanced Gaming Experience',
      description: "Dig into the ultimate survival toolkit with Sieves & Things! Whether you're in a Skyblock world or deep underground, get ready to change how you gather, grow, and automate your world.",
      link: 'https://gofile.io/d/T0XEz0'
    }


    ];

  // Fuzzy search function
  const fuzzySearch = (query: string, text: string) => {
    if (!query) return true;
    
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();
    
    // Direct substring match (highest priority)
    if (textLower.includes(queryLower)) return true;
    
    // Fuzzy matching - check if characters appear in order
    let queryIndex = 0;
    for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
      if (textLower[i] === queryLower[queryIndex]) {
        queryIndex++;
      }
    }
    
    return queryIndex === queryLower.length;
  };

  // Filter addons based on search query (title only)
  const filteredAddons = useMemo(() => {
    if (!searchQuery.trim()) return addonCards;
    
    return addonCards.filter(addon => 
      fuzzySearch(searchQuery, addon.title)
    );
  }, [searchQuery, addonCards]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="pt-24 px-6 pb-12 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl pixel-font text-center text-white mb-8">
          Addon Collection
        </h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className={`h-5 w-5 text-blue-300 ${!searchQuery ? 'search-icon-pulse' : ''}`} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search addons by title... (e.g., 'action', 'rlcraft', 'riee')"
              className="search-input-deltarune w-full pl-12 pr-12 py-4 rounded-lg focus:outline-none backdrop-blur-sm"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {/* Search Results Info */}
          <div className="flex items-center justify-between mt-3">
            <span className="search-results-info">
              {searchQuery ? (
                `${filteredAddons.length} addon${filteredAddons.length !== 1 ? 's' : ''} found`
              ) : (
                `${addonCards.length} total addons`
              )}
            </span>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 pixel-font hover:scale-105 transform"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* No Results Message */}
        {searchQuery && filteredAddons.length === 0 && (
          <div className="text-center py-12">
            <div className="no-results-container p-8 max-w-md mx-auto rounded-lg">
              <Search className="h-12 w-12 text-blue-300 mx-auto mb-4 search-icon-pulse" />
              <h3 className="text-xl text-white mb-2 pixel-font">No addons found</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Try searching with fewer letters or different keywords
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-blue-300 pixel-font">Try searching:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setSearchQuery('riee')}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded text-xs hover:bg-purple-600/50 transition-colors"
                  >
                    riee
                  </button>
                  <button
                    onClick={() => setSearchQuery('wing')}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded text-xs hover:bg-purple-600/50 transition-colors"
                  >
                    wing
                  </button>
                  <button
                    onClick={() => setSearchQuery('world')}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded text-xs hover:bg-purple-600/50 transition-colors"
                  >
                    world
                  </button>
                  <button
                    onClick={() => setSearchQuery('rl')}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded text-xs hover:bg-purple-600/50 transition-colors"
                  >
                    rl
                  </button>
                </div>
              </div>
              <button
                onClick={clearSearch}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-200 pixel-font transform hover:scale-105"
              >
                Show all addons
              </button>
            </div>
          </div>
        )}
        
        {/* Addon Grid */}
        {filteredAddons.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAddons.map((card, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                title={card.title}
                image={card.image}
                name={card.name}
                description={card.description}
                link={card.link}
              />
            </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
