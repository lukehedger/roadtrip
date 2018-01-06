/**
 * Read data from localStorage
 *
 * @param  {String} key localStorage data key
 * @return {Object}     localStorage data
 */
export const getLocalItem = key => JSON.parse(localStorage.getItem(key))

/**
 * Write data to localStorage
 *
 * @param  {String} key  localStorage data key
 * @param  {Object} data localStorage data
 */
export const setLocalItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))

/**
 * Delete data from localStorage
 *
 * @param  {String} key localStorage data key
 */
export const removeLocalItem = key => localStorage.removeItem(key)

/**
 * Read data from sessionStorage
 *
 * @param  {String} key sessionStorage data key
 * @return {Object}     sessionStorage data
 */
export const getSessionItem = key => JSON.parse(sessionStorage.getItem(key))

/**
 * Write data to sessionStorage
 *
 * @param  {String} key  sessionStorage data key
 * @param  {Object} data sessionStorage data
 */
export const setSessionItem = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value))

/**
 * Delete data from sessionStorage
 *
 * @param  {String} key sessionStorage data key
 */
export const removeSessionItem = key => sessionStorage.removeItem(key)
