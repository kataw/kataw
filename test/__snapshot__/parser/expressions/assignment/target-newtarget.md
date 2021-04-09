# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
function f() {
  new.target = 1;
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
                                "kind": 125,
                                "left": {
                                    "kind": 211,
                                    "name": {
                                        "kind": 81921,
                                        "value": "target",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 14,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 67174402,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 31
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 32
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
        }
    ],
    "isModule": true,
    "text": "function f() {\n  new.target = 1;\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

