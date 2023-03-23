# Require Vs Import / Export
| Require                                                | Import/Export                                                                   |
|--------------------------------------------------------|---------------------------------------------------------------------------------|
| 1- Require is a function which is executed at runtime. | 1- Import runs statically                                                       |
| 2- It can be called inside conditionals.               | 2- It can't be called inside conditionals. It only runs at the top of the file. |
| 3- We can't check our import errors statically.        | 3- Errors are checked statically. It helps in debugging.                          |
| 4- module.exports = variable / function / className    | 4- <br>export default variableName <br>export variableName                              |
| 5- require("variableName");                            | 5- <br>import {nameExport} from './file.js' <br>import defaultExport from './file.js'   |