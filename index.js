/**
 * Returns the calling filename and line number
 *
 * @returns { string }
 */
function getCallerPath() {
  const err = new Error();
  const regex = /\((.*)\)/;
  const callerPath = err.stack.split('\n')[3].match(regex)[1];
  return callerPath;
}
/**
 * Return the caller's short path and line number
 *
 * @returns string
 */
function getLineData(callerPath) {
  const cwdLength = process.cwd().length;
  const shortCallerPath = callerPath.substr(cwdLength);
  return shortCallerPath;
}
/**
 * Returns the caller's filename and line number
 *
 * @returns string
 */
function whoCalled() {
  return getLineData(getCallerPath());
}

module.exports = whoCalled;
