


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
        displayName: 'EmptyItemName',
        description: 'Some blah blah blah reason about why you need this item',
        imageUri: 'some path to an image',
        uri: 'https://eil.com/shop/moreinfo.asp?catalogid=466977' 
    }

const EmptyLoadout = {
        guid: '694840D5-88F4-4250-94FF-A820377CF9FB',
        category: 'testCategory',
        description: 'Some blah blah blah reason about why you need this pack',
        displayName: 'EmptyLoadout',
        imageUri: 'someUri',
        entryList: [EmptyItem,EmptyItem,EmptyItem,EmptyItem]

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
    entryList: [Weed, MjPipe, Lighter, Gum]
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
    entryList: [Daypack, HikingBoots]

}
