# Kataw parser test case

## Input

`````js
do
  (function(){})
while(y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 26,
                "end": 27
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncToken": null,
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 15,
                            "end": 16
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 18
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 6,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 19
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "do\n  (function(){})\nwhile(y)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

