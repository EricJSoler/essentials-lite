

export function getTrendingList()
{
    var list = [WrestlingPractice, DayHikerStockingStuffer, NewYearPartyLoadout, WinterLoadout, SkiingLoadOut, CampingLoadout, SoccerLoadout];

    return list;
}

// camping loadout
const BugSpray =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Bug Spray',
    description: '\tJust about anywhere you camp with temperatures above 60f you\'re going to need bugspray',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71Vd-KQCgZL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/Repel-Insect-Repellent-Single-Bottle/dp/B004H89KFC/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511060750&amp;sr=1-1&amp;keywords=bugspray&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=27bf44bc002df4f42695f3877e25a8e4&camp=1789&creative=9325' 
}

const Tent =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Tent',
    description: '\tIf you\'re planning on staying overnight, you will want somewhere to sleep!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/51-9me2dSIL._SL1000_.jpg',
    adUri: 'https://www.amazon.com/EverKing-Automatic-Waterproof-Backpacking-Ultralight/dp/B06XCGBYSM/ref=sr_1_2_sspa?s=outdoor-recreation&amp;ie=UTF8&amp;qid=1511066655&amp;sr=1-2-spons&amp;keywords=tent&amp;psc=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=e5eabdcdafbce695eceb8b3a06419157&camp=1789&creative=9325' 
}

const TentFootPrint =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Tent Foot Print',
    description: '\tRookie campers might not know this but the ground contains a ton of moisture and putting a tarp under your tent can keep your tent dry and make it last longer!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61X9XGUQE0L._SL1000_.jpg',
    adUri: 'https://www.amazon.com/TOMSHOO-Waterproof-Hammock-Blanket-Mutil-functional/dp/B0752BSD7F/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511067074&amp;sr=1-1&amp;keywords=Tent+footprint+%28ground+cover+for+under+your+tent%29&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=1de11fd6a5ec7c2aceea372f5c350d28&camp=1789&creative=9325' 
}

const MiniCampBurner =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Mini Camp Burner',
    description: '\tPro campers know that you want to be able to have a hot meal but don\'t want to deal with packing a huge stove. A little burner like this will get you the functionality you need without breaking the bank!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71fhmitJj-L._SL1000_.jpg',
    adUri: 'https://www.amazon.com/Petforu-Cookware-Backpacking-Ignition-Canister/dp/B015SRB58U/ref=sr_1_4?s=sporting-goods&amp;ie=UTF8&amp;qid=1511067557&amp;sr=1-4&amp;keywords=mini+camp+stove&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=c889f85756ab49155be1b2cc99e0fec2&camp=1789&creative=9325' 
}

const CampChair =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Camp Chair',
    description: '\tYou\'re always going to need a camp chair. You might think there will be something like a fallen tree to sit on, but trust me you\'re wrong. Bring you\'re own seat so you can tell others to move their meat',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61JHdo0sNlL._SL1000_.jpg',
    adUri: 'https://www.amazon.com/Coleman-Oversized-Quad-Chair-Cooler/dp/B0033990ZQ/ref=sr_1_3?s=sporting-goods&amp;ie=UTF8&amp;qid=1511068355&amp;sr=1-3&amp;keywords=camp+chair&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=d0264765a91312223acc07c94911378c&camp=1789&creative=9325' 
}

const SleepingBag=
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Cozy Sleeping Bag',
    description: '\tYou need something to keep you warm at night. I always go for a heavier sleeping bag because I know I would rather be too hot than too cold.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61ijn88d2fL._SL1100_.jpg',
    adUri: 'https://www.amazon.com/Bag-Envelope-Mummy-Lightweight-Waterproof-Activities-Rectangular/dp/B074W3GGJF/ref=sr_1_1_sspa?s=outdoor-recreation&amp;ie=UTF8&amp;qid=1511928159&amp;sr=1-1-spons&amp;keywords=sleeping+bag&amp;psc=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=6ef41c9d382ce3a66e3ce2d3434f1d73&camp=1789&creative=9325' 
}


const CampingLoadout = {
    guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
    category: 'testCategory',
    description: 'Who doesnt love camping?',
    displayName: 'First Time Camper',
    imageUri: 'https://imgs.tuts.dragoart.com/how-to-draw-a-tent_1_000000005120_5.jpg',
    items: [Tent, TentFootPrint,SleepingBag,MiniCampBurner, CampChair, BugSpray]
}


//ski loadout

