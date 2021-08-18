import { Color, Mark } from "./enums";
import { Card, Joker } from "./interface";

// 以对象的形式写
interface PublishResult {
    player1: Deck
    player2: Deck
    player3: Deck
    left: Deck
}

export class Deck {
    private cards: Card[] = []; // 赋值默认值 []

    constructor(cards?: Card[]) {
        if (cards) {
            // 如果传参数，就用参数创建。
            this.cards = cards;
        } else { // 反之则初始化。
            this.init(); // 创建一副卡牌就已经完成了初始化。
        }
    }

    // 初始化的工作不需要外面知道。
    private init() {
        // 循环枚举
        const marks = Object.values(Mark)
        const colors = Object.values(Color)
        for (const m of marks) {
            for (const c of colors) {
                // 使用接口版——加入大小鬼，使用类型断言（有两种方式，方法一：使用 as，方法二：使用 <Card>{}）
                this.cards.push({
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
        this.cards.push(joker)
        joker = {
            type: "big",
            getString() {
                return "JOKER"
            }
        }
        this.cards.push(joker)
    }

    print() {
        let result = "\n";
        this.cards.forEach((card, i) => {
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

    // 洗牌
    shuffle() {
        // [x1, x2, x3, x4, x5, x6, x7]
        for (let i = 0; i < this.cards.length; i++) {
            // 取不到最大值，所以可以直接给数组的长度，取得到的时候就数组长度减1.
            const targetIndex = this.getRandom(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }
    /**
     * 无法取到最大值
     * @param min 
     * @param max 
     */
    private getRandom(min: number, max: number) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }

    // 发牌：用4个数组，完全发完牌后，得到的结果有 4个Card[]。
    // 每个 Card[] 本质上就是一叠牌，即为 Deck。
    // publish(): [Deck, Deck, Deck, Deck] {
    publish(): PublishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this.cards); // 直接把剩下的3张赋值。

        // return [player1, player2, player3, left];
        return {
            player1,
            player2,
            player3,
            left
        }
    }

    // 摸牌，每位玩家17张，剩下的在桌子上left。
    private takeCards(n: number): Deck {
        const cards: Card[] = [];
        for (let i = 0; i < n; i++) {
            // [].shift() 移除数组的第一项然后返回这个第一项。
            // 此处this.cards.shift()会提示(程序认为所有都被移除完后)会出现 undefined，所以使用断言告诉它只会是Card。
            cards.push(this.cards.shift() as Card);
        }
        return new Deck(cards);
    }
}