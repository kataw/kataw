# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in case
> :: case: async function *f(){}
## Input

`````js
switch (x) {
  case foo:
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
            "kind": 160,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 19,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 34
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 43,
                                    "end": 45
                                },
                                "name": {
                                    "kind": 81921,
                                    "value": "f",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 45,
                                    "end": 46
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 47,
                                    "end": 48
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 49,
                                        "end": 49
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 48,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 3328,
                                "start": 24,
                                "end": 50
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 50
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "switch (x) {\n  case foo:\n    async function *f(){}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in case
> :: case: async function *f(){}
## Input

`````js
switch (x) {
  case foo:
    async function *f(){}
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in case
> :: case: async function *f(){}
## Input

`````js
switch (x) {
  case foo:
    async function *f(){}
}
`````
```

