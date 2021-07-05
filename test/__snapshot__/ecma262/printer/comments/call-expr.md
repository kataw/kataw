# Kataw parser test case

## Input

`````js
let (/*1*/) ;

x(a,/*1*/) ;

x(/*1*/a,/*2*/) ;

x/*1*/(a,/*2*/) ;

x/*1*/(a,/*2*/)/*3*/ ;

(x/*1*/(a,/*2*/)/*3*/ );

(x

/*1*/(a,/*2*/)


/*3*/ );


x/*1*/(a,






/*2*/








//3
) ;



let ({/*1*/}/*2*/=/*3*/c) ;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 5
                },
                "flags": 268435488,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 13,
                    "end": 16
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 17,
                            "end": 18
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 17,
                    "end": 19
                },
                "flags": 268435488,
                "start": 13,
                "end": 25
            },
            "flags": 16,
            "start": 13,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 27,
                    "end": 30
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 31,
                            "end": 37
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 31,
                    "end": 38
                },
                "flags": 268435488,
                "start": 27,
                "end": 44
            },
            "flags": 16,
            "start": 27,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 46,
                    "end": 49
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 55,
                            "end": 56
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 55,
                    "end": 57
                },
                "flags": 268435488,
                "start": 46,
                "end": 63
            },
            "flags": 16,
            "start": 46,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 65,
                    "end": 68
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 74,
                            "end": 75
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 74,
                    "end": 76
                },
                "flags": 268435488,
                "start": 65,
                "end": 82
            },
            "flags": 16,
            "start": 65,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 92,
                        "end": 93
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 99,
                                "end": 100
                            }
                        ],
                        "trailingComma": true,
                        "flags": 32,
                        "start": 99,
                        "end": 101
                    },
                    "flags": 268435488,
                    "start": 89,
                    "end": 107
                },
                "flags": 89,
                "start": 33,
                "end": 114
            },
            "flags": 16,
            "start": 89,
            "end": 115
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 118,
                        "end": 119
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 127,
                                "end": 128
                            }
                        ],
                        "trailingComma": true,
                        "flags": 33,
                        "start": 127,
                        "end": 129
                    },
                    "flags": 268435489,
                    "start": 115,
                    "end": 135
                },
                "flags": 115,
                "start": 33,
                "end": 145
            },
            "flags": 16,
            "start": 115,
            "end": 146
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 146,
                    "end": 150
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 156,
                            "end": 157
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 156,
                    "end": 158
                },
                "flags": 268435488,
                "start": 146,
                "end": 184
            },
            "flags": 16,
            "start": 146,
            "end": 186
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 97,
                    "start": 186,
                    "end": 193
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 196,
                                    "end": 196
                                },
                                "flags": 48,
                                "start": 195,
                                "end": 202
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 202,
                                "end": 208
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 208,
                                "end": 214
                            },
                            "flags": 32,
                            "start": 195,
                            "end": 214
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 195,
                    "end": 214
                },
                "flags": 268435488,
                "start": 186,
                "end": 215
            },
            "flags": 16,
            "start": 186,
            "end": 217
        }
    ],
    "isModule": false,
    "source": "let (/*1*/) ;\n\nx(a,/*1*/) ;\n\nx(/*1*/a,/*2*/) ;\n\nx/*1*/(a,/*2*/) ;\n\nx/*1*/(a,/*2*/)/*3*/ ;\n\n(x/*1*/(a,/*2*/)/*3*/ );\n\n(x\n\n/*1*/(a,/*2*/)\n\n\n/*3*/ );\n\n\nx/*1*/(a,\n\n\n\n\n\n\n/*2*/\n\n\n\n\n\n\n\n\n//3\n) ;\n\n\n\nlet ({/*1*/}/*2*/=/*3*/c) ;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 218
}
```

### Printed

```javascript

let();
x(
  a,
);

x(
  a,
);

x(
  a,
);

x(
  a,
);

(x(a));

(x(a));

x(
  a,
);

let(
  {} = c
);

```

### Diagnostics

```javascript
✔ No errors
```

