# Kataw parser test case

## Input

`````js
let a;
let b = `this is a template`;
let c = `this is a template\
with multiple
lines`;
let d = f`template with function`;
let e = f`template with ${/*1*/some}/*2*/ ${variables}`;
let f = f`template with ${some}${variables}${attached}`;
let g/*3*/ = /*4*/f/*5*/(/*6*/)`template with function call before`;
let h = f()/*7*/./*8*/g`template with more complex function call`;/*9*/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "type": null,
                        "initializer": {
                            "kind": 458761,
                            "text": "this is a template",
                            "rawText": "this is a template",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 35
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 10,
                        "end": 35
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 10,
                "end": 35
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 6,
            "end": 36
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 36,
                "end": 40
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 42
                        },
                        "type": null,
                        "initializer": {
                            "kind": 458761,
                            "text": "this is a templatewith multiple\nlines",
                            "rawText": "this is a template\\\nwith multiple\nlines",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 86
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 40,
                        "end": 86
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 40,
                "end": 86
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 36,
            "end": 87
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 87,
                "end": 91
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 93
                        },
                        "type": null,
                        "initializer": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 97
                            },
                            "template": {
                                "kind": 458761,
                                "text": "template with function",
                                "rawText": "template with function",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 121
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 121
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 91,
                        "end": 121
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 91,
                "end": 121
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 87,
            "end": 122
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 122,
                "end": 126
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 126,
                            "end": 128
                        },
                        "type": null,
                        "initializer": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 130,
                                "end": 132
                            },
                            "template": {
                                "kind": 227,
                                "spans": [
                                    {
                                        "kind": 65764,
                                        "rawText": "template with ",
                                        "text": "template with ",
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "some",
                                            "rawText": "some",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 149,
                                            "end": 158
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 132,
                                        "end": 158
                                    },
                                    {
                                        "kind": 65764,
                                        "rawText": "/*2*/ ",
                                        "text": "/*2*/ ",
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "variables",
                                            "rawText": "variables",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 167,
                                            "end": 176
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 158,
                                        "end": 176
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 178
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 178
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 130,
                            "end": 178
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 126,
                        "end": 178
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 126,
                "end": 178
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 122,
            "end": 179
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 179,
                "end": 183
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 183,
                            "end": 185
                        },
                        "type": null,
                        "initializer": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 189
                            },
                            "template": {
                                "kind": 227,
                                "spans": [
                                    {
                                        "kind": 65764,
                                        "rawText": "template with ",
                                        "text": "template with ",
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "some",
                                            "rawText": "some",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 206,
                                            "end": 210
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 189,
                                        "end": 210
                                    },
                                    {
                                        "kind": 65764,
                                        "rawText": "",
                                        "text": "",
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "variables",
                                            "rawText": "variables",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 213,
                                            "end": 222
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 210,
                                        "end": 222
                                    },
                                    {
                                        "kind": 65764,
                                        "rawText": "",
                                        "text": "",
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "attached",
                                            "rawText": "attached",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 225,
                                            "end": 233
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 222,
                                        "end": 233
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 233,
                                    "end": 235
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 189,
                                "end": 235
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 187,
                            "end": 235
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 183,
                        "end": 235
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 183,
                "end": 235
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 179,
            "end": 236
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 236,
                "end": 240
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 240,
                            "end": 242
                        },
                        "type": null,
                        "initializer": {
                            "kind": 226,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 249,
                                    "end": 256
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 262,
                                    "end": 262
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 249,
                                "end": 268
                            },
                            "template": {
                                "kind": 458761,
                                "text": "template with function call before",
                                "rawText": "template with function call before",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 268,
                                "end": 304
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 249,
                            "end": 304
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 240,
                        "end": 304
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 240,
                "end": 304
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 236,
            "end": 305
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 305,
                "end": 309
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "h",
                            "rawText": "h",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 309,
                            "end": 311
                        },
                        "type": null,
                        "initializer": {
                            "kind": 226,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 313,
                                        "end": 315
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 316,
                                        "end": 316
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 313,
                                    "end": 317
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 323,
                                    "end": 329
                                },
                                "flags": 268435488,
                                "transformFlags": 2,
                                "start": 313,
                                "end": 329
                            },
                            "template": {
                                "kind": 458761,
                                "text": "template with more complex function call",
                                "rawText": "template with more complex function call",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 329,
                                "end": 371
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 313,
                            "end": 371
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 309,
                        "end": 371
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 309,
                "end": 371
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 305,
            "end": 372
        }
    ],
    "isModule": false,
    "source": "let a;\nlet b = `this is a template`;\nlet c = `this is a template\\\nwith multiple\nlines`;\nlet d = f`template with function`;\nlet e = f`template with ${/*1*/some}/*2*/ ${variables}`;\nlet f = f`template with ${some}${variables}${attached}`;\nlet g/*3*/ = /*4*/f/*5*/(/*6*/)`template with function call before`;\nlet h = f()/*7*/./*8*/g`template with more complex function call`;/*9*/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 377
}
```

### Printed

```javascript
let a;
let b = `this is a template`;

let c = `this is a template\
with multiple
lines`;

let d = f`template with function`;

let e = f`template with ${some}, /*2*/ ${variables}`;

let f = f`template with ${some}, ${variables}, ${attached}`;

let g /*3*/ = f /*5*/(/*6*/ )`template with function call before`;

let h = f() /*7*/.g`template with more complex function call`; /*9*/

```

### Diagnostics

```javascript
✔ No errors
```

