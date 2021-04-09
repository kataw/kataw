# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: f
> :: test: in if
> :: case: function f(){}
## Input

`````js
if (x) function f(){}
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
                "kind": 176,
                "asyncToken": null,
                "generatorToken": null,
                "name": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 19
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 20,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 21
                },
                "typeParameters": null,
                "returnType": null,
                "autofix": 0,
                "flags": 256,
                "start": 6,
                "end": 21
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "if (x) function f(){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: f
> :: test: in if
> :: case: function f(){}
## Input

`````js
if (x) function f(){}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: f
> :: test: in if
> :: case: function f(){}
## Input

`````js
if (x) function f(){}
`````
```

