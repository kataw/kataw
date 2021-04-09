# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in try
> :: case: async function *f(){}
## Input

`````js
try {
  async function *f(){}
} catch (e) {
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 176,
                            "asyncToken": {
                                "kind": 82031,
                                "autofix": 0,
                                "flags": 0,
                                "start": 5,
                                "end": 13
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 22,
                                "end": 24
                            },
                            "name": {
                                "kind": 81921,
                                "value": "f",
                                "autofix": 0,
                                "flags": 768,
                                "start": 24,
                                "end": 25
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 27
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 28,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 3328,
                            "start": 5,
                            "end": 29
                        }
                    ],
                    "multiLine": true,
                    "autofix": 0,
                    "flags": 128,
                    "start": 5,
                    "end": 29
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 31
            },
            "catchClause": {
                "kind": 173,
                "catchParameter": {
                    "kind": 81921,
                    "value": "e",
                    "autofix": 0,
                    "flags": 768,
                    "start": 39,
                    "end": 40
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": true,
                        "autofix": 0,
                        "flags": 128,
                        "start": 43,
                        "end": 43
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 41,
                    "end": 45
                },
                "autofix": 0,
                "flags": 128,
                "start": 31,
                "end": 45
            },
            "finallyBlock": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "try {\n  async function *f(){}\n} catch (e) {\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in try
> :: case: async function *f(){}
## Input

`````js
try {
  async function *f(){}
} catch (e) {
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in try
> :: case: async function *f(){}
## Input

`````js
try {
  async function *f(){}
} catch (e) {
}
`````
```

