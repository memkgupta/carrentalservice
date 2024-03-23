import { MouseEventHandler } from "react";

export interface CustomButtonPropsInterface{
    btnType?:"button"|"submit"
    title:string,
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}