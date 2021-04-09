# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield 3 + yield 4;
## Input

`````js
function not_gen() { yield 3 + yield 4; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 81921,
                                "value": "yield",
                                "autofix": 0,
                                "flags": 768,
                                "start": 20,
                                "end": 26
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 26
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": 3,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 26,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 30,
                                    "end": 36
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 36
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 26,
                            "end": 36
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 81921,
                                "value": 4,
                                "autofix": 0,
                                "flags": 768,
                                "start": 36,
                                "end": 38
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 36,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "function not_gen() { yield 3 + yield 4; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 41,
            "end": 42
        }
    ],
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield 3 + yield 4;
## Input

`````js
function not_gen() { yield 3 + yield 4; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield 3 + yield 4;
## Input

`````js
function not_gen() { yield 3 + yield 4; }}
`````
```

