

export function getTrendingList()
{
    var list = [CampingLoadout, SkiingLoadOut, WrestlingPractice];

    return list;
}

export function  getEntries(name)
{
    if(name === undefined)
    {
        console.log("invalid name returning undefined");
        return undefined;
    }
    
    var loadoutString = name.toLowerCase();
    
    var result = undefined;
    switch(name.toLowerCase())
    {
        case "smoke":
        case "weed":
        case "smoking weed":
            result = SmokingWeedLoadout;
            break;
        case "hiking":
            result = HikingLoadout;;
            break;
        default:
            result = EmptyLoadout;
            break;
    }

    console.log("DB Returning[" + result.toString() + "]");
    return result;
}

// Templates
// Generate guid using this website with the check boxes UPPERCase, Hyphens, and UrlEncode Set
// https://www.guidgenerator.com/online-guid-generator.aspx 



const EmptyItem =
    {
        guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
        displayName: 'Bug Spray',
        description: 'Just about anywhere you camp with temperatures about 60f you\'re going to need bugspray',
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71Vd-KQCgZL._SL1500_.jpg',
        adUri: 'https://www.amazon.com/Repel-Insect-Repellent-Single-Bottle/dp/B004H89KFC/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511060750&amp;sr=1-1&amp;keywords=bugspray&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=27bf44bc002df4f42695f3877e25a8e4&camp=1789&creative=9325' 
    }

const EmptyLoadout = {
        guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
        category: 'testCategory',
        description: 'Some blah blah blah reason about why you need this pack',
        displayName: 'EmptyLoadout',
        imageUri: 'someUri',
        items: [EmptyItem,EmptyItem,EmptyItem,EmptyItem]

    }

// camping loadout
const BugSpray =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Bug Spray',
    description: 'Just about anywhere you camp with temperatures about 60f you\'re going to need bugspray',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71Vd-KQCgZL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/Repel-Insect-Repellent-Single-Bottle/dp/B004H89KFC/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511060750&amp;sr=1-1&amp;keywords=bugspray&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=27bf44bc002df4f42695f3877e25a8e4&camp=1789&creative=9325' 
}

const Tent =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Tent',
    description: 'If you\'re planning on staying overnight, you will want somewhere to sleep!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/51-9me2dSIL._SL1000_.jpg',
    adUri: 'https://www.amazon.com/EverKing-Automatic-Waterproof-Backpacking-Ultralight/dp/B06XCGBYSM/ref=sr_1_2_sspa?s=outdoor-recreation&amp;ie=UTF8&amp;qid=1511066655&amp;sr=1-2-spons&amp;keywords=tent&amp;psc=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=e5eabdcdafbce695eceb8b3a06419157&camp=1789&creative=9325' 
}

const TentFootPrint =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Tent Foot Print',
    description: 'Rookie campers might not know this but the ground contains a ton of moisture and putting a tarp under your tent can keep your tent dry and make it last longer!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61X9XGUQE0L._SL1000_.jpg',
    adUri: 'https://www.amazon.com/TOMSHOO-Waterproof-Hammock-Blanket-Mutil-functional/dp/B0752BSD7F/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511067074&amp;sr=1-1&amp;keywords=Tent+footprint+%28ground+cover+for+under+your+tent%29&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=1de11fd6a5ec7c2aceea372f5c350d28&camp=1789&creative=9325' 
}

const MiniCampBurner =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Mini Camp Burner',
    description: 'Pro campers know that you want to be able to have a hot meal but don\'t want to deal with packing a huge stove. A little burner like this will get you the functionality you need without breaking the bank!',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71fhmitJj-L._SL1000_.jpg',
    adUri: 'https://www.amazon.com/Petforu-Cookware-Backpacking-Ignition-Canister/dp/B015SRB58U/ref=sr_1_4?s=sporting-goods&amp;ie=UTF8&amp;qid=1511067557&amp;sr=1-4&amp;keywords=mini+camp+stove&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=c889f85756ab49155be1b2cc99e0fec2&camp=1789&creative=9325' 
}

