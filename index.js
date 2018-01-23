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
// Copyright (C) <2018>  <Joseph W Becher>

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

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