const Ski =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Skis',
    description: '\tYou need something to shred the pow. Choose your weapon wisely. I suggest you go to a ski shop to get their recomendaiton for your size and ski level.',
    imageUri: 'https://images.evo.com/imgp/700/106007/451892/clone.jpg',
    adUri: 'https://www.evo.com/outlet/skis/line-blend-2017#image=106007/451892/clone.jpg'
}
const Helmet =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Helmet',
    description: '\tNever ski without a brain bucket',
    imageUri: 'https://images.evo.com/imgp/700/83354/390695/anon-scout-helmet-big-kids-white-detail-1.jpg',
    adUri: 'https://www.evo.com/helmets/anon-scout-helmet-kids-2#image=83354/390695/anon-scout-helmet-big-kids-white-detail-1.jpg'
}

const Goggles =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Goggles',
    description: '\tGoggles let you see the gnarly lines you hit, and your buddies wipeouts',
    imageUri: 'https://images.evo.com/imgp/700/91931/515465/smith-i-o7-goggles-dirksenac-chromapop-sun-black-chromapop-storm-rose.jpg',
    adUri: 'https://www.evo.com/goggles/smith-i/o7#image=91931/515465/smith-i-o7-goggles-dirksenac-chromapop-sun-black-chromapop-storm-rose.jpg'
}
const Bindings =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Bindings',
    description: '\tBindings keep your boots attached to your skis',
    imageUri: 'https://images.evo.com/imgp/700/106132/451482/salomon-sth2-13-wtr-ski-bindings-2017-black-white.jpg',
    adUri: 'https://www.evo.com/alpine-ski-bindings/salomon-sth2-13-wtr'
}
const Pants =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski Pants',
    description: '\tOverall pants are the best to stay dry.',
    imageUri:'https://images.evo.com/imgp/700/115866/526678/ride-central-bib-pants-black-charcoal-melange.jpg',
    adUri: 'https://www.evo.com/shell-pants/ride-central-bib'
}
const Boots =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski Boots',
    description: '\tFull Tilt boots for a full send day. You need to go to a ski shop to get fitted into the right pair of boots.',
    imageUri: 'https://images.evo.com/imgp/700/122060/518186/clone.jpg',
    adUri: 'https://www.evo.com/alpine-ski-boots/full-tilt-be-pro-ltd#image=122060/518186/clone.jpg'
}

const Jacket =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski Jacket',
    description: '\tIf you look good you ski good',
    imageUri: 'https://images.evo.com/imgp/700/103388/467478/ride-hawthorne-jacket-brown-melange-charcoal-melange.jpg',
    adUri: 'https://www.evo.com/outlet/insulated-jackets/ride-hawthorne-jacket-17#image=103388/467478/ride-hawthorne-jacket-brown-melange-charcoal-melange.jpg'

}

const Gloves =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Gloves',
    description: '\tIt is important to invest in quality gloves to keep your hands warm',
    imageUri: 'https://images.evo.com/imgp/700/106309/466590/hestra-army-leather-gore-tex-gloves-black.jpg',
    adUri: 'https://www.evo.com/gloves/hestra-army-leather-gore-tex#image=106309/466590/hestra-army-leather-gore-tex-gloves-black.jpg'

}
const BeerKoozie =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Beer koozie',
    description: '\tJust because your beer is cold doesn\'t mean your hands need to be',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/91eKV6bJ06L._SL1500_.jpg',
    adUri: 'https://www.amazon.com/QualityPerfection-American-Neoprene-Insulation-Independence/dp/B071FRGRLV/ref=sr_1_32?s=home-garden&ie=UTF8&qid=1511067834&sr=1-32&keywords=beer+koozie'

}
const SkiPoles =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski poles',
    description: '\tSki poles help you get around, and make gnarly turns',
    imageUri: 'https://images.evo.com/imgp/700/122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg',
    adUri: 'https://www.evo.com/ski-poles/line-skis-wallischtick#image=122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg'
}
const Beer =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Beer',
    description: '\tThis is as important as skis',
    imageUri:'https://cdn.totalfratmove.com/wp-content/uploads/2016/08/62a9261e654650a441e6c5e34ffae4b5-1024x890.jpg',
    adUri: 'https://www.amazon.com/ref=nav_logo'
}

const SkiSocks =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski socks',
    description: '\tSocks are important to keep your feet warm and cotton just wont do',
    imageUri:'https://images.evo.com/imgp/700/122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg',
    adUri: 'https://www.evo.com/ski-poles/line-skis-wallischtick#image=122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg'
}



const SkiingLoadOut = {
    guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
    category: 'testCategory',
    description: 'Kill it on your first day on the slopes!',
    detailedDescription: 'If its your first time skiing rent the skis, poles and boots. Other than that you might as well buy this other guy because it will come in handy in any cold weather.',
    displayName: 'Simple Skiier',
    imageUri: 'https://images.evo.com/imgp/700/106007/451892/clone.jpg',
    items: [Ski,Bindings, SkiPoles, Jacket, Pants, Goggles, Gloves, Helmet, Beer, BeerKoozie]

}

