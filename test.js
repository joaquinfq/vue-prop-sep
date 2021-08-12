const assert      = require('assert');
const plugin      = require('./index');
let numAssertions = 0;
const expectedAssertions = 12;

class Vue
{
    constructor()
    {
        this.config = { globalProperties : {}};
    }

    test(path, expected)
    {
        const _sep = this.constructor.separator || '.';
        this.config.globalProperties.set(`a${_sep}b${_sep}c`, 1);
        assert.deepEqual(this.config.globalProperties.get(path), expected, path);
        ++numAssertions;
    }

    use(Plugin, options)
    {
        Plugin.install(this, options);
    }
}

class VueNoSeparator extends Vue
{
    static get separator()
    {
        return undefined;
    }
}

class VueDollarSeparator extends Vue
{
    static get separator()
    {
        return '$';
    }
}

class VueDotSeparator extends Vue
{
    static get separator()
    {
        return '.';
    }
}

class VueSlashSeparator extends Vue
{
    static get separator()
    {
        return '/';
    }
}

function testClass(Class)
{
    const separator = Class.separator || '.';
    const _vue = new Class();
    _vue.use(plugin, { separator });
    _vue.test('a', { b : { c : 1 } });
    _vue.test(`a${separator}b`, { c : 1 });
    _vue.test(`a${separator}b${separator}c`, 1);
}

testClass(VueDollarSeparator);
testClass(VueDotSeparator);
testClass(VueNoSeparator);
testClass(VueSlashSeparator);

console.log(`Aserciones\n\tEsperadas: %d\n\tRealizadas: %d`, expectedAssertions, numAssertions);
