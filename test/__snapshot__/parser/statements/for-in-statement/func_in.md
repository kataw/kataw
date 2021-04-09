# Kataw parser test case

## Input

`````js
for (function(){ a in b; }.prop in x);
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
                                    "kind": 120,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 23
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 16,
                                    "end": 24
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 24
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 15,
                        "end": 26
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 26
                },
                "expression": {
                    "kind": 81921,
                    "value": "prop",
                    "autofix": 0,
                    "flags": 768,
                    "start": 27,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 31
            },
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 34,
                "end": 36
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 37,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "for (function(){ a in b; }.prop in x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

