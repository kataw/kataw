# Kataw parser test case

## Input

`````js
class A {static set 10(x){}}
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
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 9,
                            "end": 15
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": 10,
                                "autofix": 0,
                                "flags": 768,
                                "start": 19,
                                "end": 22
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 23,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 25
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 26,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 4096,
                            "start": 22,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 27
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "class A {static set 10(x){}}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

