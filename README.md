# vue-prop-sep [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm install vue-prop-sep](https://nodei.co/npm/vue-prop-sep.png?compact=true)](https://npmjs.org/package/vue-prop-sep/)

Add `get`, `has`, `remove` and `set` methods to Vue componentes.

## Usage

Using `.` as separator (by default).

```javascript
// Vue component
export default {
    data()
    {
        return {
            a : {
                b : 1
            }
        }
    },
    created()
    {
        console.log(this.get('a.b')); // 1
        this.set('a.b', 5);
        console.log(this.get('a.b')); // 5
    }
}

// index/main fail
import VuePropSep    from 'vue-prop-sep';
import { createApp } from 'vue';
import VueComponent  from './vue-component';

const app = createApp(VueComponent)
app.use(VuePropSep);
app.mount(/* node */);
```

Changing default separator.

```javascript
// Vue component
export default {
    data()
    {
        return {
            a : {
                b : 1
            }
        }
    },
    created()
    {
        console.log(this.get('a/b')); // 1
        this.set('a/b', 5);
        console.log(this.get('a/b')); // 5
    }
}

// index/main fail
import VuePropSep    from 'vue-prop-sep';
import { createApp } from 'vue';
import VueComponent  from './vue-component';

const app = createApp(VueComponent);
app.use(VuePropSep, { separator : '/' });
app.mount(/* node */);
```
