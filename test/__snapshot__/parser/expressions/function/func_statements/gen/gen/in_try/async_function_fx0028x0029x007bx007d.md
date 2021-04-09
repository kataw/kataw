# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in try
> :: case: async function f(){}
## Input

`````js
try {
  async function f(){}
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
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "f",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 26
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 1280,
                            "start": 5,
                            "end": 28
                        }
                    ],
                    "multiLine": true,
                    "autofix": 0,
                    "flags": 128,
                    "start": 5,
                    "end": 28
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 30
            },
            "catchClause": {
                "kind": 173,
                "catchParameter": {
                    "kind": 81921,
                    "value": "e",
                    "autofix": 0,
                    "flags": 768,
                    "start": 38,
                    "end": 39
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": true,
                        "autofix": 0,
                        "flags": 128,
                        "start": 42,
                        "end": 42
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 40,
                    "end": 44
                },
                "autofix": 0,
                "flags": 128,
                "start": 30,
                "end": 44
            },
            "finallyBlock": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "try {\n  async function f(){}\n} catch (e) {\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in try
> :: case: async function f(){}
## Input

`````js
try {
  async function f(){}
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
> :: case: async function f(){}
## Input

`````js
try {
  async function f(){}
} catch (e) {
}
`````
```

