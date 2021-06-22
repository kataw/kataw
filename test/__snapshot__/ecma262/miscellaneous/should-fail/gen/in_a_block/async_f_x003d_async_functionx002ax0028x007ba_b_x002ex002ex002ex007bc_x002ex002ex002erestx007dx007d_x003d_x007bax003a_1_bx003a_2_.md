# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
## Options

`````js
{}
`````
## Input

`````js
{ async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {} }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 1,
                                "end": 7
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "returnType": null,
                            "arrowToken": null,
                            "contents": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 9,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 9,
                                    "end": 11
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 17,
                                        "end": 26
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 26,
                                        "end": 27
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
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
                                                                "start": 29,
                                                                "end": 30
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "start": 31,
                                                                "end": 33
                                                            },
                                                            {
                                                                "kind": 281,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 64,
                                                                    "start": 34,
                                                                    "end": 38
                                                                },
                                                                "left": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "start": 38,
                                                                    "end": 38
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": null,
                                                                "flags": 0,
                                                                "start": 34,
                                                                "end": 38
                                                            },
                                                            {
                                                                "kind": 329,
                                                                "key": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "start": 38,
                                                                    "end": 38
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
                                                                                "start": 39,
                                                                                "end": 40
                                                                            },
                                                                            {
                                                                                "kind": 281,
                                                                                "ellipsisToken": {
                                                                                    "kind": 524302,
                                                                                    "flags": 64,
                                                                                    "start": 41,
                                                                                    "end": 45
                                                                                },
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "rest",
                                                                                    "rawText": "rest",
                                                                                    "flags": 96,
                                                                                    "start": 45,
                                                                                    "end": 49
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "right": null,
                                                                                "flags": 0,
                                                                                "start": 41,
                                                                                "end": 49
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 49
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 38,
                                                                    "end": 50
                                                                },
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "start": 38,
                                                                "end": 50
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 29,
                                                        "end": 50
                                                    },
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 51
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
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "start": 55,
                                                                    "end": 56
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 57,
                                                                    "end": 59
                                                                },
                                                                "flags": 32,
                                                                "start": 55,
                                                                "end": 59
                                                            },
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 60,
                                                                    "end": 62
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 2,
                                                                    "rawText": "2",
                                                                    "flags": 96,
                                                                    "start": 63,
                                                                    "end": 65
                                                                },
                                                                "flags": 32,
                                                                "start": 60,
                                                                "end": 65
                                                            },
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 66,
                                                                    "end": 68
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 3,
                                                                    "rawText": "3",
                                                                    "flags": 96,
                                                                    "start": 69,
                                                                    "end": 71
                                                                },
                                                                "flags": 32,
                                                                "start": 66,
                                                                "end": 71
                                                            },
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "d",
                                                                    "rawText": "d",
                                                                    "flags": 96,
                                                                    "start": 72,
                                                                    "end": 74
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 4,
                                                                    "rawText": "4",
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
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "e",
                                                                    "rawText": "e",
                                                                    "flags": 96,
                                                                    "start": 78,
                                                                    "end": 80
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 5,
                                                                    "rawText": "5",
                                                                    "flags": 96,
                                                                    "start": 81,
                                                                    "end": 83
                                                                },
                                                                "flags": 32,
                                                                "start": 78,
                                                                "end": 83
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 55,
                                                        "end": 83
                                                    },
                                                    "flags": 48,
                                                    "start": 53,
                                                    "end": 84
                                                },
                                                "flags": 34,
                                                "start": 28,
                                                "end": 84
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "start": 27,
                                        "end": 85
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 87,
                                            "end": 87
                                        },
                                        "flags": 32,
                                        "start": 85,
                                        "end": 88
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 11,
                                    "end": 88
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 88
                            },
                            "flags": 288,
                            "start": 1,
                            "end": 88
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 88
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 88
            },
            "flags": 16,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "{ async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'async' modifier cannot be used here - start: 9, end: 11
✖ Identifier expected - start: 9, end: 11
✖ Identifier expected - start: 38, end: 39
✖ ',' expected - start: 38, end: 39

```

