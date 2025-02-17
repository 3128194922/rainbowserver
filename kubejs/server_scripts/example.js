//服务端后台输出，告诉你已经加载了
console.info('server_script Kubejs example.js已经成功加载')
//牢韩你在看吧，每一种语句各自的作用我会注释
//修改配方
ServerEvents.recipes(event=>{
    //永恒之门配方
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/blaze"}')})//删除输出为指定物品和NBT的配方
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/enderman"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/slime"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:emerald_grove"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:endless/blaze"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:overworldian_nights"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:hellish_fortress"}')})
    //CCK实验性物品配方
    event.remove({output:'environmental:cherry_pie'})//删除配方，通过物品ID
    event.remove({output:'environmental:truffle_pie'})
    //音乐播放器
    event.remove({output:'netmusic:music_player'})
    event.shaped('netmusic:music_player',[
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks']])
    event.remove({output:'netmusic:cd_burner'})
    event.shaped('netmusic:cd_burner',[
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks'],
        ['#minecraft:planks','#forge:ingots/iron','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks']])
    event.remove({output:'netmusic:computer'})
    event.shaped('netmusic:computer',[
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks'],
        ['#minecraft:planks','#forge:ingots/gold','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks']])
    //event.remove({output:'netmusic:music_player_backpack'})
    //飞机全部禁用
    //event.remove({output:'@immersive_aircraft'})//删除配方，通过mod筛选
    //特殊物品禁用
    //event.remove({output:'@smc'})
    //说明书配方
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:encyclopedia"}'),'minecraft:dirt')
    //传送石价格降低
    event.remove({output:Item.of('waystones:warp_stone', '{Damage:0}')})
    event.shapeless(Item.of('waystones:warp_stone', '{Damage:0}'),['minecraft:emerald','minecraft:ender_pearl'])
    //末影珍珠革新
    event.blasting('minecraft:ender_pearl','#endermanoverhaul:ender_pearls',5,2000)
    //下界箱子
    event.remove({output:'netherchested:nether_chest'})
    event.shaped('netherchested:nether_chest',[
        ["minecraft:chest","minecraft:chest","minecraft:chest"],
        ["minecraft:chest","minecraft:nether_bricks","minecraft:chest"],
        ["minecraft:chest","minecraft:chest","minecraft:chest"]])
    //冰弓配方修改
    event.remove({output:Item.of('smc:frostium_bow', '{Damage:0}')})
    event.shaped(Item.of('smc:frostium_bow', '{Damage:0}'),[
        ["",'smc:frostium_ingot','minecraft:string'],
        ['minecraft:netherite_ingot',"",'minecraft:string'],
        ["",'smc:frostium_ingot','minecraft:string']])
    //泥土配方
    event.recipes.create.crushing('minecraft:dirt', 'minecraft:flint').processingTime(500)//.withChance(0.12)
    //命名牌配方
    event.shapeless('minecraft:name_tag',['#forge:string','#minecraft:planks','minecraft:name_tag']).keepIngredient({item:'minecraft:name_tag'})
    //滑翔伞配方
    event.remove({output:'vc_gliders:reinforced_paper_netherite'})
    event.remove({output:'vc_gliders:reinforced_paper_iron'})
    event.remove({output:'vc_gliders:reinforced_paper_diamond'})
    event.remove({output:'vc_gliders:reinforced_paper_gold'})
    event.remove({output:'vc_gliders:reinforced_paper'})
    event.shapeless('3x vc_gliders:reinforced_paper_netherite',['3x vc_gliders:reinforced_paper','minecraft:netherite_scrap'])
    event.shapeless('3x vc_gliders:reinforced_paper_iron',['3x vc_gliders:reinforced_paper','minecraft:iron_ingot'])
    event.shapeless('3x vc_gliders:reinforced_paper_diamond',['3x vc_gliders:reinforced_paper','minecraft:diamond'])
    event.shapeless('3x vc_gliders:reinforced_paper_gold',['3x vc_gliders:reinforced_paper','minecraft:gold_ingot'])
    event.shapeless('3x vc_gliders:reinforced_paper',['minecraft:paper','farmersdelight:canvas'])
    //切石机加强
    event.stonecutting('3x minecraft:iron_bars','minecraft:iron_door')
    event.stonecutting('create:cogwheel','create:large_cogwheel')
    event.stonecutting('create:water_wheel','create:large_water_wheel')
    event.stonecutting('create:shaft','create:cogwheel')
    //光源方块合成
    event.shapeless('minecraft:light','minecraft:torch')
    //量天尺配方
    event.shapeless('atmospheric:dragon_roots',['atmospheric:dragon_fruit','minecraft:vine'])
    //冰红茶配方
    event.shaped('smc:ice_tea',[
        ['minecraft:phantom_membrane','youkaishomecoming:ice_cube','minecraft:phantom_membrane'],
        ['minecraft:phantom_membrane','youkaishomecoming:black_tea_leaves','minecraft:phantom_membrane'],
        ['minecraft:phantom_membrane','minecraft:phantom_membrane','minecraft:phantom_membrane']])
    //腐肉制作
    event.recipes.create.haunting('minecraft:rotten_flesh', '#mynethersdelight:curry_meats')
    //烈焰棒合成
    event.shapeless('minecraft:blaze_rod','6x minecraft:blaze_powder')
    //海晶砂砾合成
    event.recipes.create.crushing(['minecraft:prismarine_crystals',Item.of('2x minecraft:prismarine_crystals').withChance(0.12)],'minecraft:prismarine_shard').processingTime(100)//.withChance(0.12)
    //钻石合成
    event.shaped('minecraft:diamond',[
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block']])
    //煤炭合成
    event.recipes.create.haunting(Item.of('minecraft:coal').withChance(0.75),'minecraft:charcoal')
    //青金石合成
    event.recipes.create.filling('minecraft:lapis_lazuli', [Fluid.of("create_enchantment_industry:experience",10),'minecraft:gold_ingot'])
    //煤炭量产
    event.recipes.create.crushing(['minecraft:coal',Item.of('minecraft:netherite_scrap').withChance(0.0001)],'minecraft:blackstone').processingTime(150)//.withChance(0.12)
    //下界岩量产
    event.recipes.create.mixing("minecraft:netherrack",[Fluid.of("minecraft:lava",25), 'minecraft:cobblestone','create:cinder_flour'])
})
//覆盖生物战利品
/*ServerEvents.entityLootTables(event=>{
    event.addEntity('minecraft:hoglin',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('netherexp:hogham')
        })
    })
})*/
//添加生物战利品
ServerEvents.entityLootTables(event=>{
    //疣猪掉mod火腿
    event.modifyEntity('minecraft:hoglin',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('netherexp:hogham')
        })
    })
    //流浪商人掉绿宝石
    event.modifyEntity('minecraft:wandering_trader',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('minecraft:emerald').weight(1).count([1,2])
        })
    })
})
//修改堆肥
ServerEvents.compostableRecipes((e) => {
    const recipes = [
      {
        input: 'smc:broccoli_seeds',
        chance: 0.65,
      },
      {
        input: 'smc:broccoli',
        chance: 0.65,
      }
    ];
   
    recipes.forEach((recipe) => {
      e.add(recipe.input, recipe.chance);
    });
  });