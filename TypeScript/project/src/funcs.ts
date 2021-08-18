import { Color, Mark } from "./enums";
// import { Deck } from "./types"; // 类型别名。
import { Card, Deck, Joker, NormalCard } from "./interface"
// import { NormalCard } from "./types"; // 类型别名。
// import { NormalCard } from "./interface";

export function createDeck(): Deck {
    const deck: Deck = [];

    // 循环枚举
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const m of marks) {
        for (const c of colors) {
            /** 原版，插入一张牌（没有大小鬼）
             * deck.push({
                color: c,
                mark: m
            })
             */
            // 使用接口版——加入大小鬼，使用类型断言（有两种方式，方法一：使用 as，方法二：使用 <Card>{}）
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark
                }
            } as Card)
        }
    }
    let joker: Joker = {
        type: "small",
        getString() {
            return "joker"
        }
    }
    deck.push(joker)
    joker = {
        type: "big",
        getString() {
            return "JOKER"
        }
    }
    deck.push(joker)
    return deck
}

export function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach((card, i) => {
        // let str = card.color + card.mark;
        // 4、使用接口后的改动
        let str = card.getString();
        // 换行打印，每张扑克都有 "\t" 间隔，每行4张换行。
        result += str + "\t";
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}