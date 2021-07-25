# Kataw parser test case

## Input

`````js
for ((x in a);;) {}
for (a=(a in b);;) {}
for (let a = (b in c); ; );
for (a && (b in c); ; );
for (a => (b in c); ; );
function* g() {
  for (yield (a in b); ; );
}
async function f() {
  for (await (a in b); ; );
}
for (a in b) 0;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 10
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 5,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5,
                "end": 13
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 16,
                "end": 19
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 19,
                "end": 23
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 27
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 29
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 32
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 27,
                        "end": 34
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 35
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 19,
                "end": 35
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 40
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 38,
                "end": 41
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 19,
            "end": 41
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 41,
                "end": 45
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 50
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
                                "start": 50,
                                "end": 52
                            },
                            "type": null,
                            "initializer": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 57
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 60
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 62
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 54,
                                    "end": 62
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 63
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 50,
                            "end": 63
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 63
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 41,
                "end": 63
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 68,
                "end": 69
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 41,
            "end": 69
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 69,
                "end": 73
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 76
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 79
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 81,
                            "end": 82
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 82,
                            "end": 85
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 87
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 79,
                        "end": 87
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 88
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 69,
                "end": 88
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 93,
                "end": 94
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 69,
            "end": 94
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 94,
                "end": 98
            },
            "initializer": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 101
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 104
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 107
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 110
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 112
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 104,
                        "end": 112
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 113
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 100,
                "end": 113
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 118,
                "end": 119
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 94,
            "end": 119
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 119,
                "end": 128
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 128,
                "end": 129
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 129,
                "end": 131
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 132,
                "end": 132
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 135,
                                "end": 141
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 148
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 150,
                                            "end": 151
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 151,
                                            "end": 154
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 154,
                                            "end": 156
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 148,
                                        "end": 156
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 148,
                                    "end": 157
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 143,
                                "end": 157
                            },
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 162,
                                "end": 163
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 163
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 163
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 133,
                "end": 165
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 119,
            "end": 165
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 165,
                "end": 171
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 171,
                "end": 180
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 180,
                "end": 182
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 183,
                "end": 183
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 186,
                                "end": 192
                            },
                            "initializer": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 194,
                                    "end": 199
                                },
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 201,
                                            "end": 202
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 202,
                                            "end": 205
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 205,
                                            "end": 207
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 199,
                                        "end": 207
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 199,
                                    "end": 208
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 194,
                                "end": 208
                            },
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 214
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 186,
                            "end": 214
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 214
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 184,
                "end": 216
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 165,
            "end": 216
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 216,
                "end": 220
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 222,
                "end": 223
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 223,
                "end": 226
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 226,
                "end": 228
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 229,
                    "end": 231
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 229,
                "end": 232
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 216,
            "end": 232
        }
    ],
    "isModule": false,
    "source": "for ((x in a);;) {}\nfor (a=(a in b);;) {}\nfor (let a = (b in c); ; );\nfor (a && (b in c); ; );\nfor (a => (b in c); ; );\nfunction* g() {\n  for (yield (a in b); ; );\n}\nasync function f() {\n  for (await (a in b); ; );\n}\nfor (a in b) 0;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 233
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in or of' statement must not be an arrow function - start: 100, end: 104
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 143, end: 150

```

