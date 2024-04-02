import { NextRequest, NextResponse } from "next/server";

const blues: boolean[][][] = [
    [
        [false, false, false, false, false, false, false, false, false, true, false, false],
        [false, false, true, false, true, true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, true],
        [false, true, false, false, true, false, true, false, true, true, false, false],
        [false, false, false, false, false, false, true, false, false, false, false, true],
        [false, false, false, false, true, false, false, false, false, false, false, false],
        [false, true, false, false, false, false, true, true, false, true, true, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, true, false, false],
        [false, false, false, false, true, false, false, false, false, true, false, false],
        [false, false, true, false, true, false, true, false, false, false, false, false],
        [false, false, false, false, false, false, true, false, false, false, false, false],
    ],
    [
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, true, false, true],
        [false, false, false, false, true, false, true, false, false, false, false, false],
        [true, false, true, false, false, false, false, false, false, false, true, false],
        [false, false, false, false, false, true, false, true, true, false, true, false],
        [true, true, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [true, false, false, false, true, true, false, true, false, false, true, false],
        [false, false, true, false, false, false, false, false, false, false, true, false],
        [false, false, false, false, false, true, false, true, false, false, false, false],
        [false, false, false, false, false, false, false, true, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
    ],
    [
        [false, false, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, true, true, false, true, false],
        [false, false, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, true, false, false, false, true, false, false, false, true],
        [false, true, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, true, false, false, false, true, true],
        [false, false, false, false, false, false, false, false, true, false, false, false],
        [false, false, false, true, false, false, true, false, false, false, false, false],
        [false, true, false, true, false, false, false, false, true, false, false, true],
        [false, true, false, false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, true, false, false, false, true, true, false, false, false],
    ],
    [
        [false, false, false, false, true, false, true, false, false, false, true, false],
        [false, false, false, false, false, false, true, false, false, false, false, false],
        [false, true, true, false, false, false, false, false, false, true, true, false],
        [false, false, false, false, false, true, false, false, false, false, false, false],
        [true, false, true, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, true, false, false, false],
        [true, false, true, true, false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, false, false, false, false, true],
        [true, false, false, false, false, false, true, true, false, false, false, false],
        [false, false, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, true, false, true, false, false, true, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
    ],
    [
        [false, false, false, false, false, true, false, true, true, false, false, false],
        [false, false, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, false, true, true, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, true, false, false, false, false, true, false, false],
        [false, false, true, false, false, false, false, true, false, true, false, false],
        [false, false, false, false, true, true, false, false, false, false, false, false],
        [false, true, true, false, false, false, false, false, true, true, false, false],
        [false, false, false, false, true, true, false, false, false, false, false, false],
        [false, false, true, false, false, false, false, false, true, false, true, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, true, true, false, false, false, false, false, false],
    ],
];

const yellows: boolean[][][] = [
    [
        [false, false, false, false, false, false, false, false, true, false, true, false],
        [false, false, false, false, true, false, false, false, false, false, false, false],
        [false, true, true, false, false, false, false, true, true, false, false, false],
        [false, false, false, false, false, true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, true, true, false, true, false],
        [false, false, false, true, true, false, false, false, false, false, true, false],
        [false, true, false, false, false, false, false, false, true, false, false, false],
        [false, true, false, false, true, false, true, false, false, false, false, true],
        [false, false, false, false, false, false, false, false, false, true, false, false],
        [false, false, true, false, false, false, true, false, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, true, false, false, false, false],
    ],
    [
        [false, false, false, false, false, true, false, false, false, false, false, false],
        [false, false, true, true, false, true, false, false, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, true, false, true, false, false, false, false, true, false, true],
        [true, false, false, false, false, false, true, false, false, false, false, false],
        [true, false, false, true, false, false, true, false, false, false, false, false],
        [false, false, false, true, false, false, false, false, true, false, true, false],
        [false, true, false, false, false, false, true, false, true, false, false, false],
        [false, true, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, true, false, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
    ],
    [
        [false, false, false, true, true, false, false, false, false, true, false, false],
        [false, false, false, false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, false, true, false, false, true, true, false],
        [false, false, true, false, true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, true, true, false, false, true, false, true, false, false, false, true],
        [false, false, false, false, false, false, false, true, false, true, false, false],
        [false, false, true, false, false, true, false, false, false, false, false, false],
        [false, false, true, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, true, false, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, false, true, false, false, false],
        [false, false, false, true, true, false, false, false, true, false, false, false],
    ],
    [
        [false, false, false, false, false, false, true, true, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, true, false],
        [false, false, false, false, false, true, false, false, false, false, false, false],
        [false, true, false, true, false, false, false, true, true, false, true, true],
        [false, true, false, false, false, true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, true, false, false, true, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, true, false, false, false, false],
        [true, false, false, false, true, true, false, true, false, false, true, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, true, false, true, true, false, true, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
    ],
    [
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, true, true, false, false, true],
        [false, false, false, true, true, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, true, false, false, true, false, false],
        [true, false, false, true, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, true, true, false, false],
        [false, false, false, false, true, false, false, false, false, false, false, true],
        [true, false, false, false, false, false, false, false, false, true, false, false],
        [false, false, false, true, false, false, false, false, false, false, false, true],
        [false, false, false, false, false, true, false, true, true, false, false, false],
        [false, false, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, true, false, false, false, false, false],
    ],
];

const purples: boolean[][][] = [
    [
        [false, false, false, false, false, false, false, false, true, false, false, false],
        [false, false, false, false, true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, true, false],
        [false, true, true, false, true, false, true, true, false, false, false, false],
        [false, false, false, false, true, false, false, false, false, false, true, true],
        [true, false, false, false, false, false, false, false, true, false, false, false],
        [false, false, true, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, true, false, true],
        [false, false, false, true, false, true, false, false, false, false, false, false],
        [false, true, false, false, false, true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, true, false, false, false, false],
        [false, false, false, true, true, false, false, true, false, false, false, false],
    ],
    [
        [false, false, false, false, false, true, true, false, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, true, false, false],
        [false, true, false, false, true, true, false, true, false, false, false, true],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, true, true, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, true, false, false, false, false, false],
        [false, false, false, false, true, false, false, false, false, false, false, false],
        [false, false, true, false, true, false, false, true, false, false, false, false],
        [false, false, true, false, false, false, false, false, false, true, false, true],
        [false, false, false, false, false, false, true, false, false, false, false, false],
        [false, false, true, true, false, false, true, false, true, false, false, false],
        [false, false, false, false, false, false, false, false, true, false, false, false],
    ],
    [
        [false, false, false, false, true, false, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, false, false, false, true, false],
        [false, false, false, true, false, false, true, false, true, false, false, false],
        [true, false, false, false, false, false, false, false, true, false, false, false],
        [false, false, false, true, false, false, false, false, false, false, false, false],
        [false, false, false, true, false, false, false, false, false, false, true, true],
        [false, true, false, false, false, true, true, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, true, false, false, false],
        [true, true, false, false, false, false, false, false, false, false, true, false],
        [false, false, false, true, true, false, false, true, true, false, true, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
    ],
    [
        [false, false, false, true, false, false, false, true, false, false, false, false],
        [false, false, false, false, false, true, false, true, false, false, false, false],
        [false, false, true, false, false, false, false, false, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, true],
        [true, false, false, false, false, true, true, false, true, true, false, false],
        [false, false, true, false, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, true, true, false, true, false],
        [true, false, false, true, false, true, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, true, false, false, false, false],
        [false, false, true, false, false, false, false, false, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, false, false, false, false, false, false],
    ],
    [
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, true, true, false, false, true, false, true, false, false, true],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, true, false, true, false, false, false, true, true, false],
        [false, false, false, false, false, false, false, true, false, false, false, false],
        [false, true, false, false, true, true, false, true, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, true, false, true],
        [false, true, false, false, false, false, true, false, false, false, false, false],
        [false, false, false, false, true, false, true, false, true, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, true, true, false, false, false, true, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false],
    ],
];

function isInteger(value: any) {
    return !Number.isNaN(parseInt(value));
}

const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;

    const code = id.split("");
    if (code.length == 3) {
        if (!isInteger(code[0]) || !isInteger(code[1]) || !isInteger(code[2])) {
            return NextResponse.json({ status: 400, statusText: "code is invalid: not number" });
        }
        if (
            1 > parseInt(code[0]) ||
            parseInt(code[0]) > 5 ||
            1 > parseInt(code[1]) ||
            parseInt(code[1]) > 5 ||
            1 > parseInt(code[2]) ||
            parseInt(code[2]) > 5
        ) {
            return NextResponse.json({
                status: 400,
                statusText: "code is invalid: out of range(1-5)",
            });
        }

        let mask: number[] = new Array(2);
        let check = 0;
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 12; j++) {
                const blue = blues[parseInt(code[0]) - 1][i][j];
                const yellow = yellows[parseInt(code[1]) - 1][i][j];
                const purple = purples[parseInt(code[2]) - 1][i][j];
                if (blue && yellow && purple) {
                    check++;
                    mask = [i, j];
                }
            }
        }

        if (check != 1) {
            return NextResponse.json({
                status: 500,
                statusText: "punch card is invalid: sry. it's my fault.",
            });
        }

        return NextResponse.json({ mask: mask }, { status: 200 });
    } else {
        return NextResponse.json({ status: 400, statusText: "code is invalid: not 3 digits" });
    }
};

export function generateStaticParamas() {
    const ids = [111, 112, 113];

    return ids.map((id) => ({ id: id }));
}

export { GET };
