# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: h
> :: test: in catch
> :: case: async function *f(){}
## Input

`````js
try {
} catch (e) {
  async function *f(){}
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
                    "statements": [],
                    "multiLine": true,
                    "autofix": 0,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchParameter": {
                    "kind": 81921,
                    "value": "e",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 16
                },
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
                                    "start": 19,
                                    "end": 27
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "name": {
                                    "kind": 81921,
                                    "value": "f",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 38,
                                    "end": 39
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 41
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 42,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 41,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 3328,
                                "start": 19,
                                "end": 43
                            }
                        ],
                        "multiLine": true,
                        "autofix": 0,
                        "flags": 128,
                        "start": 19,
                        "end": 43
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 17,
                    "end": 45
                },
                "autofix": 0,
                "flags": 128,
                "start": 7,
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
    "text": "try {\n} catch (e) {\n  async function *f(){}\n}",
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
- Path: h
> :: test: in catch
> :: case: async function *f(){}
## Input

`````js
try {
} catch (e) {
  async function *f(){}
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: h
> :: test: in catch
> :: case: async function *f(){}
## Input

`````js
try {
} catch (e) {
  async function *f(){}
}
`````
```

