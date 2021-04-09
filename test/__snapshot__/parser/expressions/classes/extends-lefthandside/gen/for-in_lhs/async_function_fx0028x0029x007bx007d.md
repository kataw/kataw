# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function f(){}
## Input

`````js
for (async function f(){} in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 177,
                "asyncToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 5,
                    "end": 10
                },
                "generatorToken": null,
                "name": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 19,
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
                "flags": 1280,
                "start": 5,
                "end": 25
            },
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 31,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "for (async function f(){} in x) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function f(){}
## Input

`````js
for (async function f(){} in x) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function f(){}
## Input

`````js
for (async function f(){} in x) ;
`````
```

