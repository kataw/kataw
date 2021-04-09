# Kataw parser test case

## Input

`````js
for (function(){ if (a in b); }.prop in x);
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
            "kind": 166,
            "initializer": {
                "kind": 129,
                "member": {
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
                        "start": 14,
                        "end": 15
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 164,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "consequent": {
                                        "kind": 168,
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "alternate": null,
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 16,
                                    "end": 29
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 15,
                        "end": 31
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 31
                },
                "expression": {
                    "kind": 81921,
                    "value": "prop",
                    "autofix": 0,
                    "flags": 768,
                    "start": 32,
                    "end": 36
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 36
            },
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 41
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 42,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "for (function(){ if (a in b); }.prop in x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

