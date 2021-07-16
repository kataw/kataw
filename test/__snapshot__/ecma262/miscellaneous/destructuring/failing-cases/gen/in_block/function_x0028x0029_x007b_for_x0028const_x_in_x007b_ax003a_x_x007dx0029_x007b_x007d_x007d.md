# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/gen/in_block
> :: test: in block
> :: case: function () { for (const x in { a: x }) { } }
## Options

`````js
{}
`````
## Input

`````js
{ function () { for (const x in { a: x }) { } } }
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
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 166,
                                        "forKeyword": {
                                            "kind": 37757017,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 19
                                        },
                                        "initializer": {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 26
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 28
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 26,
                                                        "end": 28
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 28
                                        },
                                        "inKeyword": {
                                            "kind": 21006388,
                                            "flags": 64,
                                            "transformFlags": 8192,
                                            "start": 28,
                                            "end": 31
                                        },
                                        "expression": {
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
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 36,
                                                            "end": 38
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 33,
                                                        "end": 38
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 38
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 31,
                                            "end": 40
                                        },
                                        "statement": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 45
                                        },
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 45
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 45
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 47
                        },
                        "returnType": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 47
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "{ function () { for (const x in { a: x }) { } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 10, end: 12

```

