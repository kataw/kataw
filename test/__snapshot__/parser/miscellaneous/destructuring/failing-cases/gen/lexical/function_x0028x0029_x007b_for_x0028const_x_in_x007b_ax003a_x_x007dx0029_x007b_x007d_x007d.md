# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/gen/lexical
> :: test: lexical
> :: case: function () { for (const x in { a: x }) { } }
## Options

`````js
{}
`````
## Input

`````js
let function () { for (const x in { a: x }) { } }
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
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3,
                "end": 12
            },
            "generatorToken": null,
            "name": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 15
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
                                "start": 17,
                                "end": 21
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
                                            "start": 28,
                                            "end": 30
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "flags": 16777232,
                                "start": 28,
                                "end": 30
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 30,
                                "end": 33
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
                                                "start": 35,
                                                "end": 37
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 35,
                                    "end": 40
                                },
                                "flags": 48,
                                "start": 33,
                                "end": 42
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 16,
                                "start": 43,
                                "end": 47
                            },
                            "flags": 80,
                            "start": 17,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 17,
                    "end": 47
                },
                "flags": 32,
                "start": 15,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 3,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "let function () { for (const x in { a: x }) { } }",
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
✖ Expected a `;` - start: 3, end: 12
✖ Binding identifier expected - start: 12, end: 14

```