const CampChair =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Camp Chair',
    description: 'You\'re always going to need a camp chair. You might think there will be something like a fallen tree to sit on, but trust me you\'re wrong. Bring you\'re own seat so you can tell others to move their meat',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61JHdo0sNlL._SL1000_.jpg',
    adUri: 'https://www.amazon.com/Coleman-Oversized-Quad-Chair-Cooler/dp/B0033990ZQ/ref=sr_1_3?s=sporting-goods&amp;ie=UTF8&amp;qid=1511068355&amp;sr=1-3&amp;keywords=camp+chair&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=d0264765a91312223acc07c94911378c&camp=1789&creative=9325' 
}


const CampingLoadout = {
    guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
    category: 'testCategory',
    description: 'Who doesnt love camping?',
    displayName: 'Camping',
    imageUri: 'https://imgs.tuts.dragoart.com/how-to-draw-a-tent_1_000000005120_5.jpg',
    items: [Tent, TentFootPrint,MiniCampBurner, CampChair, BugSpray]
}


// m

const Ski =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Skis',
    description: 'You need something to shred the pow. Choose your weapon wisely. I suggest you go to a ski shop to get their recomendaiton for your size and ski level.',
    imageUri: 'https://images.evo.com/imgp/700/106007/451892/clone.jpg',
    adUri: 'https://www.evo.com/outlet/skis/line-blend-2017#image=106007/451892/clone.jpg'
}
const Helmet =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Helmet',
    description: 'Never ski without a brain bucket',
    imageUri: 'https://images.evo.com/imgp/700/83354/390695/anon-scout-helmet-big-kids-white-detail-1.jpg',
    adUri: 'https://www.evo.com/helmets/anon-scout-helmet-kids-2#image=83354/390695/anon-scout-helmet-big-kids-white-detail-1.jpg'
}

const Goggles =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Goggles',
    description: 'Goggles let you see the gnarly lines you hit, and your buddies wipeouts',
    imageUri: 'https://images.evo.com/imgp/700/91931/515465/smith-i-o7-goggles-dirksenac-chromapop-sun-black-chromapop-storm-rose.jpg',
    adUri: 'https://www.evo.com/goggles/smith-i/o7#image=91931/515465/smith-i-o7-goggles-dirksenac-chromapop-sun-black-chromapop-storm-rose.jpg'
}
const Bindings =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Bindings',
    description: 'Bindings keep your boots attached to your skis',
    imageUri: 'https://images.evo.com/imgp/700/106132/451482/salomon-sth2-13-wtr-ski-bindings-2017-black-white.jpg',
    adUri: 'https://www.evo.com/alpine-ski-bindings/salomon-sth2-13-wtr'
}
const Pants =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski Pants',
    description: 'Overall pants are the best to stay dry.',
    imageUri:'https://images.evo.com/imgp/700/115866/526678/ride-central-bib-pants-black-charcoal-melange.jpg',
    adUri: 'https://www.evo.com/shell-pants/ride-central-bib'
}
const Boots =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski Boots',
    description: 'Full Tilt boots for a full send day. You need to go to a ski shop to get fitted into the right pair of boots.',
    imageUri: 'https://images.evo.com/imgp/700/122060/518186/clone.jpg',
    adUri: 'https://www.evo.com/alpine-ski-boots/full-tilt-be-pro-ltd#image=122060/518186/clone.jpg'
}

const Jacket =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski Jacket',
    description: 'If you look good you ski good',
    imageUri: 'https://images.evo.com/imgp/700/103388/467478/ride-hawthorne-jacket-brown-melange-charcoal-melange.jpg',
    adUri: 'https://www.evo.com/outlet/insulated-jackets/ride-hawthorne-jacket-17#image=103388/467478/ride-hawthorne-jacket-brown-melange-charcoal-melange.jpg'

}

