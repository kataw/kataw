# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
## Options

`````js
{}
`````
## Input

`````js
f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 9,
                        "end": 18
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 18,
                        "end": 19
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
                                                "start": 21,
                                                "end": 22
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 25
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                "left": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 30,
                                                    "end": 30
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 0,
                                                "start": 26,
                                                "end": 30
                                            },
                                            {
                                                "kind": 329,
                                                "key": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 30,
                                                    "end": 30
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
                                                                "start": 31,
                                                                "end": 32
                                                            },
                                                            {
                                                                "kind": 281,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 64,
                                                                    "start": 33,
                                                                    "end": 37
                                                                },
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "rest",
                                                                    "rawText": "rest",
                                                                    "flags": 96,
                                                                    "start": 37,
                                                                    "end": 41
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "right": null,
                                                                "flags": 0,
                                                                "start": 33,
                                                                "end": 41
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 31,
                                                        "end": 41
                                                    },
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 42
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 30,
                                                "end": 42
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 21,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 43
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
                                                    "start": 47,
                                                    "end": 48
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 49,
                                                    "end": 51
                                                },
                                                "flags": 32,
                                                "start": 47,
                                                "end": 51
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 52,
                                                    "end": 54
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "flags": 32,
                                                "start": 52,
                                                "end": 57
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "start": 61,
                                                    "end": 63
                                                },
                                                "flags": 32,
                                                "start": 58,
                                                "end": 63
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "start": 64,
                                                    "end": 66
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 96,
                                                    "start": 67,
                                                    "end": 69
                                                },
                                                "flags": 32,
                                                "start": 64,
                                                "end": 69
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 96,
                                                    "start": 70,
                                                    "end": 72
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 96,
                                                    "start": 73,
                                                    "end": 75
                                                },
                                                "flags": 32,
                                                "start": 70,
                                                "end": 75
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 47,
                                        "end": 75
                                    },
                                    "flags": 48,
                                    "start": 45,
                                    "end": 76
                                },
                                "flags": 34,
                                "start": 20,
                                "end": 76
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 20,
                        "end": 76
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 79,
                            "end": 79
                        },
                        "flags": 32,
                        "start": 77,
                        "end": 80
                    },
                    "returnType": null,
                    "flags": 416,
                    "start": 3,
                    "end": 80
                },
                "flags": 32,
                "start": 0,
                "end": 80
            },
            "flags": 16,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 30, end: 31
✖ ',' expected - start: 30, end: 31

```

