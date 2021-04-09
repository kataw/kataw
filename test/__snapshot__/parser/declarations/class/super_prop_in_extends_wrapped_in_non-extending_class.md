# Kataw parser test case

## Input

`````js
class a { foo(){      class x extends super.foo {}    }}
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
                "value": "a",
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
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 15
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "decorators": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 37,
                                                        "end": 43
                                                    },
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 44,
                                                        "end": 47
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 37,
                                                    "end": 47
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 37,
                                                "end": 47
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 49,
                                                "end": 50
                                            },
                                            "flags": 128,
                                            "start": 16,
                                            "end": 50
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 50
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 55
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 13,
                            "end": 55
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 55
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 56
            },
            "flags": 128,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "class a { foo(){      class x extends super.foo {}    }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

