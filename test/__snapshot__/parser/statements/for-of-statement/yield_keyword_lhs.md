# Kataw parser test case

## Input

`````js
function *f(){ for (yield of obj); }
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
                            "kind": 167,
                            "initializer": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 25
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "obj",
                                "autofix": 0,
                                "flags": 768,
                                "start": 28,
                                "end": 32
                            },
                            "statement": {
                                "kind": 168,
                                "autofix": 0,
                                "flags": 128,
                                "start": 33,
                                "end": 34
                            },
                            "awaitToken": null,
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
                "end": 36
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "function *f(){ for (yield of obj); }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 63,
            "error": "Invalid left-hand side in for-of loop",
            "start": 28,
            "end": 32
        }
    ],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

