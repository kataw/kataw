# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: in default
> :: case: function f(){}
## Input

`````js
switch (x) {
  default:
    function f(){}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 36
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 256,
                                    "start": 40,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 128,
                                "start": 23,
                                "end": 42
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 42
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 44
            },
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "switch (x) {\n  default:\n    function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 36
        }
    ],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