//wrestlingLoadout
const WorkoutShirt = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Dry Fit shirt',
    description: '\tWear a shirt that keeps you cool while traning',
    imageUri: 'https://www.johnnymacs.com/content/images/thumbs/0020796_mens-nike-legend-20-training-t-shirt_550.jpeg',
    adUri: 'https://www.amazon.com/Legend-2-0-Short-Sleeve-Silver/dp/B010RRW11Q/ref=sr_1_10?s=apparel&amp;ie=UTF8&amp;qid=1511131306&amp;sr=1-10&amp;nodeID=7147441011&amp;psd=1&amp;keywords=nike+shirt&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=0f4cfd0cae3122e58e38d89c6f0eb37b&camp=1789&creative=9325'
}

const WorkoutShorts =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Fight Shorts',
    description: '\tWear shorts that don\'t have pockets to prevent hand injuries, I suggest fight shorts',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61-ZwBCBSfL._SL1024_.jpg',
    adUri: 'https://www.amazon.com/CLINCH-GEAR-Shorts-Size-30-Pewter/dp/B00UB5730Y/ref=sr_1_28_sspa?s=apparel&amp;ie=UTF8&amp;qid=1511130794&amp;sr=1-28-spons&amp;nodeID=1046660&amp;psd=1&amp;keywords=usa+wrestling+fight+shorts&amp;psc=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=c3a6dd3ba500065de1828553d049d73c&camp=1789&creative=9325'
}
const HeadGear =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Headgear',
    description: '\tYou need headgear to protect your ears',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61OW%2Bk85WNL._SL1001_.jpg',
    adUri: "https://www.amazon.com/Cliff-Keen-Two-Tone-Signature-Wrestling/dp/B001M8P2TS/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511218406&amp;sr=1-1&amp;keywords=Cliff+Keen+Signature+Wrestling+Headgear&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=5850a41b01269c86be79e0cfa6e5d66b&camp=1789&creative=9325"
}
const WrestlingShoes =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Wrestling Shoes',
    description: '\tQuality wrestling shoes are important for performance. I suggest adidas Performance Men\'s Adizero Wrestling XIV Wrestling Shoes or Nike Men\'s Inflict 3 Wrestling Shoes',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71gA6iKvSWL._SL1200_.jpg',
    adUri: 'https://www.amazon.com/adidas-AQ3325-HVC2-Speed-Shoe/dp/B01BPL8K9U/ref=cts_sh_2_vtp?pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_p=2897711222&amp;pf_rd_r=0be5d71c-d64c-11e7-9111-f57860bf806c&amp;pd_rd_wg=hS1qQ&amp;pf_rd_s=desktop-detail-softlines&amp;pf_rd_t=40701&amp;pd_rd_i=B01BPL8K9U&amp;pd_rd_w=eUqj8&amp;pf_rd_i=desktop-detail-softlines&amp;pd_rd_r=0be5d71c-d64c-11e7-9111-f57860bf806c&amp;_encoding=UTF8&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=6599f2235cfb9b98f2222172f680ac83&camp=1789&creative=9325'
}


const WrestlingSocks = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Wrestling Socks',
    description: '\tEvery wrestler knows you wear high socks... ',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81PTFhxgEwL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/dp/B010RWD4GM/ref=twister_B06Y4CJVQY?_encoding=UTF8&amp;psc=1&amp;th=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=eb07788e95d591b0699f07cecb38f22f&camp=1789&creative=9325'
}

const WaterBottle = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Water Bottle',
    description: '\tHydration is important for any physical activity',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61ZFTKhFdwL._SL1426_.jpg',
    adUri: 'https://www.amazon.com/dp/B00VKLNXKM/ref=twister_B00GA02OGW?&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=44c74ea29528b02db83ff43aebf4869a&camp=1789&creative=9325'
}
const WrestlingBag = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Wrestling Bag',
    description: '\tThis is the best bag to carry wrestling gear',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/91VZWjxJTNL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/ASICS-Gear-Bag-Black-Size/dp/B0000C07XF/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511133598&amp;sr=1-1&amp;keywords=Wrestling+bag&amp;dpID=51ltIsuWEBL&amp;preST=_SY300_QL70_&amp;dpSrc=srch&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=0091539195604398c653c0f3ba226eb3&camp=1789&creative=9325'
}




