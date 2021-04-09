# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: async function *f(){}
## Input

`````js
new async function *f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "expression": {
                    "kind": 177,
                    "asyncToken": {
                        "kind": 82031,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "autofix": 0,
                        "flags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "name": {
                        "kind": 81921,
                        "value": "f",
                        "autofix": 0,
                        "flags": 768,
                        "start": 20,
                        "end": 21
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 22,
                        "end": 23
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 24,
                            "end": 24
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 23,
                        "end": 25
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 3328,
                    "start": 3,
                    "end": 25
                },
                "argumentList": null,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "new async function *f(){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: async function *f(){}
## Input

`````js
new async function *f(){}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: async function *f(){}
## Input

`````js
new async function *f(){}
`````
```

