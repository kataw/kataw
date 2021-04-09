# Kataw parser test case

## Input

`````js
f = ([xCls = class X {}]) => {}
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "xCls",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 37814352,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 6,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "X",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "flags": 256,
                                            "start": 12,
                                            "end": 23
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 24
                        }
                    ],
                    "asyncToken": false,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 30,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 28,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "f = ([xCls = class X {}]) => {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

