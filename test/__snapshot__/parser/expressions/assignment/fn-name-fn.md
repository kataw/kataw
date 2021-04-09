# Kataw parser test case

## Input

`````js
var xFn, fn;

xFn = function x() {};
fn = function() {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "xFn",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 7
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "fn",
                            "autofix": 0,
                            "flags": 768,
                            "start": 8,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 8,
                        "end": 11
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "xFn",
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 37814362,
                    "autofix": 0,
                    "flags": 0,
                    "start": 12,
                    "end": 19
                },
                "right": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 28,
                        "end": 30
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 31,
                        "end": 32
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 34,
                            "end": 34
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 32,
                        "end": 35
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 35
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "fn",
                    "autofix": 0,
                    "flags": 768,
                    "start": 36,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 37814362,
                    "autofix": 0,
                    "flags": 0,
                    "start": 36,
                    "end": 41
                },
                "right": {
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
                        "start": 51,
                        "end": 52
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 54,
                            "end": 54
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 52,
                        "end": 55
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 41,
                    "end": 55
                },
                "autofix": 0,
                "flags": 256,
                "start": 36,
                "end": 55
            },
            "autofix": 0,
            "flags": 128,
            "start": 36,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "var xFn, fn;\n\nxFn = function x() {};\nfn = function() {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

