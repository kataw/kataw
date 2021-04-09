# Kataw parser test case

## Input

`````js
function f(){   return;return    };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 161,
                            "expression": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 13
                        },
                        {
                            "kind": 161,
                            "expression": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 23
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 34
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "function f(){   return;return    };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

