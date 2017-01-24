/**
 * Gets the data attribute. the name must be kebab-case.
 */
export const getDataAttribute = (el, name) => el.getAttribute(`data-vv-${name}`);

/**
 * Determines the input field scope.
 */
export const getScope = (el) => {
    let scope = getDataAttribute(el, 'scope');
    if (! scope && el.form) {
        scope = getDataAttribute(el.form, 'scope');
    }

    return scope;
};

/**
 * Debounces a function.
 */
export const debounce = (callback, wait, context) => {
    let timeout = null;
    let callbackArgs = null;

    const later = () => callback.apply(context, callbackArgs);

    return () => {
        callbackArgs = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};


/**
 * Emits a warning to the console.
 */
export const warn = (message) => {
    if (! console) {
        return;
    }

    console.warn(`[vee-validate]: ${message}`); // eslint-disable-line
};

/**
 * Checks if the value is an object.
 */
 // eslint-disable-next-line
export const isObject = (object) => {
    return object !== null && object && typeof object === 'object' && ! Array.isArray(object);
};


/**
 * Checks if a function is callable.
 */
export const isCallable = (func) => typeof func === 'function';