const WrestlingPractice = {
    guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
	author: 'Michael Soler',
    category: 'testCategory',
    description: 'Be ready for battle in the practice room with all the essential wrestling gear.',
    displayName: 'Wrestling Practice',
    imageUri: 'https://upload.wikimedia.org/wikipedia/en/6/6e/USA_Wrestling_logo.jpg',
    items: [WorkoutShirt, WorkoutShorts, WrestlingShoes, HeadGear, WrestlingSocks, WaterBottle, WrestlingBag]

}

// SoccerLoadout
const SoccerBall = {
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Soccer Ball',
    description: '\tA quality ball makes all the difference. Size 5 is the standard!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81psxlbbwxL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/dp/B00QSBNIPY/ref=twister_B00U60HL6U?&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=bde20f9010e32afce1a8afaf4e07a1a4&camp=1789&creative=9325'

}
const SoccerCleats =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Soccer Cleats',
    description: '\tNike Men\'s Mercurial is a quality cleat. The embossed ribbing aids with ball control, which you will need if you\'re planning on schooling everyone',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/812hcASVODL._UX500_.jpg',
    adUri: 'https://www.amazon.com/NIKE-Mercurial-Victory-Laser-Orange/dp/B01N1UQL4Z/ref=sr_1_76?s=apparel&amp;ie=UTF8&amp;qid=1511234484&amp;sr=1-76&amp;nodeID=679296011&amp;psd=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=4e0fb343995cd3a248c1fb6c2d8e07e8&camp=1789&creative=9325'
}
const ShinGuards =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Shin Guards',
    description: '\tNike Lite shin guards have a light durable shell and it includes Dry-fit sleeves to secure them.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/818tgk-DKjL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/Nike-Mercurial-Lite-Soccer-Guards/dp/B00GST7MLC/ref=zg_bs_3418401_6?_encoding=UTF8&amp;refRID=E1AQWXHT2WEX9DW9TPKW&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=6aadbc729438460f230831f351261c3a&camp=1789&creative=9325'
}
const SoccerSocks =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Long Socks',
    description: '\tClimalite socks are great for keeping your feet cool and dry. They also help to keep your shin guards in place!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/611EyU-FbiL._SL1200_.jpg',
    adUri: 'https://www.amazon.com/dp/B00ECZGWSS/ref=twister_B01C9I1ZBI?th=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=cf59bd0206c53372b26014c54ff34bc1&camp=1789&creative=9325'
}
const UnderArmourShorts =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Compression Mid Shorts',
    description: '\tThey reduce vibration in the leg, reduce chafing and improve circulation.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71KardKbi4L._SL1000_.jpg',
    adUri: 'https://www.amazon.com/Under-Armour-HeatGear-Compression-Shorts/dp/B00KXAGD5S/ref=sr_1_25?s=sporting-goods&amp;ie=UTF8&amp;qid=1511236411&amp;sr=1-25&amp;keywords=compression+shorts&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=45fd6a4b94fb71ce0b6d915f07c67724&camp=1789&creative=9325'
}
const SoccerShorts=
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Soccer Shorts',
    description: '\tIf you want to stay cool and comfortable while playing, get yourself a pair of soccer shorts.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81%2Bfq84VAKL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/adidas-Performance-Tastigo-Shorts-Large/dp/B00LEXXHBQ/ref=sr_1_7?s=sporting-goods&amp;ie=UTF8&amp;qid=1511238126&amp;sr=1-7&amp;keywords=soccer+shorts&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=54a7cc67c8842d0b27711978c43e917d&camp=1789&creative=9325'
}
const KeeperGloves =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Keeper Gloves',
    description: '\tGood keepers have good gloves! They will save you from wrist/finger rolls, and help you make game-changing saves.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81Kmbl1hXxL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/GK-Soccer-Goalkeeper-Gloves-Fingersaves/dp/B0741G5YQD/ref=sr_1_2_sspa?s=sporting-goods&amp;ie=UTF8&amp;qid=1511238565&amp;sr=1-2-spons&amp;keywords=soccer+gloves&amp;psc=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=e3b9ff5598cd11a58f2464f810958363&camp=1789&creative=9325'
}
const DuffelBag =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Duffel bag',
    description: '\tYou don\'t want to carry all your equipment in your hands.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71rcqqNcn5L._SL1200_.jpg',
    adUri: 'https://www.amazon.com/adidas-Team-Speed-Medium-Duffel/dp/B0058V7M3Y/ref=sr_1_20?s=sporting-goods&amp;ie=UTF8&amp;qid=1511239672&amp;sr=1-20&amp;keywords=soccer+bag&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=99220d32120252b631e3e2c77ffb282f&camp=1789&creative=9325'
}

