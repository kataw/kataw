# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 13,
                    "end": 19
                },
                "returnType": null,
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 21,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 21,
                        "end": 23
                    },
                    "right": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 23,
                            "end": 29
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 29,
                            "end": 38
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 38,
                            "end": 39
                        },
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 41,
                                                    "end": 42
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 43,
                                                    "end": 45
                                                },
                                                {
                                                    "kind": 329,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 46,
                                                        "end": 50
                                                    },
                                                    "key": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 64,
                                                        "start": 50,
                                                        "end": 50
                                                    },
                                                    "value": {
                                                        "kind": 212,
                                                        "propertyList": {
                                                            "kind": 213,
                                                            "properties": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 51,
                                                                    "end": 52
                                                                },
                                                                {
                                                                    "kind": 281,
                                                                    "ellipsisToken": {
                                                                        "kind": 524302,
                                                                        "flags": 64,
                                                                        "start": 53,
                                                                        "end": 57
                                                                    },
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "rest",
                                                                        "rawText": "rest",
                                                                        "flags": 96,
                                                                        "start": 57,
                                                                        "end": 61
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "right": null,
                                                                    "flags": 0,
                                                                    "start": 53,
                                                                    "end": 61
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 51,
                                                            "end": 61
                                                        },
                                                        "flags": 32,
                                                        "start": 50,
                                                        "end": 62
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 46,
                                                    "end": 62
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 41,
                                            "end": 62
                                        },
                                        "flags": 32,
                                        "start": 40,
                                        "end": 63
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 67,
                                                        "end": 68
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 69,
                                                        "end": 71
                                                    },
                                                    "flags": 32,
                                                    "start": 67,
                                                    "end": 71
                                                },
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 72,
                                                        "end": 74
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 96,
                                                        "start": 75,
                                                        "end": 77
                                                    },
                                                    "flags": 32,
                                                    "start": 72,
                                                    "end": 77
                                                },
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 78,
                                                        "end": 80
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "start": 81,
                                                        "end": 83
                                                    },
                                                    "flags": 32,
                                                    "start": 78,
                                                    "end": 83
                                                },
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 96,
                                                        "start": 84,
                                                        "end": 86
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 96,
                                                        "start": 87,
                                                        "end": 89
                                                    },
                                                    "flags": 32,
                                                    "start": 84,
                                                    "end": 89
                                                },
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "e",
                                                        "rawText": "e",
                                                        "flags": 96,
                                                        "start": 90,
                                                        "end": 92
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 5,
                                                        "rawText": "5",
                                                        "flags": 96,
                                                        "start": 93,
                                                        "end": 95
                                                    },
                                                    "flags": 32,
                                                    "start": 90,
                                                    "end": 95
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 67,
                                            "end": 95
                                        },
                                        "flags": 48,
                                        "start": 65,
                                        "end": 96
                                    },
                                    "flags": 34,
                                    "start": 40,
                                    "end": 96
                                }
                            ],
                            "trailingComma": false,
                            "flags": 34,
                            "start": 39,
                            "end": 97
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 99,
                                "end": 99
                            },
                            "flags": 32,
                            "start": 97,
                            "end": 100
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 416,
                        "start": 23,
                        "end": 100
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 100
                },
                "flags": 288,
                "start": 13,
                "end": 100
            },
            "flags": 16,
            "start": 13,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 23
✖ Identifier expected - start: 50, end: 51

```

