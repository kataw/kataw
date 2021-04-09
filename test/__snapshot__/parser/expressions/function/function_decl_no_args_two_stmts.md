# Kataw parser test case

## Input

`````js
function f(){foo;bar}
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
                            "kind": 120,
                            "expression": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 16
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 13,
                            "end": 17
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 81921,
                                "value": "bar",
                                "autofix": 0,
                                "flags": 768,
                                "start": 17,
                                "end": 20
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 17,
                            "end": 20
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 21
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "function f(){foo;bar}",
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
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

