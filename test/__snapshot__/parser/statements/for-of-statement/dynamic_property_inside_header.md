# Kataw parser test case

## Input

`````js
async function f() {
    for await (x[a in b] of y);
}
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 167,
                            "initializer": {
                                "kind": 130,
                                "member": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 36,
                                    "end": 37
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 44
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 45
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 48,
                                "end": 50
                            },
                            "statement": {
                                "kind": 168,
                                "autofix": 0,
                                "flags": 128,
                                "start": 51,
                                "end": 52
                            },
                            "awaitToken": {
                                "kind": 82032,
                                "autofix": 0,
                                "flags": 0,
                                "start": 28,
                                "end": 34
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 52
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 52
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 54
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "async function f() {\n    for await (x[a in b] of y);\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

