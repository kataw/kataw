# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: \u0074ypeof
## Input

`````js
function *f(){
  \u0074ypeof = x
}
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259885,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 28
                                    },
                                    "expression": {
                                        "kind": 253,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 30
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 30,
                                    "end": 32
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 32
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 32
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "function *f(){\n  \\u0074ypeof = x\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 28,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: \u0074ypeof
## Input

`````js
function *f(){
  \u0074ypeof = x
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: \u0074ypeof
## Input

`````js
function *f(){
  \u0074ypeof = x
}
`````
```

