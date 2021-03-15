# Kataw parser test case

## Input

`````js
foo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond
    ? baaaaaaaaaaaaaaaaaaaaar
    : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;

foo = (condition ? firstValue : secondValue) as SomeType;

const foo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond
  ? baaaaaaaaaaaaaaaaaaaaar
  : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;

function foo() {
  return (coooooooooooooooooooooooooooooooooooooooooooooooooooond
    ? baaaaaaaaaaaaaaaaaaaaar
    : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;
}

function foo() {
  throw (coooooooooooooooooooooooooooooooooooooooooooooooooooond
      ? baaaaaaaaaaaaaaaaaaaaar
      : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;
}

function foo() {
  void ((coooooooooooooooooooooooooooooooooooooooooooooooooooond
    ? baaaaaaaaaaaaaaaaaaaaar
    : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo);
}

bifornCringerMoshedPerplexSawder =
  askTrovenaBeenaDependsRowans +
  ((glimseGlyphsHazardNoopsTieTie === 0
    ? averredBathersBoxroomBuggyNurl
    : anodyneCondosMalateOverateRetinol) as AnnularCooeedSplicesWalksWayWay);

bifornCringerMoshedPerplexSawder =
  askTrovenaBeenaDependsRowans +
  ((glimseGlyphsHazardNoopsTieTie === 0 &&
  kochabCooieGameOnOboleUnweave === Math.PI
    ? averredBathersBoxroomBuggyNurl
    : anodyneCondosMalateOverateRetinol) as AnnularCooeedSplicesWalksWayWay);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "foo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond\n    ? baaaaaaaaaaaaaaaaaaaaar\n    : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;\n\nfoo = (condition ? firstValue : secondValue) as SomeType;\n\nconst foo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond\n  ? baaaaaaaaaaaaaaaaaaaaar\n  : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;\n\nfunction foo() {\n  return (coooooooooooooooooooooooooooooooooooooooooooooooooooond\n    ? baaaaaaaaaaaaaaaaaaaaar\n    : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;\n}\n\nfunction foo() {\n  throw (coooooooooooooooooooooooooooooooooooooooooooooooooooond\n      ? baaaaaaaaaaaaaaaaaaaaar\n      : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo;\n}\n\nfunction foo() {\n  void ((coooooooooooooooooooooooooooooooooooooooooooooooooooond\n    ? baaaaaaaaaaaaaaaaaaaaar\n    : baaaaaaaaaaaaaaaaaaaaaz) as Fooooooooooo);\n}\n\nbifornCringerMoshedPerplexSawder =\n  askTrovenaBeenaDependsRowans +\n  ((glimseGlyphsHazardNoopsTieTie === 0\n    ? averredBathersBoxroomBuggyNurl\n    : anodyneCondosMalateOverateRetinol) as AnnularCooeedSplicesWalksWayWay);\n\nbifornCringerMoshedPerplexSawder =\n  askTrovenaBeenaDependsRowans +\n  ((glimseGlyphsHazardNoopsTieTie === 0 &&\n  kochabCooieGameOnOboleUnweave === Math.PI\n    ? averredBathersBoxroomBuggyNurl\n    : anodyneCondosMalateOverateRetinol) as AnnularCooeedSplicesWalksWayWay);",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operator": "=",
                "right": {
                    "kind": 73738,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 65592,
                            "shortCircuit": {
                                "kind": 196712,
                                "text": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                "rawText": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 62
                            },
                            "consequent": {
                                "kind": 196712,
                                "text": "baaaaaaaaaaaaaaaaaaaaar",
                                "rawText": "baaaaaaaaaaaaaaaaaaaaar",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 92
                            },
                            "alternate": {
                                "kind": 196712,
                                "text": "baaaaaaaaaaaaaaaaaaaaaz",
                                "rawText": "baaaaaaaaaaaaaaaaaaaaaz",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 122
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 122
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 123
                    },
                    "type": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "Fooooooooooo",
                            "rawText": "Fooooooooooo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 126,
                            "end": 139
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 126,
                        "end": 140
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 123,
                    "end": 139
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 139
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 140
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 140,
                    "end": 145
                },
                "operator": "=",
                "right": {
                    "kind": 73738,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 65592,
                            "shortCircuit": {
                                "kind": 196712,
                                "text": "condition",
                                "rawText": "condition",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 149,
                                "end": 158
                            },
                            "consequent": {
                                "kind": 196712,
                                "text": "firstValue",
                                "rawText": "firstValue",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 160,
                                "end": 171
                            },
                            "alternate": {
                                "kind": 196712,
                                "text": "secondValue",
                                "rawText": "secondValue",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 185
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 147,
                            "end": 185
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 147,
                        "end": 186
                    },
                    "type": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "SomeType",
                            "rawText": "SomeType",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 189,
                            "end": 198
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 189,
                        "end": 199
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 186,
                    "end": 198
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 140,
                "end": 198
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 140,
            "end": 199
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 206,
                            "end": 210
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65592,
                                    "shortCircuit": {
                                        "kind": 196712,
                                        "text": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                        "rawText": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 214,
                                        "end": 269
                                    },
                                    "consequent": {
                                        "kind": 196712,
                                        "text": "baaaaaaaaaaaaaaaaaaaaar",
                                        "rawText": "baaaaaaaaaaaaaaaaaaaaar",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 273,
                                        "end": 297
                                    },
                                    "alternate": {
                                        "kind": 196712,
                                        "text": "baaaaaaaaaaaaaaaaaaaaaz",
                                        "rawText": "baaaaaaaaaaaaaaaaaaaaaz",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 301,
                                        "end": 325
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 212,
                                    "end": 325
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 212,
                                "end": 326
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Fooooooooooo",
                                    "rawText": "Fooooooooooo",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 329,
                                    "end": 342
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 329,
                                "end": 343
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 326,
                            "end": 342
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 206,
                        "end": 342
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 206,
                "end": 342
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 199,
            "end": 343
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 353,
                "end": 357
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 358,
                "end": 359
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 73738,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 65592,
                                        "shortCircuit": {
                                            "kind": 196712,
                                            "text": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                            "rawText": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 372,
                                            "end": 427
                                        },
                                        "consequent": {
                                            "kind": 196712,
                                            "text": "baaaaaaaaaaaaaaaaaaaaar",
                                            "rawText": "baaaaaaaaaaaaaaaaaaaaar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 433,
                                            "end": 457
                                        },
                                        "alternate": {
                                            "kind": 196712,
                                            "text": "baaaaaaaaaaaaaaaaaaaaaz",
                                            "rawText": "baaaaaaaaaaaaaaaaaaaaaz",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 463,
                                            "end": 487
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 370,
                                        "end": 487
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 370,
                                    "end": 488
                                },
                                "type": {
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "Fooooooooooo",
                                        "rawText": "Fooooooooooo",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 491,
                                        "end": 504
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 491,
                                    "end": 505
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 488,
                                "end": 504
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 361,
                            "end": 505
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 361,
                    "end": 505
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 359,
                "end": 507
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 343,
            "end": 507
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 517,
                "end": 521
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 522,
                "end": 523
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097373,
                            "expression": {
                                "kind": 73738,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 65592,
                                        "shortCircuit": {
                                            "kind": 196712,
                                            "text": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                            "rawText": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 535,
                                            "end": 590
                                        },
                                        "consequent": {
                                            "kind": 196712,
                                            "text": "baaaaaaaaaaaaaaaaaaaaar",
                                            "rawText": "baaaaaaaaaaaaaaaaaaaaar",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 598,
                                            "end": 622
                                        },
                                        "alternate": {
                                            "kind": 196712,
                                            "text": "baaaaaaaaaaaaaaaaaaaaaz",
                                            "rawText": "baaaaaaaaaaaaaaaaaaaaaz",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 630,
                                            "end": 654
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 533,
                                        "end": 654
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 533,
                                    "end": 655
                                },
                                "type": {
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "Fooooooooooo",
                                        "rawText": "Fooooooooooo",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 658,
                                        "end": 671
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 658,
                                    "end": 672
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 655,
                                "end": 671
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 525,
                            "end": 672
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 525,
                    "end": 672
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 523,
                "end": 674
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 507,
            "end": 674
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 684,
                "end": 688
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 689,
                "end": 690
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65774,
                                "operator": "void",
                                "operand": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 73738,
                                        "expression": {
                                            "kind": 66224,
                                            "expression": {
                                                "kind": 65592,
                                                "shortCircuit": {
                                                    "kind": 196712,
                                                    "text": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                                    "rawText": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 702,
                                                    "end": 757
                                                },
                                                "consequent": {
                                                    "kind": 196712,
                                                    "text": "baaaaaaaaaaaaaaaaaaaaar",
                                                    "rawText": "baaaaaaaaaaaaaaaaaaaaar",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 763,
                                                    "end": 787
                                                },
                                                "alternate": {
                                                    "kind": 196712,
                                                    "text": "baaaaaaaaaaaaaaaaaaaaaz",
                                                    "rawText": "baaaaaaaaaaaaaaaaaaaaaz",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 793,
                                                    "end": 817
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 701,
                                                "end": 817
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 701,
                                            "end": 818
                                        },
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Fooooooooooo",
                                                "rawText": "Fooooooooooo",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 821,
                                                "end": 834
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 821,
                                            "end": 835
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 818,
                                        "end": 834
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 699,
                                    "end": 835
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 692,
                                "end": 835
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 692,
                            "end": 836
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 692,
                    "end": 836
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 690,
                "end": 838
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 674,
            "end": 838
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "bifornCringerMoshedPerplexSawder",
                    "rawText": "bifornCringerMoshedPerplexSawder",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 838,
                    "end": 872
                },
                "operator": "=",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "askTrovenaBeenaDependsRowans",
                        "rawText": "askTrovenaBeenaDependsRowans",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 874,
                        "end": 905
                    },
                    "operator": "+",
                    "right": {
                        "kind": 66224,
                        "expression": {
                            "kind": 73738,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65592,
                                    "shortCircuit": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 196712,
                                            "text": "glimseGlyphsHazardNoopsTieTie",
                                            "rawText": "glimseGlyphsHazardNoopsTieTie",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 912,
                                            "end": 941
                                        },
                                        "operator": "===",
                                        "right": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 945,
                                            "end": 947
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 911,
                                        "end": 947
                                    },
                                    "consequent": {
                                        "kind": 196712,
                                        "text": "averredBathersBoxroomBuggyNurl",
                                        "rawText": "averredBathersBoxroomBuggyNurl",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 953,
                                        "end": 984
                                    },
                                    "alternate": {
                                        "kind": 196712,
                                        "text": "anodyneCondosMalateOverateRetinol",
                                        "rawText": "anodyneCondosMalateOverateRetinol",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 990,
                                        "end": 1024
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 911,
                                    "end": 1024
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 911,
                                "end": 1025
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "AnnularCooeedSplicesWalksWayWay",
                                    "rawText": "AnnularCooeedSplicesWalksWayWay",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1028,
                                    "end": 1060
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 1028,
                                "end": 1061
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1025,
                            "end": 1060
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 907,
                        "end": 1061
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 874,
                    "end": 1061
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 838,
                "end": 1061
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 838,
            "end": 1062
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "bifornCringerMoshedPerplexSawder",
                    "rawText": "bifornCringerMoshedPerplexSawder",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1062,
                    "end": 1096
                },
                "operator": "=",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "askTrovenaBeenaDependsRowans",
                        "rawText": "askTrovenaBeenaDependsRowans",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1098,
                        "end": 1129
                    },
                    "operator": "+",
                    "right": {
                        "kind": 66224,
                        "expression": {
                            "kind": 73738,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65592,
                                    "shortCircuit": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "glimseGlyphsHazardNoopsTieTie",
                                                "rawText": "glimseGlyphsHazardNoopsTieTie",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1136,
                                                "end": 1165
                                            },
                                            "operator": "===",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1169,
                                                "end": 1171
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1135,
                                            "end": 1171
                                        },
                                        "operator": "&&",
                                        "right": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "kochabCooieGameOnOboleUnweave",
                                                "rawText": "kochabCooieGameOnOboleUnweave",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1174,
                                                "end": 1206
                                            },
                                            "operator": "===",
                                            "right": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "Math",
                                                    "rawText": "Math",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1210,
                                                    "end": 1215
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "PI",
                                                    "rawText": "PI",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1216,
                                                    "end": 1218
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1215,
                                                "end": 1218,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 1215,
                                                    "end": 1216
                                                }
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1206,
                                            "end": 1218
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1135,
                                        "end": 1218
                                    },
                                    "consequent": {
                                        "kind": 196712,
                                        "text": "averredBathersBoxroomBuggyNurl",
                                        "rawText": "averredBathersBoxroomBuggyNurl",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1224,
                                        "end": 1255
                                    },
                                    "alternate": {
                                        "kind": 196712,
                                        "text": "anodyneCondosMalateOverateRetinol",
                                        "rawText": "anodyneCondosMalateOverateRetinol",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1261,
                                        "end": 1295
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1135,
                                    "end": 1295
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1135,
                                "end": 1296
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "AnnularCooeedSplicesWalksWayWay",
                                    "rawText": "AnnularCooeedSplicesWalksWayWay",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1299,
                                    "end": 1331
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 1299,
                                "end": 1332
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1296,
                            "end": 1331
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1131,
                        "end": 1332
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1098,
                    "end": 1332
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1062,
                "end": 1332
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1062,
            "end": 1333
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1333
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