const Gloves =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Gloves',
    description: 'It is important to invest in quality gloves to keep your hands warm',
    imageUri: 'https://images.evo.com/imgp/700/106309/466590/hestra-army-leather-gore-tex-gloves-black.jpg',
    adUri: 'https://www.evo.com/gloves/hestra-army-leather-gore-tex#image=106309/466590/hestra-army-leather-gore-tex-gloves-black.jpg'

}
const BeerKoozie =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Beer koozie',
    description: 'Just because your beer is cold doesn\'t mean your hands need to be',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/91eKV6bJ06L._SL1500_.jpg',
    adUri: 'https://www.amazon.com/QualityPerfection-American-Neoprene-Insulation-Independence/dp/B071FRGRLV/ref=sr_1_32?s=home-garden&ie=UTF8&qid=1511067834&sr=1-32&keywords=beer+koozie'

}
const SkiPoles =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski poles',
    description: 'Ski poles help you get around, and make gnarly turns',
    imageUri: 'https://images.evo.com/imgp/700/122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg',
    adUri: 'https://www.evo.com/ski-poles/line-skis-wallischtick#image=122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg'
}
const Beer =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Beer',
    description: 'This is as important as skis',
    imageUri:'https://cdn.totalfratmove.com/wp-content/uploads/2016/08/62a9261e654650a441e6c5e34ffae4b5-1024x890.jpg',
    adUri: 'https://www.amazon.com/ref=nav_logo'
}

const SkiSocks =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Ski socks',
    description: 'Socks are important to keep your feet warm ',
    imageUri:'https://images.evo.com/imgp/700/122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg',
    adUri: 'https://www.evo.com/ski-poles/line-skis-wallischtick#image=122053/511824/line-skis-wallischtick-ski-poles-2018-black.jpg'
}



const SkiingLoadOut = {
    guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
    category: 'testCategory',
    description: 'Kill it on your first day on the slopes!',
    displayName: 'Skiing',
    imageUri: 'https://images.evo.com/imgp/700/106007/451892/clone.jpg',
    items: [Ski,Bindings, SkiPoles, Jacket, Pants, Goggles, Gloves, Helmet, Beer, BeerKoozie]

}


const WorkoutShirt = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Dry Fit shirt',
    description: 'Wear a shirt that keeps you cool while traning',
    imageUri: 'https://www.johnnymacs.com/content/images/thumbs/0020796_mens-nike-legend-20-training-t-shirt_550.jpeg',
    adUri: 'https://www.amazon.com/Legend-2-0-Short-Sleeve-Silver/dp/B010RRW11Q/ref=sr_1_10?s=apparel&amp;ie=UTF8&amp;qid=1511131306&amp;sr=1-10&amp;nodeID=7147441011&amp;psd=1&amp;keywords=nike+shirt&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=0f4cfd0cae3122e58e38d89c6f0eb37b&camp=1789&creative=9325'
}

const WorkoutShorts =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Fight Shorts',
    description: 'Wear shorts that don\'t have pockets to prevent hand injuries, I suggest fight shorts',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61-ZwBCBSfL._SL1024_.jpg',
    adUri: 'https://www.amazon.com/CLINCH-GEAR-Shorts-Size-30-Pewter/dp/B00UB5730Y/ref=sr_1_28_sspa?s=apparel&amp;ie=UTF8&amp;qid=1511130794&amp;sr=1-28-spons&amp;nodeID=1046660&amp;psd=1&amp;keywords=usa+wrestling+fight+shorts&amp;psc=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=c3a6dd3ba500065de1828553d049d73c&camp=1789&creative=9325'
}

const WrestlingShoes =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Wrestling Shoes',
    description: 'Quality wrestling shoes are important for performance. I suggest adidas Performance Men\'s Adizero Wrestling XIV Wrestling Shoes or Nike Men\'s Inflict 3 Wrestling Shoes',
    imageUri: 'http://weplaysports.com/media/images/ADM29839-Large.jpg',
    adUri: 'https://www.amazon.com/adidas-Adizero-Wrestling-Shoes-Black/dp/B00JR4V7OI/ref=sr_1_cc_1?s=aps&amp;ie=UTF8&amp;qid=1511132232&amp;sr=1-1-catcorr&amp;keywords=Nike+inflict+wrestling+shoes&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=8e2a25f1cb47ecd2304efb561d135ee4&camp=1789&creative=9325'
}


const WrestlingSocks = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Wrestling Socks',
    description: 'Every wrestler knows you wear high socks... ',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/81PTFhxgEwL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/dp/B010RWD4GM/ref=twister_B06Y4CJVQY?_encoding=UTF8&amp;psc=1&amp;th=1&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=eb07788e95d591b0699f07cecb38f22f&camp=1789&creative=9325'
}

