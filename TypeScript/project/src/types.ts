import { Color, Mark } from "./enums";

export type Deck = NomalCard[];

export type NomalCard = {
    color: Color;
    mark: Mark // 标记的数字
}