// import { createDeck, printDeck } from "./funcs"; // 第三、四次改造目标。

import { Deck } from "./deckClass"; // 第五次改造目标。

/**
 * 扑克牌小练习
 * 1、目标：创建一副扑克牌（不包括大小王），打印该扑克牌。
 * 2、使用枚举改造程序。
 * 3、使用模块化。
 * 4、用接口改造程序，加入大小王。
 * 5、用类改造程序，洗牌，发牌。
 */

// type Color = "♥" | "♠" | "♦" | "♣";
/* 第二次改造的目标
type Deck = NomalCard[];
enum Color {
    heart = "♥",
    spade = "♠",
    club = "♣",
    diamond = "♦"
}
enum Mark {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K"
}
type NomalCard = {
    color: Color;
    mark: Mark // 标记的数字
}
function createDeck(): Deck {
    const deck: Deck = [];
    // for (let i = 1; i <= 13; i++) {
    //     deck.push({
    //         mark: i,
    //         color: "♠"
    //     })
    //     deck.push({
    //         mark: i,
    //         color: "♣"
    //     })
    //     deck.push({
    //         mark: i,
    //         color: "♥"
    //     })
    //     deck.push({
    //         mark: i,
    //         color: "♦"
    //     })
    // }

    // 循环枚举
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m
            })
        }
    }
    return deck
}

function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach((card, i) => {
        // let str = card.color;
        // if (card.mark <= 10) {
        //     str += card.mark
        // } else if (card.mark === 11) {
        //     str += "J";
        // }
        // else if (card.mark === 12) {
        //     str += "Q";
        // } else {
        //     str += "K";
        // }
        let str = card.color + card.mark;
        // 换行打印，每张扑克都有 "\t" 间隔，每行4张换行。
        result += str + "\t";
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}
*/

/** 第三、四次改造目标
 * // 启动
const deck = createDeck()
printDeck(deck);
 */

/**
 * 第五次改造目标
 */
const deck = new Deck();
deck.shuffle(); // 洗牌
console.log("========= 洗牌之后 =========");
deck.print();
const result = deck.publish();
console.log("========= 发牌之后 =========");

console.log("========= 玩家1 =========");
result.player1.print();
console.log("========= 玩家2 =========");
result.player2.print();
console.log("========= 玩家3 =========");
result.player3.print();
console.log("========= 桌面 =========");
result.left.print();