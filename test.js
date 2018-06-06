const assert      = require('assert');
const plugin      = require('./index');
let numAssertions = 0;

class Vue
{
    constructor()
    {
        const _sep = this.constructor.separator || '.';

        this.set(`a${_sep}b${_sep}c`, 1);
    }

    test(path, expected)
    {
        assert.deepEqual(this.get(path), expected, path);
        ++numAssertions;
    }

    static use(Plugin, options)
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
    let _sep = Class.separator;
    if (_sep)
    {
        Class.use(
            plugin,
            {
                separator : _sep
            }
        );
    }
    else
    {
        Class.use(plugin);
        _sep = '.';
    }
    const _vue = new Class();
    _vue.test('a', { b : { c : 1 } });
    _vue.test(`a${_sep}b`, { c : 1 });
    _vue.test(`a${_sep}b${_sep}c`, 1);
}

testClass(VueDollarSeparator);
testClass(VueDotSeparator);
testClass(VueNoSeparator);
testClass(VueSlashSeparator);

console.log('Total aserciones: %d', numAssertions);
