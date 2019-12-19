/**
 * Add `get`, `has`, `remove` and `set` methods to Vue componentes.
 */
const propSep = require('@jf/prop-sep');

module.exports = {
    /**
     * Instala el plugin.
     *
     * @param {Object} Vue     Referencia de la clase Vue.
     * @param {Object} options Opciones del plugin.
     */
    install(Vue, options)
    {
        const separator = propSep.get(options, 'separator', '.');

        Object.defineProperties(
            Vue.prototype,
            {
                get    : {
                    /**
                     * Devuelve el valor correspondiente a la ruta especificada.
                     *
                     * @param {String} path     Ruta de la propiedad a obtener usando `.` para separar las claves.
                     * @param {*}      defValue Valor por defecto a devolver si la ruta no está definida.
                     *
                     * @return {*} Valor de la ruta.
                     */
                    value(path, defValue)
                    {
                        return propSep.get(this, path, defValue, separator);
                    }
                },
                has    : {
                    /**
                     * Verifica si la ruta a una propiedad está definida.
                     *
                     * @param {String} path Ruta de la propiedad a obtener usando `.` para separar las claves.
                     *
                     * @return {Boolean} `true` si la ruta existe.
                     */
                    value(path)
                    {
                        return propSep.has(this, path, separator);
                    }
                },
                remove : {
                    /**
                     * Elimina una ruta del objeto.
                     *
                     * @param {String} path Ruta de la propiedad a obtener usando `.` para separar las claves.
                     *
                     * @return {*} Valor eliminado.
                     */
                    value(path)
                    {
                        return propSep.remove(this, path, separator);
                    }
                },
                set    : {
                    /**
                     * Asigna el valor a la ruta especificada.
                     *
                     * @method set
                     *
                     * @param {String} path  Ruta de la propiedad a obtener usando `.` para separar las claves.
                     * @param {*}      value Valor a asignar.
                     *
                     * @return {Object} La instancia actual para encadenarla.
                     */
                    value(path, value)
                    {
                        propSep.set(this, path, value, separator);

                        return this;
                    }
                }
            }
        );
    }
};
