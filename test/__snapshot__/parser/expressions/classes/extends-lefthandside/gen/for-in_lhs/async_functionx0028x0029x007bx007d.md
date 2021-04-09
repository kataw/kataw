# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function(){}
## Input

`````js
for (async function(){} in x) ;
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
                "name": null,
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 21
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 22,
                        "end": 22
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 21,
                    "end": 23
                },
                "typeParameters": null,
                "returnType": null,
                "autofix": 0,
                "flags": 1280,
                "start": 5,
                "end": 23
            },
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 26,
                "end": 28
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 29,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "for (async function(){} in x) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 26,
            "end": 28
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
- Path: s
> :: test: for-in lhs
> :: case: async function(){}
## Input

`````js
for (async function(){} in x) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async function(){}
## Input

`````js
for (async function(){} in x) ;
`````
```

