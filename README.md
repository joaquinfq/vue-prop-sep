# vue-prop-sep [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm install vue-prop-sep](https://nodei.co/npm/vue-prop-sep.png?compact=true)](https://npmjs.org/package/vue-prop-sep/)

Add `get`, `has`, `remove` and `set` methods to Vue componentes.

## Usage

Using `.` as separator (by default).

```javascript
import VuePropSep from 'vue-prop-sep';
import Vue        from 'vue';

Vue.use(VuePropSep);

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
```

Changing default separator.

```javascript
import VuePropSep from 'vue-prop-sep';
import Vue        from 'vue';

Vue.use(
    VuePropSep,
    {
        separator : '/'
    }
);

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
```
