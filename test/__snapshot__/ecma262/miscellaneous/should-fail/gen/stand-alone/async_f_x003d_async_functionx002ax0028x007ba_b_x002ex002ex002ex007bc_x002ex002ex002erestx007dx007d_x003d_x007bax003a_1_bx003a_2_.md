# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
## Options

`````js
{}
`````
## Input

`````js
async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
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
                        "transformFlags": 0,
                        "start": 7,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 15
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 24
                        },
                        "asteriskToken": {
                            "kind": 201360950,
                            "flags": 64,
                            "transformFlags": 32,
                            "start": 24,
                            "end": 25
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
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 31
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 36
                                                    },
                                                    "left": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 36
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 0,
                                                    "transformFlags": 4096,
                                                    "start": 32,
                                                    "end": 36
                                                },
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 36
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
                                                                    "transformFlags": 0,
                                                                    "start": 37,
                                                                    "end": 38
                                                                },
                                                                {
                                                                    "kind": 281,
                                                                    "ellipsisToken": {
                                                                        "kind": 524302,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 39,
                                                                        "end": 43
                                                                    },
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "rest",
                                                                        "rawText": "rest",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 43,
                                                                        "end": 47
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "right": null,
                                                                    "flags": 0,
                                                                    "transformFlags": 4096,
                                                                    "start": 39,
                                                                    "end": 47
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 37,
                                                            "end": 47
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 48
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 48
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 48
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 49
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
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 54
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 57
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 53,
                                                    "end": 57
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 60
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 63
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 58,
                                                    "end": 63
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 64,
                                                        "end": 66
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 67,
                                                        "end": 69
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 64,
                                                    "end": 69
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 72
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 73,
                                                        "end": 75
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 70,
                                                    "end": 75
                                                },
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "e",
                                                        "rawText": "e",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 76,
                                                        "end": 78
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 5,
                                                        "rawText": "5",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 79,
                                                        "end": 81
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 76,
                                                    "end": 81
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 81
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 51,
                                        "end": 82
                                    },
                                    "flags": 34,
                                    "transformFlags": 4096,
                                    "start": 26,
                                    "end": 82
                                }
                            ],
                            "trailingComma": false,
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 82
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 85
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 86
                        },
                        "returnType": null,
                        "flags": 416,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 86
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 7,
                    "end": 86
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "async f = async function*({a, b, ...{c, ...rest}} = {a: 1, b: 2, c: 3, d: 4, e: 5}) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'async' modifier cannot be used here - start: 7, end: 9
✖ Identifier expected - start: 7, end: 9
✖ Identifier expected - start: 36, end: 37
✖ ',' expected - start: 36, end: 37

```