const WaterBottle = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Water Bottle',
    description: 'Hydration is important for any physical activity',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61ZFTKhFdwL._SL1426_.jpg',
    adUri: 'https://www.amazon.com/dp/B00VKLNXKM/ref=twister_B00GA02OGW?&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=44c74ea29528b02db83ff43aebf4869a&camp=1789&creative=9325'
}
const WrestlingBag = 
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Wrestling Bag',
    description: 'This is the best bag to carry wrestling gear',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/91VZWjxJTNL._SL1500_.jpg',
    adUri: 'https://www.amazon.com/ASICS-Gear-Bag-Black-Size/dp/B0000C07XF/ref=sr_1_1?s=sporting-goods&amp;ie=UTF8&amp;qid=1511133598&amp;sr=1-1&amp;keywords=Wrestling+bag&amp;dpID=51ltIsuWEBL&amp;preST=_SY300_QL70_&amp;dpSrc=srch&_encoding=UTF8&tag=ericjsoler-20&linkCode=ur2&linkId=0091539195604398c653c0f3ba226eb3&camp=1789&creative=9325'
}




const WrestlingPractice = {
    guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
	author: 'Michael Soler',
    category: 'testCategory',
    description: 'Be ready for battle in the practice room with all the essential wrestling gear',
    displayName: 'Wrestling Practice',
    imageUri: 'https://upload.wikimedia.org/wikipedia/en/6/6e/USA_Wrestling_logo.jpg',
    items: [WorkoutShirt, WorkoutShorts, WrestlingShoes, WrestlingSocks, WaterBottle, WrestlingBag]

}



// Smoke Weed Loadout and items
const Weed =
{
    guid: '9D22EBE6-FA8C-4E29-BF4D-963FEF5F9931',
    displayName: 'Weed',
    description: 'Some blah blah blah reason about why you need this item',
    imageUri: 'some path to an image',
    uri: 'https://eil.com/shop/moreinfo.asp?catalogid=466977' 
}

const MjPipe =
{
    guid: '17F9CDFF-B577-4852-976C-DA26A35E1E74',
    displayName: 'Pipe',
    description: 'Some blah blah blah reason about why you need this item',
    imageUri: 'some path to an image',
    uri: 'https://eil.com/shop/moreinfo.asp?catalogid=466977' 
}

const Lighter =
{
    guid: 'A321D67F-32CC-44BB-B0F7-5F14DF6AD216',
    displayName: 'Lighter',
    description: 'Some blah blah blah reason about why you need this item',
    imageUri: 'some path to an image',
    uri: 'https://eil.com/shop/moreinfo.asp?catalogid=466977' 
}

const Gum =
{
    guid: '16A404C0-A93D-407D-8735-D8EECF35A331',
    displayName: 'Gum',
    description: 'Some blah blah blah reason about why you need this item',
    imageUri: 'some path to an image',
    uri: 'https://eil.com/shop/moreinfo.asp?catalogid=466977' 
}

const SmokingWeedLoadout = {
    guid: 'F2D7C3AD-CF1D-483E-AC90-7F56EE608837',
    category: 'Drugs',
    description: 'Some blah blah blah reason about why you need this pack',
    displayName: 'Smoking Weed Loadout',
    imageUri: 'someUri',
    items: [Weed, MjPipe, Lighter, Gum]
}


// Hiking loadout
const Daypack =
{
    guid: '6840D8FC-B2C8-4DDE-82C2-CB9E28B5788B',
    displayName: 'Daypack',
    description: 'Some blah blah blah reason about why you need this item',
    imageUri: 'some path to an image',
    uri: 'https://eil.com/shop/moreinfo.asp?catalogid=466977' 
}

const HikingBoots =
{
    guid: '6C816D14-33A0-45D1-8F56-32218EA21F03',
    displayName: 'Hiking Boots',
    description: 'Some blah blah blah reason about why you need this item',
    imageUri: 'some path to an image',
    uri: 'https://eil.com/shop/moreinfo.asp?catalogid=466977' 
}

const HikingLoadout = {
    guid: '40118D61-18E1-48F9-9A81-EE3E91396554',
    category: 'testCategory',
    description: 'Some blah blah blah reason about why you need this pack',
    displayName: 'Hiking Essentials',
    imageUri: 'someUri',
    items: [Daypack, HikingBoots]

}
