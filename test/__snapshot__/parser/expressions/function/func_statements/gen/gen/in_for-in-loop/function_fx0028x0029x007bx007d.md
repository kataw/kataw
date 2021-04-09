# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-in-loop
> :: case: function f(){}
## Input

`````js
for (a in b) function f(){}
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
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 81921,
                "value": "b",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 176,
                "asyncToken": null,
                "generatorToken": null,
                "name": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 24,
                    "end": 25
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 26,
                        "end": 26
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 25,
                    "end": 27
                },
                "typeParameters": null,
                "returnType": null,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "for (a in b) function f(){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 21,
            "error": "Function declarations are not allowed in an arbitrary statement position.",
            "start": 12,
            "end": 21
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-in-loop
> :: case: function f(){}
## Input

`````js
for (a in b) function f(){}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-in-loop
> :: case: function f(){}
## Input

`````js
for (a in b) function f(){}
`````
```