const SoccerLoadout = {
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    author: 'Andrei Nutu',
    category:'testcategory',
    description: 'Put your FIFA skills to good use on the pitch!',
    displayName:'Soccer Starter Pack',
    imageUri: 'https://s-media-cache-ak0.pinimg.com/originals/91/61/3b/91613b425d9b4bfda3ee6043247bdc4e.jpg',
    items: [SoccerBall, SoccerCleats, ShinGuards, SoccerSocks, SoccerShorts, KeeperGloves, DuffelBag, UnderArmourShorts]
}




// New years party loadout



const NewYearsPartyHats =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Party Hats!',
    description: 'Halloween is over but party goers are always looking for ways to dress up without putting in too much effort. Help them out with these cheap fun packs of accessories that will turn your party into something special.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81f57sygaPL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/Gold-Legacy-Party-Accessory-count/dp/B004H2M9S8/ref=sr_1_12?ie=UTF8&amp;qid=1511884182&amp;sr=8-12&amp;keywords=new%2Byears%2Beve%2Bparty%2Bsupplies&amp;th=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=f2b25344fb0e84fb5c6998a938ddcf3a&camp=1789&creative=9325'
}

const NewYearsBaloons =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Themed Balloons',
    description: 'Balloons... They\'re fun to pop and entertaining when thrown at people, not to mention they look great. You could even get creative and rig up a way to make them fall out of the ceiling when the ball drops at midnight!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81AW1ckP06L._SL1500_.jpg',
    adUri: 'https://www.amazon.com/dp/B0779CXJQK/ref=sspa_dk_detail_2?psc=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=789795b78c7a6c3411e27cb042d761b0&camp=1789&creative=9325'
}

const NewYearsBanner =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Banner',
    description:'Look, you need a sign to remind people why they\'re at your house. If you\'ve got the extra time make it yourself, but a Happy New Year sign is perfect for taking pictures in front of and keeping people in the mood of celebrating the New Year.',
    imageUri:'https://images-na.ssl-images-amazon.com/images/I/61poikpjniL._SL1002_.jpg',
    adUri: 'https://www.amazon.com/BESTOYARD-Banner-Hanging-Decorations-Supplies/dp/B07554677Q/ref=sr_1_20?ie=UTF8&amp;qid=1511884870&amp;sr=8-20&amp;keywords=new+years+eve+party+supplies&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=98a88f402255ae47c4509a6ac59f47e4&camp=1789&creative=9325'
}

const NewYearsLights =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Repurposed Christmas Lights',
    description: 'It\'s only 6 days after Christmas. Chances are you haven\'t taken down all your Christmas lights. So why don\'t you re-purpose the white ones and get the ambiance just the way you like it. Although we\'re re-using Christmas decorations remember to at-least get rid of the tree.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61h7QWYfVbL._SL1280_.jpg',
    adUri: 'https://www.amazon.com/Everglow-2980-22-Clear-White-Light/dp/B002LLGFJG/ref=sr_1_3?ie=UTF8&amp;qid=1511885156&amp;sr=8-3&amp;keywords=white+christmas+lights&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=e22029797b608ad29e94e51c5a9bfae4&camp=1789&creative=9325' 
}

// const EmptyItem =
// {
//     guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
//     displayName: ,
//     description:,
//     imageUri:,
//     adUri: 
// }

const NewYearPartyLoadout = {
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    category:'testcategory',
    description: 'Get the motivation to throw your New Year\'s Eve party and theme it the right way.',
    detailedDescription: 'It doesn\'t take much to throw an awesome  themed New Year\'s Eve party. All you have to do is pickup the phone give a couple pals a call, pour a couple drinks of whatever suits your fancy, and spend maybe 15 minutes decorating or a little longer if you pass out from blowing up balloons.',
    displayName:'New Year\'s Eve Party',
    imageUri: 'https://openclipart.org/image/2400px/svg_to_png/181652/party.png',
    items: [NewYearsLights,NewYearsBanner, NewYearsBaloons, NewYearsPartyHats]
}


//Mens Winter Loadout
const BlackJeans =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Levis 511 jeans',
   description: '',
   imageUri: 'https://m.media-amazon.com/images/I/81cWfF7DNjL._SX480_.jpg',
   adUri: 'https://www.amazon.com/Levis-Mens-Made-Slim-Black/dp/B071JRNGMM/ref=sr_1_22?s=apparel&amp;ie=UTF8&amp;qid=1511931899&amp;sr=1-22&amp;nodeID=7141123011&amp;psd=1&amp;keywords=black+levi+511&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=3cd7b7ac79617184e8fe811a461d37a0&camp=1789&creative=9325'
  
}

