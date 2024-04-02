import { NextRequest, NextResponse } from "next/server";
import verifiers from "./data";

type Dictionary<TKey extends string | number, TValue> = { [key in TKey]: TValue };

type ConvertVerifierID = Dictionary<number, number>;
const yellow2Green: ConvertVerifierID = {
    798: 201,
    793: 206,
    786: 215,
    781: 220,
    776: 227,
    770: 233,
    765: 244,
    757: 253,
    750: 261,
    744: 267,
    740: 274,
    736: 280,
    729: 286,
    720: 293,
    715: 302,
    708: 309,
    699: 315,
    694: 322,
    687: 329,
    680: 334,
    669: 339,
    664: 346,
    658: 350,
    653: 356,
    649: 360,
    645: 370,
    639: 376,
    635: 381,
    631: 387,
    627: 392,
    617: 396,
    613: 403,
    608: 407,
    599: 413,
    595: 419,
    591: 429,
    587: 434,
    581: 440,
    577: 447,
    571: 455,
    564: 462,
    558: 470,
    550: 475,
    543: 481,
    536: 485,
    530: 491,
    523: 497,
    515: 503,
    506: 507,
    502: 516,
    496: 525,
    490: 532,
    484: 537,
    480: 546,
    474: 551,
    469: 560,
    461: 566,
    454: 572,
    445: 578,
    439: 582,
    433: 588,
    424: 592,
    418: 596,
    412: 604,
    406: 609,
    402: 614,
    395: 618,
    391: 628,
    386: 632,
    379: 636,
    374: 640,
    369: 646,
    359: 650,
    355: 654,
    349: 661,
    344: 665,
    338: 670,
    332: 681,
    327: 688,
    319: 695,
    314: 701,
    308: 709,
    299: 717,
    289: 723,
    279: 737,
    273: 741,
    266: 746,
    257: 751,
    252: 758,
    243: 766,
    232: 771,
    224: 778,
    219: 782,
    213: 787,
    205: 795,
};
const blue2Green: ConvertVerifierID = {
    204: 201,
    212: 206,
    217: 215,
    223: 220,
    231: 227,
    237: 233,
    251: 244,
    256: 253,
    264: 261,
    270: 267,
    278: 274,
    282: 280,
    288: 286,
    296: 293,
    304: 302,
    312: 309,
    317: 315,
    325: 322,
    331: 329,
    337: 334,
    341: 339,
    348: 346,
    353: 350,
    358: 356,
    365: 360,
    373: 370,
    378: 376,
    385: 381,
    390: 387,
    394: 392,
    401: 396,
    405: 403,
    410: 407,
    416: 413,
    423: 419,
    432: 429,
    437: 434,
    442: 440,
    453: 447,
    459: 455,
    464: 462,
    472: 470,
    479: 475,
    483: 481,
    487: 485,
    495: 491,
    499: 497,
    505: 503,
    514: 507,
    520: 516,
    528: 525,
    534: 532,
    541: 537,
    549: 546,
    557: 551,
    563: 560,
    568: 566,
    576: 572,
    580: 578,
    586: 582,
    590: 588,
    594: 592,
    598: 596,
    606: 604,
    611: 609,
    616: 614,
    625: 618,
    630: 628,
    634: 632,
    638: 636,
    643: 640,
    648: 646,
    652: 650,
    657: 654,
    663: 661,
    668: 665,
    677: 670,
    686: 681,
    691: 688,
    697: 695,
    706: 701,
    714: 709,
    719: 717,
    726: 723,
    739: 737,
    743: 741,
    749: 746,
    755: 751,
    763: 758,
    769: 766,
    775: 771,
    780: 778,
    785: 782,
    792: 787,
    797: 795,
};
const purple2Green: ConvertVerifierID = {
    796: 201,
    790: 206,
    783: 215,
    779: 220,
    773: 227,
    767: 233,
    759: 244,
    754: 253,
    747: 261,
    742: 267,
    738: 274,
    733: 280,
    725: 286,
    718: 293,
    710: 302,
    704: 309,
    696: 315,
    690: 322,
    684: 329,
    673: 334,
    667: 339,
    662: 346,
    656: 350,
    651: 356,
    647: 360,
    641: 370,
    637: 376,
    633: 381,
    629: 387,
    621: 392,
    615: 396,
    610: 403,
    605: 407,
    597: 413,
    593: 419,
    589: 429,
    585: 434,
    579: 440,
    573: 447,
    567: 455,
    562: 462,
    55: 470,
    547: 475,
    540: 481,
    533: 485,
    527: 491,
    518: 497,
    509: 503,
    504: 507,
    498: 516,
    492: 525,
    486: 532,
    482: 537,
    476: 546,
    471: 551,
    463: 560,
    458: 566,
    449: 572,
    441: 578,
    435: 582,
    430: 588,
    421: 592,
    414: 596,
    409: 604,
    404: 609,
    399: 614,
    393: 618,
    389: 628,
    382: 632,
    377: 636,
    372: 640,
    362: 646,
    357: 650,
    352: 654,
    347: 661,
    340: 665,
    335: 670,
    330: 681,
    324: 688,
    316: 695,
    311: 701,
    303: 709,
    294: 717,
    287: 723,
    277: 737,
    268: 741,
    263: 746,
    255: 751,
    247: 758,
    236: 766,
    228: 771,
    221: 778,
    216: 782,
    207: 787,
    202: 795,
};

const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    let [color, index_str] = id.split(",");
    let index = parseInt(index_str);

    if (color == "1") {
        index = yellow2Green[index];
    } else if (color == "2") {
        index = blue2Green[index];
    } else if (color == "3") {
        index = purple2Green[index];
    }
    if (String(index) in verifiers) {
        return NextResponse.json({ verifier: verifiers[String(index)] }, { status: 200 });
    } else {
        return NextResponse.json({ status: 404 });
    }
};

export { GET };
