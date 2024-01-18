import Hercai from "./src/hercai";
import {version} from "../package.json";

type QuestionData = {
content:string,
reply:string,
};

type DrawImageData = {
model:string,
prompt:string,
url:string
};

export {
Hercai,
QuestionData,
DrawImageData,
version
};
