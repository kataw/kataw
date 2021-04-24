# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: function while
## Input

`````js
return {} return(x) { function while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 256,
                "start": 6,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 9,
                "end": 16
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "flags": 256,
                "start": 16,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 9
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
                            "flags": 768,
                            "start": 21,
                            "end": 30
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 30,
                            "end": 30
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 30,
                            "end": 30
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 256,
                            "start": 30,
                            "end": 30
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 128,
                        "start": 21,
                        "end": 30
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 768,
                            "start": 30,
                            "end": 36
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 36,
                            "end": 36
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 36,
                                "end": 36
                            },
                            "flags": 128,
                            "start": 36,
                            "end": 36
                        },
                        "flags": 128,
                        "start": 30,
                        "end": 36
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 21,
                "end": 36
            },
            "flags": 128,
            "start": 19,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "return {} return(x) { function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

