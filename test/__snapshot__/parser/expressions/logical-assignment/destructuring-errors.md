# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
([ x ] ||= [ 2 ]);

([ x ||= 2 ] = [ 2 ]);

({ x } ||= { x: 2 });

({ x: x ||= 2 ] = { x: 2 });

([ x ] &&= [ 2 ]);

([ x &&= 2 ] = [ 2 ]);

({ x } &&= { x: 2 });

({ x: x &&= 2 ] = { x: 2 });

x({ x: x &&= 2 ] = { x: 2 });
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 4
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 4
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 4138,
                        "flags": 512,
                        "start": 6,
                        "end": 10
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 12,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 256,
                        "start": 10,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "operatorToken": {
                                        "kind": 4138,
                                        "flags": 512,
                                        "start": 24,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "flags": 256,
                                    "start": 22,
                                    "end": 30
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 22,
                            "end": 30
                        },
                        "flags": 256,
                        "start": 21,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 512,
                        "start": 32,
                        "end": 34
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 36,
                            "end": 38
                        },
                        "flags": 256,
                        "start": 34,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 21,
                    "end": 40
                },
                "flags": 256,
                "start": 18,
                "end": 41
            },
            "flags": 128,
            "start": 18,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 46,
                                    "end": 48
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 46,
                            "end": 48
                        },
                        "flags": 256,
                        "start": 45,
                        "end": 50
                    },
                    "operatorToken": {
                        "kind": 4138,
                        "flags": 512,
                        "start": 50,
                        "end": 54
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 56,
                                        "end": 58
                                    },
                                    "flags": 256,
                                    "start": 56,
                                    "end": 61
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 56,
                            "end": 61
                        },
                        "flags": 256,
                        "start": 54,
                        "end": 63
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 63
                },
                "flags": 256,
                "start": 42,
                "end": 64
            },
            "flags": 128,
            "start": 42,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 256,
                    "start": 65,
                    "end": 80
                },
                "flags": 256,
                "start": 65,
                "end": 80
            },
            "flags": 128,
            "start": 65,
            "end": 80
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 86,
                            "end": 88
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 768,
                                "start": 89,
                                "end": 91
                            },
                            "flags": 128,
                            "start": 89,
                            "end": 91
                        },
                        "flags": 128,
                        "start": 86,
                        "end": 91
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 86,
                "end": 91
            },
            "flags": 128,
            "start": 84,
            "end": 93
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 94,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 99,
                                    "end": 101
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 99,
                            "end": 101
                        },
                        "flags": 256,
                        "start": 98,
                        "end": 103
                    },
                    "operatorToken": {
                        "kind": 4139,
                        "flags": 512,
                        "start": 103,
                        "end": 107
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 109,
                                    "end": 111
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 109,
                            "end": 111
                        },
                        "flags": 256,
                        "start": 107,
                        "end": 113
                    },
                    "flags": 256,
                    "start": 98,
                    "end": 113
                },
                "flags": 256,
                "start": 95,
                "end": 114
            },
            "flags": 128,
            "start": 95,
            "end": 115
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 119,
                                        "end": 121
                                    },
                                    "operatorToken": {
                                        "kind": 4139,
                                        "flags": 512,
                                        "start": 121,
                                        "end": 125
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 125,
                                        "end": 127
                                    },
                                    "flags": 256,
                                    "start": 119,
                                    "end": 127
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 119,
                            "end": 127
                        },
                        "flags": 256,
                        "start": 118,
                        "end": 129
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 512,
                        "start": 129,
                        "end": 131
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 133,
                                    "end": 135
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 133,
                            "end": 135
                        },
                        "flags": 256,
                        "start": 131,
                        "end": 137
                    },
                    "flags": 256,
                    "start": 118,
                    "end": 137
                },
                "flags": 256,
                "start": 115,
                "end": 138
            },
            "flags": 128,
            "start": 115,
            "end": 139
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 143,
                                    "end": 145
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 143,
                            "end": 145
                        },
                        "flags": 256,
                        "start": 142,
                        "end": 147
                    },
                    "operatorToken": {
                        "kind": 4139,
                        "flags": 512,
                        "start": 147,
                        "end": 151
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 156,
                                        "end": 158
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 153,
                                        "end": 155
                                    },
                                    "flags": 256,
                                    "start": 153,
                                    "end": 158
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 153,
                            "end": 158
                        },
                        "flags": 256,
                        "start": 151,
                        "end": 160
                    },
                    "flags": 256,
                    "start": 142,
                    "end": 160
                },
                "flags": 256,
                "start": 139,
                "end": 161
            },
            "flags": 128,
            "start": 139,
            "end": 162
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 256,
                    "start": 162,
                    "end": 177
                },
                "flags": 256,
                "start": 162,
                "end": 177
            },
            "flags": 128,
            "start": 162,
            "end": 177
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 183,
                            "end": 185
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 768,
                                "start": 186,
                                "end": 188
                            },
                            "flags": 128,
                            "start": 186,
                            "end": 188
                        },
                        "flags": 128,
                        "start": 183,
                        "end": 188
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 183,
                "end": 188
            },
            "flags": 128,
            "start": 181,
            "end": 190
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 191,
            "end": 192
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 192,
                    "end": 195
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 200,
                                                "end": 202
                                            },
                                            "operatorToken": {
                                                "kind": 4139,
                                                "flags": 512,
                                                "start": 202,
                                                "end": 206
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 768,
                                                "start": 206,
                                                "end": 208
                                            },
                                            "flags": 256,
                                            "start": 197,
                                            "end": 208
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 197,
                                            "end": 199
                                        },
                                        "flags": 256,
                                        "start": 197,
                                        "end": 208
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 197,
                                "end": 208
                            },
                            "flags": 256,
                            "start": 196,
                            "end": 208
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 196,
                    "end": 208
                },
                "flags": 256,
                "start": 192,
                "end": 208
            },
            "flags": 128,
            "start": 192,
            "end": 208
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 214,
                            "end": 216
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 768,
                                "start": 217,
                                "end": 219
                            },
                            "flags": 128,
                            "start": 217,
                            "end": 219
                        },
                        "flags": 128,
                        "start": 214,
                        "end": 219
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 214,
                "end": 219
            },
            "flags": 128,
            "start": 212,
            "end": 221
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 222,
            "end": 223
        }
    ],
    "isModule": false,
    "text": "([ x ] ||= [ 2 ]);\n\n([ x ||= 2 ] = [ 2 ]);\n\n({ x } ||= { x: 2 });\n\n({ x: x ||= 2 ] = { x: 2 });\n\n([ x ] &&= [ 2 ]);\n\n([ x &&= 2 ] = [ 2 ]);\n\n({ x } &&= { x: 2 });\n\n({ x: x &&= 2 ] = { x: 2 });\n\nx({ x: x &&= 2 ] = { x: 2 });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 223
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 6, end: 10
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 32, end: 34
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 50, end: 54
✖ ',' expected - start: 80, end: 82
✖ Statement expected - start: 80, end: 82
✖ Statement expected - start: 82, end: 84
✖ Statement expected - start: 93, end: 94
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 103, end: 107
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 129, end: 131
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 147, end: 151
✖ ',' expected - start: 177, end: 179
✖ Statement expected - start: 177, end: 179
✖ Statement expected - start: 179, end: 181
✖ Statement expected - start: 190, end: 191
✖ ',' expected - start: 208, end: 210
✖ ',' expected - start: 208, end: 210
✖ Statement expected - start: 208, end: 210
✖ Statement expected - start: 210, end: 212
✖ Statement expected - start: 221, end: 222

```

