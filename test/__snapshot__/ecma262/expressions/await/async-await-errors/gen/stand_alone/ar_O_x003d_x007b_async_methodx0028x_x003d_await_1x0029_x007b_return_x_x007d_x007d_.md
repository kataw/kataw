# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: ar O = { async method(x = await 1) { return x; } };
## Options

`````js
{}
`````
## Input

`````js
ar O = { async method(x = await 1) { return x; } };
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
                "kind": 134299649,
                "text": "ar",
                "rawText": "ar",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "O",
                    "rawText": "O",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 14
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 23
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 25,
                                                    "end": 33
                                                },
                                                "flags": 34,
                                                "transformFlags": 4096,
                                                "start": 22,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 290,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 34
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 43
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 45
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 36,
                                                    "end": 46
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 48
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 48
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 48
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 6,
                    "end": 50
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 2,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "ar O = { async method(x = await 1) { return x; } };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' is not allowed here. Did you mean ';'? - start: 2, end: 4
✖ `await` expression cannot be used in function parameters - start: 25, end: 31

```

