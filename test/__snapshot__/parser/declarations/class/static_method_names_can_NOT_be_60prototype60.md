# Kataw parser test case

## Input

`````js
class x { static get prototype(){} }

class x { static "prot\u006ftype"(){} }

class x { static get prototype(){} }

class x { static async *prototype(){} }
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
                "value": "x",
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
                            "end": 16
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "prototype",
                                "autofix": 0,
                                "flags": 768,
                                "start": 20,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 31,
                                "end": 32
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
                                    "start": 33,
                                    "end": 33
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 32,
                                "end": 34
                            },
                            "autofix": 0,
                            "flags": 8192,
                            "start": 30,
                            "end": 34
                        },
                        "flags": 256,
                        "start": 16,
                        "end": 34
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 36
            },
            "flags": 128,
            "start": 0,
            "end": 36
        },
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 43,
                "end": 45
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
                            "start": 47,
                            "end": 54
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174403,
                                "value": "prototype",
                                "autofix": 0,
                                "flags": 768,
                                "start": 54,
                                "end": 71
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 72,
                                "end": 73
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
                                    "start": 74,
                                    "end": 74
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 73,
                                "end": 75
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 71,
                            "end": 75
                        },
                        "flags": 256,
                        "start": 54,
                        "end": 75
                    }
                ],
                "flags": 256,
                "start": 47,
                "end": 77
            },
            "flags": 128,
            "start": 36,
            "end": 77
        },
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 84,
                "end": 86
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
                            "start": 88,
                            "end": 95
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "prototype",
                                "autofix": 0,
                                "flags": 768,
                                "start": 99,
                                "end": 109
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 110,
                                "end": 111
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
                                    "start": 112,
                                    "end": 112
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 111,
                                "end": 113
                            },
                            "autofix": 0,
                            "flags": 8192,
                            "start": 109,
                            "end": 113
                        },
                        "flags": 256,
                        "start": 95,
                        "end": 113
                    }
                ],
                "flags": 256,
                "start": 88,
                "end": 115
            },
            "flags": 128,
            "start": 77,
            "end": 115
        },
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 122,
                "end": 124
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
                            "start": 126,
                            "end": 133
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "prototype",
                                "autofix": 0,
                                "flags": 768,
                                "start": 141,
                                "end": 150
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 151,
                                "end": 152
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
                                    "start": 153,
                                    "end": 153
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 152,
                                "end": 154
                            },
                            "autofix": 0,
                            "flags": 3072,
                            "start": 150,
                            "end": 154
                        },
                        "flags": 256,
                        "start": 133,
                        "end": 154
                    }
                ],
                "flags": 256,
                "start": 126,
                "end": 156
            },
            "flags": 128,
            "start": 115,
            "end": 156
        }
    ],
    "isModule": false,
    "text": "class x { static get prototype(){} }\n\nclass x { static \"prot\\u006ftype\"(){} }\n\nclass x { static get prototype(){} }\n\nclass x { static async *prototype(){} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 156
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

