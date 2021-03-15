# Kataw parser test case

## Input

`````js
interface foo1 {
  bar3/* foo */ (/* baz */) // bat
  bar/* foo */ ? /* bar */ (/* baz */) /* bat */;
  bar2/* foo */ (/* baz */) /* bat */
}

interface foo2 {
  bar/* foo */ ? /* bar */ (bar: /* baz */ string): /* bat */ string;
}

interface foo3 {
  /* foo */ (/* bar */): /* baz */ string;
}

interface foo4 {
  /* foo */ (bar: /* bar */ string): /* baz */ string;
}

interface foo5 {
  /* foo */ new /* bar */  (a: /* baz */ string): /* bat */ string
}

interface foo6 {
  /* foo */ new /* bar */ (/* baz */): /* bat */ string
}

type foo7 = /* foo */ (/* bar */) /* baz */ => void

type foo8 = /* foo */ (a: /* bar */ string) /* baz */ => void

let foo9: new /* foo */ (/* bar */) /* baz */ => string;

let foo10: new /* foo */ (a: /* bar */ string) /* baz */ => string;

abstract class Test {
  abstract foo12 /* foo */ (a: /* bar */ string): /* baz */ void

  abstract foo13 /* foo */ (/* bar */) /* baz */
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface foo1 {\n  bar3/* foo */ (/* baz */) // bat\n  bar/* foo */ ? /* bar */ (/* baz */) /* bat */;\n  bar2/* foo */ (/* baz */) /* bat */\n}\n\ninterface foo2 {\n  bar/* foo */ ? /* bar */ (bar: /* baz */ string): /* bat */ string;\n}\n\ninterface foo3 {\n  /* foo */ (/* bar */): /* baz */ string;\n}\n\ninterface foo4 {\n  /* foo */ (bar: /* bar */ string): /* baz */ string;\n}\n\ninterface foo5 {\n  /* foo */ new /* bar */  (a: /* baz */ string): /* bat */ string\n}\n\ninterface foo6 {\n  /* foo */ new /* bar */ (/* baz */): /* bat */ string\n}\n\ntype foo7 = /* foo */ (/* bar */) /* baz */ => void\n\ntype foo8 = /* foo */ (a: /* bar */ string) /* baz */ => void\n\nlet foo9: new /* foo */ (/* bar */) /* baz */ => string;\n\nlet foo10: new /* foo */ (a: /* bar */ string) /* baz */ => string;\n\nabstract class Test {\n  abstract foo12 /* foo */ (a: /* bar */ string): /* baz */ void\n\n  abstract foo13 /* foo */ (/* bar */) /* baz */\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "foo1",
                    "rawText": "foo1",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 14
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "bar3",
                                "rawText": "bar3",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 23
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 34,
                                "end": 34
                            },
                            "returnType": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 16,
                            "end": 44
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 57
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": true,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 80,
                                "end": 80
                            },
                            "returnType": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 44,
                            "end": 101
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "bar2",
                                "rawText": "bar2",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 101,
                                "end": 108
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 119,
                                "end": 119
                            },
                            "returnType": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 101,
                            "end": 129
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 16,
                    "end": 129
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 141
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "foo2",
                    "rawText": "foo2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 157
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 165
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": true,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 188,
                                            "end": 191
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 192,
                                            "end": 209
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 188,
                                        "end": 209
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 188,
                                "end": 209
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 211,
                                "end": 228
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 159,
                            "end": 229
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 159,
                    "end": 229
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 141,
                "end": 231
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "foo3",
                    "rawText": "foo3",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 242,
                    "end": 247
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8236,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 263,
                                "end": 263
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 274,
                                "end": 291
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 249,
                            "end": 292
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 249,
                    "end": 292
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 231,
                "end": 294
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "foo4",
                    "rawText": "foo4",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 305,
                    "end": 310
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8236,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 326,
                                            "end": 329
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 330,
                                            "end": 347
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 326,
                                        "end": 347
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 326,
                                "end": 347
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 349,
                                "end": 366
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 312,
                            "end": 367
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 312,
                    "end": 367
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 294,
                "end": 369
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "foo5",
                    "rawText": "foo5",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 380,
                    "end": 385
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8250,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 416,
                                            "end": 417
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 418,
                                            "end": 435
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 416,
                                        "end": 435
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 416,
                                "end": 435
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 437,
                                "end": 454
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 403,
                            "end": 454
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 387,
                    "end": 454
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 369,
                "end": 456
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "foo6",
                    "rawText": "foo6",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 467,
                    "end": 472
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8250,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 502,
                                "end": 502
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 513,
                                "end": 530
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 490,
                            "end": 530
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 474,
                    "end": 530
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 456,
                "end": 532
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "foo7",
                    "rawText": "foo7",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 538,
                    "end": 543
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 557,
                        "end": 557
                    },
                    "returnType": {
                        "kind": 4202742,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 580,
                        "end": 585
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 545,
                    "end": 585
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 532,
                "end": 585
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "foo8",
                    "rawText": "foo8",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 591,
                    "end": 596
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [
                            {
                                "kind": 8366,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 610,
                                    "end": 611
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 612,
                                    "end": 629
                                },
                                "initializer": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 610,
                                "end": 629
                            }
                        ],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 610,
                        "end": 629
                    },
                    "returnType": {
                        "kind": 4202742,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 643,
                        "end": 648
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 598,
                    "end": 648
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 585,
                "end": 648
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "foo9",
                                "rawText": "foo9",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 653,
                                "end": 658
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8251,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "accessModifier": null,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 675,
                                    "end": 675
                                },
                                "returnType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 698,
                                    "end": 705
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 659,
                                "end": 705
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 653,
                            "end": 705
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 653,
                    "end": 705
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 648,
                "end": 706
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "foo10",
                                "rawText": "foo10",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 711,
                                "end": 717
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8251,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "accessModifier": null,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 734,
                                                "end": 735
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 736,
                                                "end": 753
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 734,
                                            "end": 753
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 734,
                                    "end": 753
                                },
                                "returnType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 767,
                                    "end": 774
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 718,
                                "end": 774
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 711,
                            "end": 774
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 711,
                    "end": 774
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 706,
                "end": 775
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Test",
                    "rawText": "Test",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 791,
                    "end": 796
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": true,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "foo12",
                                    "rawText": "foo12",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 809,
                                    "end": 815
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 827,
                                                "end": 828
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 829,
                                                "end": 846
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 827,
                                            "end": 846
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 827,
                                    "end": 847
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 848,
                                    "end": 863
                                },
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 815,
                                "end": 863
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 798,
                            "end": 863
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": true,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "foo13",
                                    "rawText": "foo13",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 875,
                                    "end": 881
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 893,
                                    "end": 903
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 881,
                                "end": 903
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 863,
                            "end": 903
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 798,
                    "end": 915
                },
                "decorators": null,
                "isAbstract": true,
                "flags": 268435456,
                "intersects": false,
                "transformFlags": 2097153,
                "start": 785,
                "end": 915
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 915
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 915
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

