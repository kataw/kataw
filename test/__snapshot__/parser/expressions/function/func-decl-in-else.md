# Kataw parser test case

## Input

`````js
if (x) x;
else function *f(){}
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
                "generatorToken": {
                    "kind": 67143222,
                    "autofix": 0,
                    "flags": 0,
                    "start": 23,
                    "end": 25
                },
                "name": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 25,
                    "end": 26
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 27,
                    "end": 28
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 29,
                        "end": 29
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 28,
                    "end": 30
                },
                "typeParameters": null,
                "returnType": null,
                "autofix": 0,
                "flags": 2304,
                "start": 14,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "if (x) x;\nelse function *f(){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 20,
            "error": "Generators can only be declared at the top level or inside a block",
            "start": 25,
            "end": 26
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

