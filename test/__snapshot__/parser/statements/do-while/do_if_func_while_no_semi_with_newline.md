# Kataw parser test case

## Input

`````js
do if(8)function s(){}
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
                "start": 29,
                "end": 30
            },
            "statement": {
                "kind": 164,
                "expression": {
                    "kind": 81921,
                    "value": 8,
                    "autofix": 0,
                    "flags": 768,
                    "start": 6,
                    "end": 7
                },
                "consequent": {
                    "kind": 176,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "s",
                        "autofix": 0,
                        "flags": 768,
                        "start": 16,
                        "end": 18
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 21,
                            "end": 21
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 22
                },
                "alternate": null,
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "do if(8)function s(){}\nwhile(y)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