const JeanJacket =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Levis Trucker Jacket',
   description: 'Stay warm and look good with this awesome jacket.',
   imageUri: 'https://m.media-amazon.com/images/I/81cWfF7DNjL._SX480_.jpg',
   adUri: 'https://www.amazon.com/Levis-Mens-Made-Slim-Black/dp/B071JRNGMM/ref=sr_1_22?s=apparel&amp;ie=UTF8&amp;qid=1511931899&amp;sr=1-22&amp;nodeID=7141123011&amp;psd=1&amp;keywords=black+levi+511&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=3cd7b7ac79617184e8fe811a461d37a0&camp=1789&creative=9325'
  
}
const MocToeboot =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Moc Toe boots',
   description: '',
   imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81WFYcSV3xL._UX535_.jpg',
   adUri: 'https://www.amazon.com/Red-Wing-Heritage-Moc-Lug/dp/B002YHA63I/ref=sr_1_36?s=apparel&amp;ie=UTF8&amp;qid=1511934937&amp;sr=1-36&amp;nodeID=7147441011&amp;psd=1&amp;keywords=The%2BMoc-Toe%2BBoot&amp;th=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=c2412572b6ccaa7dd6ce07daec0d36ed&camp=1789&creative=9325'
  
}

const Woolsocks =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Wool Socks',
   description: '',
   imageUri: 'https://images-na.ssl-images-amazon.com/images/I/91fH0ju9riL._UY550_.jpg',
   adUri: 'https://www.amazon.com/Carhartt-Mens-Extremes-Weather-Socks/dp/B003CMWX0S/ref=sr_1_6?s=apparel&amp;ie=UTF8&amp;qid=1511935525&amp;sr=1-6&amp;nodeID=7147441011&amp;psd=1&amp;keywords=men+boot+socks&amp;refinements=p_72%3A2661618011&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=b9d49aa583139e8593a6253b4880432c&camp=1789&creative=9325'
  
}

const Scarf =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Scarf',
   description: '',
   imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81la9UF2tQL._UY550_.jpg',
   adUri: 'https://www.amazon.com/gp/product/B00OL6M18S/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B00OL6M18S&amp;linkCode=as2&amp;tag=primer05-20&amp;linkId=I5WVFMO66RA6P6MB&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=2375e76b4fc8bab44d3e0566ac501e4d&camp=1789&creative=9325'
  
}


const WinterWatch =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Watch',
   description: '',
   imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81tb5TIaUEL._UY500_.jpg',
   adUri: 'https://www.amazon.com/gp/product/B00LVUO482/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B00LVUO482&amp;linkCode=as2&amp;tag=primer05-20&amp;linkId=R6BHJCVUWG35JR7X&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=9d197fee08de5b07992ecb47482ebbf1&camp=1789&creative=9325'
  
}

const WoolBlendSweater =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Sweater',
   description: '',
   imageUri: 'https://images-na.ssl-images-amazon.com/images/I/51XGoFcp9%2BL._SL500_.jpg',
   adUri: 'https://www.amazon.com/Just-No-Logo-Sweater-Pullover/dp/B01M10OFSR/ref=sr_1_8?s=apparel&amp;ie=UTF8&amp;qid=1512100969&amp;sr=1-8&amp;nodeID=7141123011&amp;psd=1&amp;keywords=wool+blend+sweater+men&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=85771b6626053fcf8e1d405b3540f7ad&camp=1789&creative=9325'
  
}
const brownBelt =
{
   guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
   displayName: 'Belt ',
   description: '',
   imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81j4MZetZ3L._UX425_.jpg',
   adUri: 'https://www.amazon.com/Marinos-Genuine-Leather-Single-Buckle/dp/B0716KX9JX/ref=sr_1_1?s=apparel&amp;ie=UTF8&amp;qid=1511937025&amp;sr=1-1&amp;nodeID=7141123011&amp;psd=1&amp;keywords=brown+belt+for+men&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=00d9f61284a507cdc6313880b7ffed0b&camp=1789&creative=9325'
  
}



