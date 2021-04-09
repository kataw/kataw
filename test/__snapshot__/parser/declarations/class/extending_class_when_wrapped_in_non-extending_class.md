# Kataw parser test case

## Input

`````js
class a { constructor(){   class x extends y { [super()](){} }    }}
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
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 22,
                                "end": 23
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
                                                "start": 32,
                                                "end": 34
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 42,
                                                    "end": 44
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 42,
                                                "end": 44
                                            },
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
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 225,
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 48,
                                                                        "end": 53
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 54,
                                                                        "end": 54
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 48,
                                                                    "end": 55
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 46,
                                                                "end": 56
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 57,
                                                                "end": 58
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
                                                                    "start": 59,
                                                                    "end": 59
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 58,
                                                                "end": 60
                                                            },
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 56,
                                                            "end": 60
                                                        },
                                                        "flags": 256,
                                                        "start": 46,
                                                        "end": 60
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 46,
                                                "end": 62
                                            },
                                            "flags": 128,
                                            "start": 24,
                                            "end": 62
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 62
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 67
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 21,
                            "end": 67
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 67
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 68
            },
            "flags": 128,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "class a { constructor(){   class x extends y { [super()](){} }    }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 53,
            "end": 54
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

