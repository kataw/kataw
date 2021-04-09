# Kataw parser test case

## Input

`````js
function *f(){   for (yield x in y in z);   }
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
                                "expression": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 29
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 22,
                                "end": 29
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 32,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 34,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "z",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 37,
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 32,
                                "end": 39
                            },
                            "statement": {
                                "kind": 168,
                                "autofix": 0,
                                "flags": 128,
                                "start": 40,
                                "end": 41
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 41
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "function *f(){   for (yield x in y in z);   }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