const WinterLoadout = {
   guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
    author: 'Michael Soler',
   category: 'testCategory',
   description: 'Look good while battling the cold with these winter essentials. ',
   displayName: 'Men\'s winter essentials',
   imageUri: 'https://openclipart.org/image/2400px/svg_to_png/189278/snow-flake-5.png',
   items: [JeanJacket, BlackJeans, WoolBlendSweater, MocToeboot, Woolsocks, WinterWatch, Scarf, brownBelt]
}
// Stocking Stuffers LoadOut

 const Stockings = {
 
     guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
     displayName: 'Christmas Stocking',
     description: 'If you haven\'t kept the Christmas stockings from the previous years, this is a classic stocking you can string up!',
     imageUri:'https://secure.img2-fg.wfcdn.com/im/94565897/resize-h800%5Ecompr-r85/4536/45367368/Knitted+Stocking.jpg',
     adUri: 'https://www.wayfair.com/holiday-decor/pdp/glitzhome-knitted-stocking-glho1928.html'
 }



  const IphoneXCase =
 {
     guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
     displayName:'Iphone X Marble Case' ,
     description:'Chances are someone in your family just upgraded their Iphone, and is shopping for a dope case to show off their latest purchase.',
     imageUri:'https://images-na.ssl-images-amazon.com/images/I/71ms22vGEXL._SL1500_.jpg',
     adUri:'https://www.amazon.com/iPhone-TORRAS-Flexible-Silicone-Pattern/dp/B076JC1RNL/ref=sr_1_40?s=wireless&amp;ie=UTF8&amp;qid=1512009458&amp;sr=1-40&amp;refinements=p_n_feature_nine_browse-bin%3A17290046011&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=304fb5b0ee70288435e3c62e5eadb40e&camp=1789&creative=9325'
 }

  const SteelFlask =
 {
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
     displayName:'Areaware Liquid Body Flask',
     description: 'The flask puts an adult spin on the Christmas tradition, but its fun to have one of these guys hanging around for a quick top off this Christmas season! This the season to be tipsy!',
     imageUri:'https://images-na.ssl-images-amazon.com/images/I/714bZRwoQhL._SL1500_.jpg',
     adUri:'https://www.amazon.com/Areaware-PRFL1-Liquid-Body-Flask/dp/B00OVF6F04?&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=36c7f03a77a2e7da46d1be8969d83b0b&camp=1789&creative=9325' 
 }

  const ScalpMassager =
 {
     guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
     displayName: 'Scalp Head Massager',
     description:'It\'s bound to get stressfull when the whole family is gathered together for Christmas, so pass these around. They come in packs of 3 and are super relaxing!',
     imageUri:'https://www.amazon.com/ROSENICE-Massager-Therapeutic-Scratcher-Relaxation/dp/B074QPKSX7/ref=sr_1_18_a_it?ie=UTF8&qid=1512011064&sr=8-18&keywords=scalp+massager',
     adUri: 'https://www.amazon.com/ROSENICE-Massager-Therapeutic-Scratcher-Relaxation/dp/B074QPKSX7/ref=sr_1_18_a_it?ie=UTF8&amp;qid=1512011064&amp;sr=8-18&amp;keywords=scalp+massager&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=f22516f1873b7f57df56f715db9bf32b&camp=1789&creative=9325'
 }

const StockingStuffersLoadout = {

guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
category:'testcategory',
description: 'Fill the stockings this Christmas with these fresh items',
detailedDescription: 'Christmas Day is approaching soon and you haven\'t need help choosing out some awesome stocking stuffer items. We got you!',
displayName:'Stocking Stuffers',
imageUri: 'https://heavyeditorial.files.wordpress.com/2016/10/untitled-design96.jpg?quality=65&strip=all&strip=all',
items: [Stockings,ScalpMassager, SteelFlask,IphoneXCase]
}


const HeadLamp =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Headlamp',
    description: 'Yes, these are a little dorky but I\'ll tell you what they come in handy. A lot of hikers miss out on hikes because they are worried about running out of daylight. Well with this headlight you will always have the light you need to finish your hike. One of my favorite things to do is do a hike towards the end of the day then watch the sunset from the top and hike down in the dark.',
    imageUri:'https://images-na.ssl-images-amazon.com/images/I/71a7LnW6LlL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/V800-Flashlight-Waterproof-Adjustable-Headlight/dp/B00SJNM6R0/ref=sr_1_3_acs_sk_twc_2?ie=UTF8&amp;qid=1512095468&amp;sr=8-3-acs&amp;keywords=head+lamp&amp;tag=ospsearch-20&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=a380a237f59c5920b129bd9f056394b4&camp=1789&creative=9325'
}

const LifeStraw =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Life Straw',
    description: 'This is a little extra but a cool little stocking stuffer that may or may not be used. This is something I think you get for the novelty, although some people swear by them.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/91BoQqghetL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/LifeStraw-Personal-Camping-Emergency-Preparedness/dp/B006QF3TW4/ref=pd_sim_468_12?_encoding=UTF8&amp;psc=1&amp;refRID=FP9P6KXH5BSTP6ETAKXF&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=95c96dbb1384e086774b0bfd6ae71812&camp=1789&creative=9325' 
}

