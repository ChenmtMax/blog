import { Color, Mark } from "./enums";

export type Deck = Card[]; // 改成 class写法

// 方法一：使用类型联合方式。
// export type Deck = (NormalCard | Joker)[]

// 方法二：使用接口继承。
// 将共同点放在一个接口中，再各自使用继承于这个接口。
export interface Card {
    getString(): string // 得到这个卡牌的字符串
}

export interface NormalCard extends Card {
    color: Color
    mark: Mark
}

export interface Joker extends Card {
    type: "big" | "small"
}