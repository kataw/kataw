# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
function not_gen() { yield * 1; return 37; yield * 'dead'; }}
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
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 31
                        },
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 81921,
                                "value": 37,
                                "autofix": 0,
                                "flags": 768,
                                "start": 38,
                                "end": 41
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 31
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 42,
                                    "end": 48
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "dead",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 50,
                                    "end": 57
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 42,
                                "end": 57
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 42,
                            "end": 58
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 58
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "function not_gen() { yield * 1; return 37; yield * 'dead'; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 60,
            "end": 61
        }
    ],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
function not_gen() { yield * 1; return 37; yield * 'dead'; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
function not_gen() { yield * 1; return 37; yield * 'dead'; }}
`````
```

