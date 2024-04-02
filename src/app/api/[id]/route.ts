import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { JSDOM } from "jsdom";

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function get_texts(node: HTMLElement | Node, texts: string[] = []): string[] {
    if (node.nodeType === node.TEXT_NODE) {
        node.nodeValue;
        texts.push(node.nodeValue!);
    } else if (node.nodeType === node.ELEMENT_NODE) {
        for (const child of node.childNodes) {
            get_texts(child, texts);
        }
    }

    return texts;
}

export type Problem = {
    mode: "classic" | "extreme" | "nightmare";
    cards: number[];
    color: 0 | 1 | 2 | 3;
    verifiers: number[];
    answer: number;
};

function get_cards(texts: string[]): string[] {
    let cards = [];
    if (texts.length == 12) {
        cards.push(texts[1]);
        cards.push(texts[4]);
        cards.push(texts[7]);
        cards.push(texts[10]);
    } else if (texts.length == 15) {
        cards.push(texts[1]);
        cards.push(texts[4]);
        cards.push(texts[7]);
        cards.push(texts[10]);
        cards.push(texts[13]);
    } else if (texts.length == 18) {
        cards.push(texts[1]);
        cards.push(texts[4]);
        cards.push(texts[7]);
        cards.push(texts[10]);
        cards.push(texts[13]);
        cards.push(texts[16]);
    } else if (texts.length == 16) {
        cards.push(texts[1]);
        cards.push(texts[2]);
        cards.push(texts[5]);
        cards.push(texts[6]);
        cards.push(texts[9]);
        cards.push(texts[10]);
        cards.push(texts[13]);
        cards.push(texts[14]);
    } else if (texts.length == 20) {
        cards.push(texts[1]);
        cards.push(texts[2]);
        cards.push(texts[5]);
        cards.push(texts[6]);
        cards.push(texts[9]);
        cards.push(texts[10]);
        cards.push(texts[13]);
        cards.push(texts[14]);
        cards.push(texts[17]);
        cards.push(texts[18]);
    } else if (texts.length == 24) {
        cards.push(texts[1]);
        cards.push(texts[2]);
        cards.push(texts[5]);
        cards.push(texts[6]);
        cards.push(texts[9]);
        cards.push(texts[10]);
        cards.push(texts[13]);
        cards.push(texts[14]);
        cards.push(texts[17]);
        cards.push(texts[18]);
        cards.push(texts[21]);
        cards.push(texts[22]);
    } else {
    }
    return cards;
}
function get_verifiers(texts: string[]): string[] {
    let verifiers = [];
    if (texts.length == 12) {
        verifiers.push(texts[2]);
        verifiers.push(texts[5]);
        verifiers.push(texts[8]);
        verifiers.push(texts[11]);
    } else if (texts.length == 15) {
        verifiers.push(texts[2]);
        verifiers.push(texts[5]);
        verifiers.push(texts[8]);
        verifiers.push(texts[11]);
        verifiers.push(texts[14]);
    } else if (texts.length == 18) {
        verifiers.push(texts[2]);
        verifiers.push(texts[5]);
        verifiers.push(texts[8]);
        verifiers.push(texts[11]);
        verifiers.push(texts[14]);
        verifiers.push(texts[17]);
    } else if (texts.length == 16) {
        verifiers.push(texts[3]);
        verifiers.push(texts[7]);
        verifiers.push(texts[11]);
        verifiers.push(texts[15]);
    } else if (texts.length == 20) {
        verifiers.push(texts[3]);
        verifiers.push(texts[7]);
        verifiers.push(texts[11]);
        verifiers.push(texts[15]);
        verifiers.push(texts[19]);
    } else if (texts.length == 24) {
        verifiers.push(texts[3]);
        verifiers.push(texts[7]);
        verifiers.push(texts[11]);
        verifiers.push(texts[15]);
        verifiers.push(texts[19]);
        verifiers.push(texts[23]);
    } else {
    }
    return verifiers;
}
function get_verifiers_nightmare(texts: string[]): string[] {
    let verifiers: string[] = [];
    if (texts.length == 8) {
        verifiers.push(texts[1]);
        verifiers.push(texts[3]);
        verifiers.push(texts[5]);
        verifiers.push(texts[7]);
    } else if (texts.length == 10) {
        verifiers.push(texts[1]);
        verifiers.push(texts[3]);
        verifiers.push(texts[5]);
        verifiers.push(texts[7]);
        verifiers.push(texts[9]);
    } else if (texts.length == 12) {
        verifiers.push(texts[1]);
        verifiers.push(texts[3]);
        verifiers.push(texts[5]);
        verifiers.push(texts[7]);
        verifiers.push(texts[9]);
        verifiers.push(texts[11]);
    }
    return verifiers;
}