const PortableHammock =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Portable Hammock',
    description: 'Hikes aren’t all about the workout of getting up the mountain, bring this hammock, a speaker, and maybe a sandwich and setup and enjoy the mountain breeze.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/719EPaGXuwL._SL1000_.jpg',
    adUri: 'https://www.amazon.com/Newdora-Ultralight-Multifunctional-Lightweight-Backpacking/dp/B01J7BPZLQ/ref=sr_1_7?s=sporting-goods&amp;ie=UTF8&amp;qid=1512095860&amp;sr=1-7&amp;keywords=hammock+camping&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=160a3eaef1cd2b1c387523a80e987131&camp=1789&creative=9325' 
}

const BluetoothSpeaker =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Waterproof Bluetooth Speaker',
    description: 'Some people like to enjoy the sounds of nature other people like to blast hardcore rap on their way up the mountain, to each his own. Either way if you have a day hiker chances are they’d appreciate a rugged bluetooth speaker to take with them on their adventures.',
    imageUri:'https://images-na.ssl-images-amazon.com/images/I/91hOv%2ByScyL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/Waterproof-Bluetooth-Speaker-Portable-Wireless/dp/B00ZPI9XDC/ref=sr_1_2?s=electronics&amp;ie=UTF8&amp;qid=1512099762&amp;sr=1-2&amp;keywords=submersible+speaker&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=edf466b0473297954353b7b774a04fcd&camp=1789&creative=9325'
}

const DaypackOsprey =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Day Pack',
    description: 'Your hiker probably already has a backpack but I bet they probably don’t have a backpack dedicated purely for hiking. Osprey is a well know brand for making great packs and having a pack specific for hiking is super convenient because you can keep all your hiking gear in it and you don\'t have to keep getting your everyday backpack dirty.',
    imageUri:'https://images-na.ssl-images-amazon.com/images/I/71nF-i9uziL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/Osprey-Packs-Talon-Backpack-Medium/dp/B01IJKZ566/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1512096380&amp;sr=1-1&amp;keywords=osprey+packs+talon+22&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=b8276c12b8cdb7a31bb2f413dc1ded2b&camp=1789&creative=9325'
}

const ShoeBag =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Shoe Bag',
    description: 'Shoe bags may be a little overkill for your day to day shoes, but your day hiker’s shoes are probably getting covered in mud and we wouldn’t want them to ruin their brand new backpack by stuffing their dirty shoes in it. Usually I bring a change of shoes to put on after my hike so I don’t get my car dirty, but throwing my dirty shoes in the car without the bag is still going to get the car dirty which makes show bags clutch.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71F08xltBoL._SL1200_.jpg',
    adUri: 'https://www.amazon.com/iwill-CREATE-PRO-Dust-proof-Transparent/dp/B01NAPP3SM/ref=sr_1_2?s=apparel&amp;ie=UTF8&amp;qid=1512096804&amp;sr=1-2&amp;nodeID=7141123011&amp;psd=1&amp;keywords=cloth+boot+bag&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=8d88d4a35a4330291dc123c96da0062b&camp=1789&creative=9325'
}

const AltimeterWatch =
{
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    displayName: 'Altimeter Device',
    description: 'Knowing how high you\'ve hiked is fun. Usually trails tell you the elevation of the peak. So being able to check how high you’ve hiked throughout the trip is fun. Do you need it? No, but its cool and a lot of cheap watches have altimeters built in.',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61jpmrGX6AL._SL1000_.jpg',
    adUri: 'https://www.amazon.com/Waterproof-Watchband-eSmart-Altimeter-Pedometer/dp/B076JCD2TP/ref=sr_1_5?s=wireless&amp;ie=UTF8&amp;qid=1512097750&amp;sr=1-5&amp;keywords=altimeter&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=5688941b449fb3ba7756e87472c1774d&camp=1789&creative=9325' 
}

const DayHikerStockingStuffer = {
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    category:'testcategory',
    description: 'We skip all the boring trivial gear like footwear in this loadout and show you the cool gadgets and surprisingly necessary items that will excite your day hiker Christmas morning.',
    detailedDescription: 'We are going to assume that the hiker in your life already has the basics. They probably already have a pair of athletic shoes or a pair of boots they wear, but I bet they don\'t have these gadgets and if they have something similar they would still be excited about getting an upgrade.',
    displayName:'Day Hiker\'s Stocking Stuffer',
    imageUri: 'https://openclipart.org/image/2400px/svg_to_png/221844/1435942396.png',
    items: [HeadLamp, AltimeterWatch, PortableHammock,  DaypackOsprey, ShoeBag, BluetoothSpeaker, LifeStraw]
}
