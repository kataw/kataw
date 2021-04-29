# Kataw parser test case

## Input

`````js
//a ? (b) : c => d; // a ? b : (c => d)
a ? (b) : c => d : e; // a ? ((b): c => d) : e
a ? (b) : (c) : d => e; // a ? b : ((c): d => e)

//a ? (b = (c) => d) : e => f; // a ? (b = (c) => d) : (e => f)
a ? (b = (c) => d) : e => f : g; // a ? ((b = (c) => d): e => f) : g

b ? c ? (d) : e => (f) : g : h; // b ? (c ? ((d): e => f) : g) : h
//a ? b ? c ? (d) : e => (f) : g : h; // a ? (b ? (c ? d : (e => f)) : g) : h

a ? b ? (c) : (d) : (e) => f : g; // a ? (b ? c : ((d): e => f)) : g

// Multiple arrow functions
a ? (b) : c => d : (e) : f => g; // a ? ((b): c => d) : ((e): f => g)

// Multiple nested arrow functions (<T> is needed to avoid ambiguities)
a ? (b) : c => (d) : e => f : g; // a ? ((b): c => ((d): e => f)) : g
//a ? (b) : c => <T>(d) : e => f; // a ? b : (c => (<T>(d): e => f))
//a ? <T>(b) : c => (d) : e => f; // a ? (<T>(b): c => d) : (e => f)

// Invalid lhs value inside parentheses
//a ? (b => c) : d => e; // a ? (b => c) : (d => e)
//a ? b ? (c => d) : e => f : g; // a ? (b ? (c => d) : (e => f)) : g

// Invalid lhs value inside parentheses inside arrow function
// a ? (b) : c => (d => e) : f => g; // a ? ((b): c => (d => e)) : (f => g)
// a ? b ? (c => d) : e => (f => g) : h => i; // a ? (b ? (c => d) : (e => (f => g))) : (h => i)

// Function as type annotation
//a ? (b) : (c => d) => e : f; // a ? ((b): (c => d) => e) : f

// Async functions or calls
//a ? async (b) : c => d; // a ? (async(b)) : (c => d)
//a ? async (b) : c => d : e; // a ? (async (b): c => d) : e
//a ? async (b => c) : d => e; // a ? (async(b => c)) : (d => e)
//a ? async (b) => (c => d) : e => f; // a ? (async (b) => c => d) : (e => f)

// let icecream = what == "cone"
//   ? p => (!!p ? `here's your ${p} cone` : `just the empty cone for you`)
  // : p => `here's your ${p} ${what}`;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 41
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 41,
                    "end": 43
                },
                "consequent": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 51,
                        "end": 54
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 45,
                            "end": 46
                        }
                    ],
                    "asyncToken": null,
                    "returnType": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 49,
                                "end": 51
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 49,
                            "end": 51
                        },
                        "flags": 0,
                        "start": 47,
                        "end": 51
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 54,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 43,
                    "end": 56
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 56,
                    "end": 58
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 58,
                    "end": 60
                },
                "flags": 32,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "start": 0,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 61,
                    "end": 88
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 88,
                    "end": 90
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 92,
                        "end": 93
                    },
                    "flags": 32,
                    "start": 90,
                    "end": 94
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 94,
                    "end": 96
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 104,
                        "end": 107
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 98,
                            "end": 99
                        }
                    ],
                    "asyncToken": null,
                    "returnType": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 102,
                                "end": 104
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 102,
                            "end": 104
                        },
                        "flags": 0,
                        "start": 100,
                        "end": 104
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 107,
                        "end": 109
                    },
                    "flags": 32,
                    "start": 96,
                    "end": 109
                },
                "flags": 32,
                "start": 61,
                "end": 109
            },
            "flags": 16,
            "start": 61,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 110,
                    "end": 202
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 202,
                    "end": 204
                },
                "consequent": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 223,
                        "end": 226
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 206,
                                "end": 207
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 207,
                                "end": 209
                            },
                            "right": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 213,
                                    "end": 216
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 211,
                                        "end": 212
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 216,
                                    "end": 218
                                },
                                "flags": 32,
                                "start": 209,
                                "end": 218
                            },
                            "flags": 32,
                            "start": 204,
                            "end": 218
                        }
                    ],
                    "asyncToken": null,
                    "returnType": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 221,
                                "end": 223
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 221,
                            "end": 223
                        },
                        "flags": 0,
                        "start": 219,
                        "end": 223
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 226,
                        "end": 228
                    },
                    "flags": 34,
                    "start": 204,
                    "end": 228
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 228,
                    "end": 230
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 230,
                    "end": 232
                },
                "flags": 32,
                "start": 110,
                "end": 232
            },
            "flags": 16,
            "start": 110,
            "end": 233
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 233,
                    "end": 272
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 272,
                    "end": 274
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 274,
                        "end": 276
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 0,
                        "start": 276,
                        "end": 278
                    },
                    "consequent": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 286,
                            "end": 289
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 280,
                                "end": 281
                            }
                        ],
                        "asyncToken": null,
                        "returnType": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 284,
                                    "end": 286
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 284,
                                "end": 286
                            },
                            "flags": 0,
                            "start": 282,
                            "end": 286
                        },
                        "contents": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 291,
                                "end": 292
                            },
                            "flags": 32,
                            "start": 289,
                            "end": 293
                        },
                        "flags": 32,
                        "start": 278,
                        "end": 293
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 0,
                        "start": 293,
                        "end": 295
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 96,
                        "start": 295,
                        "end": 297
                    },
                    "flags": 32,
                    "start": 274,
                    "end": 297
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 297,
                    "end": 299
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "h",
                    "rawText": "h",
                    "flags": 96,
                    "start": 299,
                    "end": 301
                },
                "flags": 32,
                "start": 233,
                "end": 301
            },
            "flags": 16,
            "start": 233,
            "end": 302
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 302,
                    "end": 418
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 418,
                    "end": 420
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 420,
                        "end": 422
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 0,
                        "start": 422,
                        "end": 424
                    },
                    "consequent": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 426,
                            "end": 427
                        },
                        "flags": 32,
                        "start": 424,
                        "end": 428
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 0,
                        "start": 428,
                        "end": 430
                    },
                    "alternate": {
                        "kind": 271,
                        "arrowToken": null,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 432,
                                "end": 433
                            }
                        ],
                        "asyncToken": null,
                        "returnType": {
                            "kind": 139,
                            "type": {
                                "kind": 148,
                                "parameters": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "start": 438,
                                            "end": 439
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 438,
                                        "end": 439
                                    }
                                ],
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 443,
                                        "end": 445
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 443,
                                    "end": 445
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 436,
                                "end": 445
                            },
                            "flags": 0,
                            "start": 434,
                            "end": 445
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 447,
                            "end": 449
                        },
                        "flags": 32,
                        "start": 430,
                        "end": 449
                    },
                    "flags": 32,
                    "start": 420,
                    "end": 449
                },
                "colonToken": null,
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 450,
                        "end": 516
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 0,
                        "start": 516,
                        "end": 518
                    },
                    "consequent": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 526,
                            "end": 529
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 520,
                                "end": 521
                            }
                        ],
                        "asyncToken": null,
                        "returnType": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 524,
                                    "end": 526
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 524,
                                "end": 526
                            },
                            "flags": 0,
                            "start": 522,
                            "end": 526
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 529,
                            "end": 531
                        },
                        "flags": 32,
                        "start": 518,
                        "end": 531
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 0,
                        "start": 531,
                        "end": 533
                    },
                    "alternate": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 541,
                            "end": 544
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 535,
                                "end": 536
                            }
                        ],
                        "asyncToken": null,
                        "returnType": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 539,
                                    "end": 541
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 539,
                                "end": 541
                            },
                            "flags": 0,
                            "start": 537,
                            "end": 541
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 544,
                            "end": 546
                        },
                        "flags": 32,
                        "start": 533,
                        "end": 546
                    },
                    "flags": 32,
                    "start": 450,
                    "end": 546
                },
                "flags": 32,
                "start": 302,
                "end": 546
            },
            "flags": 16,
            "start": 302,
            "end": 547
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 547,
                    "end": 659
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 659,
                    "end": 661
                },
                "consequent": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 669,
                        "end": 672
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 663,
                            "end": 664
                        }
                    ],
                    "asyncToken": null,
                    "returnType": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 667,
                                "end": 669
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 667,
                            "end": 669
                        },
                        "flags": 0,
                        "start": 665,
                        "end": 669
                    },
                    "contents": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 680,
                            "end": 683
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 674,
                                "end": 675
                            }
                        ],
                        "asyncToken": null,
                        "returnType": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 678,
                                    "end": 680
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 678,
                                "end": 680
                            },
                            "flags": 0,
                            "start": 676,
                            "end": 680
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 683,
                            "end": 685
                        },
                        "flags": 32,
                        "start": 672,
                        "end": 685
                    },
                    "flags": 32,
                    "start": 661,
                    "end": 685
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 685,
                    "end": 687
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 687,
                    "end": 689
                },
                "flags": 32,
                "start": 547,
                "end": 689
            },
            "flags": 16,
            "start": 547,
            "end": 690
        }
    ],
    "isModule": false,
    "source": "//a ? (b) : c => d; // a ? b : (c => d)\na ? (b) : c => d : e; // a ? ((b): c => d) : e\na ? (b) : (c) : d => e; // a ? b : ((c): d => e)\n\n//a ? (b = (c) => d) : e => f; // a ? (b = (c) => d) : (e => f)\na ? (b = (c) => d) : e => f : g; // a ? ((b = (c) => d): e => f) : g\n\nb ? c ? (d) : e => (f) : g : h; // b ? (c ? ((d): e => f) : g) : h\n//a ? b ? c ? (d) : e => (f) : g : h; // a ? (b ? (c ? d : (e => f)) : g) : h\n\na ? b ? (c) : (d) : (e) => f : g; // a ? (b ? c : ((d): e => f)) : g\n\n// Multiple arrow functions\na ? (b) : c => d : (e) : f => g; // a ? ((b): c => d) : ((e): f => g)\n\n// Multiple nested arrow functions (<T> is needed to avoid ambiguities)\na ? (b) : c => (d) : e => f : g; // a ? ((b): c => ((d): e => f)) : g\n//a ? (b) : c => <T>(d) : e => f; // a ? b : (c => (<T>(d): e => f))\n//a ? <T>(b) : c => (d) : e => f; // a ? (<T>(b): c => d) : (e => f)\n\n// Invalid lhs value inside parentheses\n//a ? (b => c) : d => e; // a ? (b => c) : (d => e)\n//a ? b ? (c => d) : e => f : g; // a ? (b ? (c => d) : (e => f)) : g\n\n// Invalid lhs value inside parentheses inside arrow function\n// a ? (b) : c => (d => e) : f => g; // a ? ((b): c => (d => e)) : (f => g)\n// a ? b ? (c => d) : e => (f => g) : h => i; // a ? (b ? (c => d) : (e => (f => g))) : (h => i)\n\n// Function as type annotation\n//a ? (b) : (c => d) => e : f; // a ? ((b): (c => d) => e) : f\n\n// Async functions or calls\n//a ? async (b) : c => d; // a ? (async(b)) : (c => d)\n//a ? async (b) : c => d : e; // a ? (async (b): c => d) : e\n//a ? async (b => c) : d => e; // a ? (async(b => c)) : (d => e)\n//a ? async (b) => (c => d) : e => f; // a ? (async (b) => c => d) : (e => f)\n\n// let icecream = what == \"cone\"\n//   ? p => (!!p ? `here's your ${p} cone` : `just the empty cone for you`)\n  // : p => `here's your ${p} ${what}`;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1797
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

