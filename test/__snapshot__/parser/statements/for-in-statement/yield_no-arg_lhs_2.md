# Kataw parser test case

## Input

`````js
function *f(){   for (yield in y);   }
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
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 166,
                            "initializer": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 22,
                                "end": 27
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 30,
                                "end": 32
                            },
                            "statement": {
                                "kind": 168,
                                "autofix": 0,
                                "flags": 128,
                                "start": 33,
                                "end": 34
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "function *f(){   for (yield in y);   }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 30,
            "end": 32
        }
    ],
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

