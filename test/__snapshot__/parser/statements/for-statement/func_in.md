# Kataw parser test case

## Input

`````js
for (function(){ a in b; };;);
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
            "kind": 165,
            "initializer": {
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
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 29,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "for (function(){ a in b; };;);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

