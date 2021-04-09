# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async (x, y) => ok
## Input

`````js
async function f() {
  await async (x, y) => ok
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
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 14,
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
                                "kind": 208,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "async",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 36,
                                                "end": 37
                                            },
                                            {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 38,
                                                "end": 40
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 36,
                                        "end": 40
                                    },
                                    "flags": 256,
                                    "start": 28,
                                    "end": 41
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 41
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 41
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "ok",
                "autofix": 0,
                "flags": 768,
                "start": 44,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "async function f() {\n  await async (x, y) => ok\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 41,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 47,
            "end": 49
        }
    ],
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async (x, y) => ok
## Input

`````js
async function f() {
  await async (x, y) => ok
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async (x, y) => ok
## Input

`````js
async function f() {
  await async (x, y) => ok
}
`````
```

