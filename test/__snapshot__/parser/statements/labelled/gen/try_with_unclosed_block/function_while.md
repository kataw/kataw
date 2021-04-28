# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: try with unclosed block
> :: case: function while
## Input

`````js
try {} finally(x) { function while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "flags": 128,
                "start": 3,
                "end": 6
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 6,
                "start": 0,
                "end": 14
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 15,
                    "end": 16
                },
                "flags": 256,
                "start": 14,
                "end": 17
            },
            "flags": 128,
            "start": 14,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 19,
                            "start": 0,
                            "end": 28
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 28,
                            "end": 28
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 28,
                            "end": 28
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 256,
                            "start": 28,
                            "end": 28
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 128,
                        "start": 19,
                        "end": 28
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 28,
                            "start": 0,
                            "end": 34
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 34,
                            "end": 34
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 34,
                                "end": 34
                            },
                            "flags": 128,
                            "start": 34,
                            "end": 34
                        },
                        "flags": 128,
                        "start": 28,
                        "end": 34
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 19,
                "end": 34
            },
            "flags": 128,
            "start": 17,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "try {} finally(x) { function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 28, end: 34
✖ Unexpected token. - start: 28, end: 34
✖ Expression expected - start: 34, end: 34
✖ Expression expected - start: 34, end: 34

```

