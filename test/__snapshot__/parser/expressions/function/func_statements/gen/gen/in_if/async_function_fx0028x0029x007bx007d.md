# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: f
> :: test: in if
> :: case: async function f(){}
## Input

`````js
if (x) async function f(){}
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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 6,
                        "end": 12
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 768,
                        "start": 12,
                        "end": 21
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 23,
                        "end": 25
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 25,
                        "end": 27
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 1280,
                    "start": 6,
                    "end": 27
                },
                "flags": 128,
                "start": 6,
                "end": 27
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "if (x) async function f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

