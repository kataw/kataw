# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\failing-cases\gen\stand_alone
> :: test: stand alone
> :: case: function () { for (const x in { a: x }) { } }
## Input

`````js
function () { for (const x in { a: x }) { } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 8,
                "end": 11
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
                                "start": 13,
                                "end": 17
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
                                            "start": 24,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "flags": 16777232,
                                "start": 24,
                                "end": 26
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 26,
                                "end": 29
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
                                                "start": 31,
                                                "end": 33
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 34,
                                                "end": 36
                                            },
                                            "flags": 32,
                                            "start": 31,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 31,
                                    "end": 36
                                },
                                "flags": 48,
                                "start": 29,
                                "end": 38
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 16,
                                "start": 39,
                                "end": 43
                            },
                            "flags": 80,
                            "start": 13,
                            "end": 43
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 43
                },
                "flags": 32,
                "start": 11,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function () { for (const x in { a: x }) { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 8, end: 10

```

