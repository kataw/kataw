# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/misc/destructuring/failing-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\failing-cases\gen\strict_directive
> :: test: strict directive
> :: case: function () { for (const x in { a: x }) { } }
## Input

`````js
"use strict"; function () { for (const x in { a: x }) { } }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 13,
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
            "start": 13,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; function () { for (const x in { a: x }) { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 22, end: 24

```

