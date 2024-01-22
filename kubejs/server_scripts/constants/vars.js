//priority: 50

let shapedRecipes = []

function arrayFluid(arr) {
    if (arr[0].charAt(0) == '#') return { tag: arr[0].slice(1), amount: arr[1] }
    else return Fluid.of(arr[0], arr[1]).toJson()
}
