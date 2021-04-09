# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: {yield}
## Input

`````js
function not_gen() { {yield} }}
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
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "yield",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 22,
                                        "end": 27
                                    }
                                ],
                                "multiLine": false,
                                "autofix": 0,
                                "flags": 128,
                                "start": 22,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function not_gen() { {yield} }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30,
            "end": 31
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: {yield}
## Input

`````js
function not_gen() { {yield} }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: {yield}
## Input

`````js
function not_gen() { {yield} }}
`````
```

