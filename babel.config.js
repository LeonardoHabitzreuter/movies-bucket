module.exports = {
    presets: ["@babel/env"],
    plugins: [["@babel/plugin-syntax-decorators", {
        decoratorsBeforeExport: true
    }]]
}