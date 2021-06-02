# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/misc/destructuring/failing-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\failing-cases\gen\in_block
> :: test: in block
> :: case: function () { for (const x in { a: x }) { } }
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
                            "start": 1,
                            "end": 10
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 13
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
                                            "start": 15,
                                            "end": 19
                                        },
                                        "initializer": {
                                            "kind": 151,
                                            "bindingList": [
                                                {
                                                    "kind": 190,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 28
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 26,
                                                    "end": 28
                                                }
                                            ],
                                            "flags": 16777232,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "inKeyword": {
                                            "kind": 21006388,
                                            "flags": 64,
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
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 36,
                                                            "end": 38
                                                        },
                                                        "flags": 32,
                                                        "start": 33,
                                                        "end": 38
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 33,
                                                "end": 38
                                            },
                                            "flags": 48,
                                            "start": 31,
                                            "end": 40
                                        },
                                        "statement": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "start": 41,
                                            "end": 45
                                        },
                                        "flags": 16,
                                        "start": 15,
                                        "end": 45
                                    }
                                ],
                                "flags": 32,
                                "start": 15,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 47
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 47
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "{ function () { for (const x in { a: x }) { } } }",
    "fileName": "__root__",
    "flags": 0,
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

