# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
## Options

`````js
{}
`````
## Input

`````js
{ f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {} }
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
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 5,
                                    "end": 11
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 20
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 21
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
                                                            "start": 23,
                                                            "end": 24
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 25,
                                                            "end": 27
                                                        },
                                                        {
                                                            "kind": 204,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "flags": 64,
                                                                "start": 28,
                                                                "end": 32
                                                            },
                                                            "key": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 32,
                                                                "end": 32
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
                                                                            "start": 33,
                                                                            "end": 34
                                                                        },
                                                                        {
                                                                            "kind": 281,
                                                                            "ellipsisToken": {
                                                                                "kind": 524302,
                                                                                "flags": 64,
                                                                                "start": 35,
                                                                                "end": 39
                                                                            },
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "rest",
                                                                                "rawText": "rest",
                                                                                "flags": 96,
                                                                                "start": 39,
                                                                                "end": 43
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "right": null,
                                                                            "flags": 0,
                                                                            "start": 35,
                                                                            "end": 43
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 33,
                                                                    "end": 43
                                                                },
                                                                "flags": 32,
                                                                "start": 32,
                                                                "end": 44
                                                            },
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 28,
                                                            "end": 44
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 23,
                                                    "end": 44
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 45
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
                                                                "start": 49,
                                                                "end": 50
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 51,
                                                                "end": 53
                                                            },
                                                            "flags": 32,
                                                            "start": 49,
                                                            "end": 53
                                                        },
                                                        {
                                                            "kind": 219,
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "start": 54,
                                                                "end": 56
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 96,
                                                                "start": 57,
                                                                "end": 59
                                                            },
                                                            "flags": 32,
                                                            "start": 54,
                                                            "end": 59
                                                        },
                                                        {
                                                            "kind": 219,
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 60,
                                                                "end": 62
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 3,
                                                                "rawText": "3",
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
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "d",
                                                                "rawText": "d",
                                                                "flags": 96,
                                                                "start": 66,
                                                                "end": 68
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 4,
                                                                "rawText": "4",
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
                                                            "generatorToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "e",
                                                                "rawText": "e",
                                                                "flags": 96,
                                                                "start": 72,
                                                                "end": 74
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 5,
                                                                "rawText": "5",
                                                                "flags": 96,
                                                                "start": 75,
                                                                "end": 77
                                                            },
                                                            "flags": 32,
                                                            "start": 72,
                                                            "end": 77
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 49,
                                                    "end": 77
                                                },
                                                "flags": 48,
                                                "start": 47,
                                                "end": 78
                                            },
                                            "flags": 34,
                                            "start": 22,
                                            "end": 78
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "start": 21,
                                    "end": 79
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 81,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "start": 79,
                                    "end": 82
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 416,
                                "start": 5,
                                "end": 82
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 82
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 82
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 82
            },
            "flags": 16,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "source": "{ f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 32, end: 33

```

