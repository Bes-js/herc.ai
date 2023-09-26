import Hercai from "./src/hercai";

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
DrawImageData
};
