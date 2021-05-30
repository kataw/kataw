# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/misc/destructuring/failing-cases/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\destructuring\failing-cases\gen\function_body
> :: test: function body
> :: case: function () { for (const x in { a: x }) { } }
## Input

`````js
function x() {function () { for (const x in { a: x }) { } }}
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
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 14,
                                "end": 22
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 22,
                                "end": 25
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
                                                "start": 27,
                                                "end": 31
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
                                                            "start": 38,
                                                            "end": 40
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 38,
                                                        "end": 40
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 38,
                                                "end": 40
                                            },
                                            "inKeyword": {
                                                "kind": 21006388,
                                                "flags": 64,
                                                "start": 40,
                                                "end": 43
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
                                                                "start": 45,
                                                                "end": 47
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 48,
                                                                "end": 50
                                                            },
                                                            "flags": 32,
                                                            "start": 45,
                                                            "end": 50
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 45,
                                                    "end": 50
                                                },
                                                "flags": 48,
                                                "start": 43,
                                                "end": 52
                                            },
                                            "statement": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 55,
                                                    "end": 55
                                                },
                                                "flags": 16,
                                                "start": 53,
                                                "end": 57
                                            },
                                            "flags": 16,
                                            "start": 27,
                                            "end": 57
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 27,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 59
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 14,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 59
                },
                "flags": 32,
                "start": 12,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "function x() {function () { for (const x in { a: x }) { } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 22, end: 24

```

