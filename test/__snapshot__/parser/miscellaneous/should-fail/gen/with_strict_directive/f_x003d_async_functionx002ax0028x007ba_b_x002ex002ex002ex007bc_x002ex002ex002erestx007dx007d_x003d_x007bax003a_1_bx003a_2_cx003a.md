# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 17,
                        "end": 23
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 23,
                        "end": 32
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 32,
                        "end": 33
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
                                                "start": 35,
                                                "end": 36
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 39
                                            },
                                            {
                                                "kind": 329,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 40,
                                                    "end": 44
                                                },
                                                "key": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 44,
                                                    "end": 44
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
                                                                "start": 45,
                                                                "end": 46
                                                            },
                                                            {
                                                                "kind": 281,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 64,
                                                                    "start": 47,
                                                                    "end": 51
                                                                },
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "rest",
                                                                    "rawText": "rest",
                                                                    "flags": 96,
                                                                    "start": 51,
                                                                    "end": 55
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": null,
                                                                "flags": 0,
                                                                "start": 47,
                                                                "end": 55
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 45,
                                                        "end": 55
                                                    },
                                                    "flags": 32,
                                                    "start": 44,
                                                    "end": 56
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 40,
                                                "end": 56
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 35,
                                        "end": 56
                                    },
                                    "flags": 32,
                                    "start": 34,
                                    "end": 57
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
                                                    "start": 61,
                                                    "end": 62
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 63,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "start": 61,
                                                "end": 65
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 66,
                                                    "end": 68
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
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
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 72,
                                                    "end": 74
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
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
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "start": 78,
                                                    "end": 80
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 4,
                                                    "rawText": "4",
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
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 96,
                                                    "start": 84,
                                                    "end": 86
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 96,
                                                    "start": 87,
                                                    "end": 89
                                                },
                                                "flags": 32,
                                                "start": 84,
                                                "end": 89
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 61,
                                        "end": 89
                                    },
                                    "flags": 48,
                                    "start": 59,
                                    "end": 90
                                },
                                "flags": 34,
                                "start": 34,
                                "end": 90
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 33,
                        "end": 91
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 93,
                            "end": 93
                        },
                        "flags": 32,
                        "start": 91,
                        "end": 94
                    },
                    "returnType": null,
                    "flags": 416,
                    "start": 17,
                    "end": 94
                },
                "flags": 32,
                "start": 13,
                "end": 94
            },
            "flags": 16,
            "start": 13,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 44, end: 45

```