const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://turingmachine.info");

    await page.click("#root > div > div.mainTab > div > a.blue.button.homeButton");

    await page.type("#root > div > div.mainTab.pageSearch > input.bigInput", "#" + id);
    await page.click("#root > div > div.mainTab.pageSearch > input.fullgreen");

    await sleep(3000);
    await page.click("#root > div > div.mainTab.pageAskSolo > div.content > input");
    const nightmareCardsElement = await page.$$eval(
        "#root > div > div.mainTab.pageInGame > div.mixedcriteria span",
        (nodes) => nodes.map((e) => e.innerHTML)
    );
    const problemElement = await page.$eval(
        "#root > div > div.mainTab.pageInGame > div.table",
        (e) => e.innerHTML
    );

    await page.click(
        "#root > div > div.mainTab.pageInGame > div.actions > input[type=button]:nth-child(2)"
    );
    await page.click("#root > div > div.mainTab > div > div > input:nth-child(1)");

    const answer = await page.$$eval(
        "#root > div > div.mainTab.showSolution > div > span",
        (nodes) => nodes.map((el) => el.innerHTML)
    );

    await browser.close();

    if (!problemElement) {
        return NextResponse.json({}, { status: 404 });
    }

    let mode = "";
    let cards: string[] = [];
    let verifiers: string[] = [];

    const jsdom = require("jsdom");
    nightmareCardsElement;
    const nightmareDom = new jsdom.JSDOM(nightmareCardsElement) as JSDOM;
    cards = get_texts(nightmareDom.window.document.body);
    if (cards.length > 0) {
        mode = "nightmare";
    }

    const problemDom = new jsdom.JSDOM(problemElement) as JSDOM;
    const problemTexts = get_texts(problemDom.window.document.body);
    if (mode == "nightmare") {
        verifiers = get_verifiers_nightmare(problemTexts);
    } else {
        cards = get_cards(problemTexts);
        verifiers = get_verifiers(problemTexts);
        mode = cards.length > 6 ? "extreme" : "classic";
    }
    const innerHTML = problemDom.window.document.body.innerHTML;
    let color;
    if (innerHTML.indexOf("color0") > -1) {
        color = 0; //green
    } else if (innerHTML.indexOf("color1") > -1) {
        color = 1; //yellow
    } else if (innerHTML.indexOf("color2") > -1) {
        color = 2; //blue
    } else {
        color = 3; //purple
    }

    const answerTexts = [];
    const answerDom0 = new jsdom.JSDOM(answer[0]) as JSDOM;
    const answerDom1 = new jsdom.JSDOM(answer[1]) as JSDOM;
    const answerDom2 = new jsdom.JSDOM(answer[2]) as JSDOM;
    answerTexts.push(get_texts(answerDom0.window.document.body)[0]);
    answerTexts.push(get_texts(answerDom1.window.document.body)[0]);
    answerTexts.push(get_texts(answerDom2.window.document.body)[0]);
    const answerText = parseInt(answerTexts.join(""));

    return NextResponse.json(
        {
            mode: mode,
            cards: cards.map((card) => parseInt(card)),
            color: color,
            verifiers: verifiers.map((verifier) => parseInt(verifier)),
            answer: answerText,
        },
        { status: 200 }
    );
};

export { GET };
