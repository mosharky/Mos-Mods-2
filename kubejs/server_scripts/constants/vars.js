//priority: 50

let shapedRecipes = []



// functions
// https://discord.com/channels/303440391124942858/1205293329596682331/1205293329596682331
const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const TagKey = Java.loadClass('net.minecraft.tags.TagKey')
/**
 * 
 * @param {String} tag with no #hashtag
 * @returns {Array} array of entity id strings in given tag
 */
function entityTagToArray(tag) {
    let arr = []
    const tagKeyThing = TagKey.create(BuiltInRegistries.ENTITY_TYPE.key(), tag)  // creating internal tagKey of tag
    BuiltInRegistries.ENTITY_TYPE.getTagOrEmpty(tagKeyThing).forEach(entry => {  // .getTagOrEmpty() returns an iterable thing of entities in tag
        arr.push(BuiltInRegistries.ENTITY_TYPE.getKey(entry.value()).toString())  // idk what the methods here to, but the entity ids get turned into a string at the end!
    })
    return arr
}


/**
 * Function to make fluids much easier in e.custom() recipes
 * @param {Array} arr format [fluidIdString, fluidAmount]
 * @returns {Fluid | Object} either Fluid.of('fluid').toJson(), or if its a tag, {tag: fluidIdString, amount: fluidAmount }
 */
function arrayFluid(arr) {
    if (arr[0].charAt(0) == '#') return { tag: arr[0].slice(1), amount: arr[1] }
    else return Fluid.of(arr[0], arr[1]).toJson()
}


/**
 * Can only be used in tags event only
 * @param {String | Array} tag string tag or array of tags
 * @returns {Array}
 */
function tagToArray(e, tags) {
    let finalArray = []
    if (Array.isArray(tags)) {
        tags.forEach(tag => {
            finalArray.push(e.get(tag).getObjectIds())
        })
    } else finalArray.push(e.get(tags).getObjectIds())

    return finalArray
}
// Can only be used in tags event only
function removeTagFromArray(e, arrayRemoveFrom, tagToRemove) {
    let tagToRemoveArr = tagToArray(e, tagToRemove)
    return arrayRemoveFrom.filter(item => !tagToRemoveArr.includes(item))
}
function removeElementFromArray(arrayRemoveFrom, elementToRemove) {
    return arrayRemoveFrom.filter(item => item !== elementToRemove)
}
function tagArrayRegexOnly(tagRemoveFrom, regexToInclude) {
    let tagArray = Ingredient.of(tagRemoveFrom).getItemIds().toArray()
    return tagArray.filter(x => x.toString().match(regexToInclude))
}


/**
 * Returns coin equivalent ItemStack of given bronze number
 * 1 Gold = 100 Silver = 10,000 Bronze
 * 1 Silver = 100 Bronze
 * @param {Number} num number from 1 - 990,000
 * @returns {Internal.ItemStack}
 */
function currencyItem(num) {
    // 1 gold = 100 silver = 10,000 bronze
    if (num > 990000) console.error(`currencyItem returned a value too high: ${num}`)
    else if (num <= 99) return Item.of('numismatic-overhaul:bronze_coin', num)
    else if (num > 99 && num < 10000) return Item.of('numismatic-overhaul:silver_coin', Math.ceil(num / 100))
    else if (num >= 10000) return Item.of('numismatic-overhaul:gold_coin', Math.ceil(num / 10000))
}


// debug
/*
const AU = Java.loadClass('com.almostreliable.unified.AlmostUnified')
const AUHideHelper = Java.loadClass('com.almostreliable.unified.compat.HideHelper')

let arr = []
AUHideHelper.createHidingList(AU.getRuntime()).forEach(item => arr.push(item.toItemString()))
console.log(arr.sort())
*/

/*
let chung = []
chung.forEach(item => {
    if (!Item.exists(item)) {
        console.log(`DOESN'T EXIST: ${item}`)  // debug
    }
})
*/
