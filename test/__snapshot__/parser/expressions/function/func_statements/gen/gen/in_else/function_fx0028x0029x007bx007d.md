# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in else
> :: case: function f(){}
## Input

`````js
if (x) x;
else function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 164,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 9
            },
            "alternate": {
                "kind": 176,
                "asyncToken": null,
                "generatorToken": null,
                "name": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
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
                "flags": 256,
                "start": 14,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "if (x) x;\nelse function f(){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in else
> :: case: function f(){}
## Input

`````js
if (x) x;
else function f(){}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in else
> :: case: function f(){}
## Input

`````js
if (x) x;
else function f(){}
`````
```

