const rollup = require("rollup")
const inputOptions = {}
const outputOptions = {}
async function build(){
    const bundle = await rollup.rollup(inputOptions)
    console.log(bundle.imports)
    console.log(bundle.exports)
    console.log(bundle.modules)
    const {code,map}=await bundle.generate(outputOptions)
    await bundle.write(outputOptions)
}
build()