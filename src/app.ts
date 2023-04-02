import {ProjectInput} from "./components/project-input";
import {ProjectList} from "./components/project-list";

import _ from "lodash"

//in case we have in some other script or on html some variables we can tell ts that it is exists
declare var GLOBAL: string;


new ProjectInput();
new ProjectList('active');
new ProjectList('finished');


console.log("hi");

