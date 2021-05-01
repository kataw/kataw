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
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 6,
                    "end": 15
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "original": "f",
                    "text": "f",
                    "rawText": " f",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 17,
                    "end": 19
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 21
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 6,
                "end": 21
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "if (x) function f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

