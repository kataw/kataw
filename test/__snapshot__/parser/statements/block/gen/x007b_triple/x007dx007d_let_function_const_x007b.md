# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: }} let function const {
## Input

`````js
{ { { }} let function const {
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 7
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 8,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 12
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 12,
                            "end": 21
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 21,
                            "end": 21
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 21
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 12,
                        "end": 21
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 64,
                            "start": 21,
                            "end": 27
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 27,
                                    "end": 29
                                }
                            ],
                            "flags": 16777232,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 33554448,
                        "start": 21,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ { { }} let function const {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 12, end: 21
✖ Binding identifier expected - start: 21, end: 27
✖ Missing an opening parentheses - '( - start: 21, end: 27
✖ Expression expected - start: 21, end: 27
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 29
✖ Missing initializer in const declaration - start: 29, end: 29

```

