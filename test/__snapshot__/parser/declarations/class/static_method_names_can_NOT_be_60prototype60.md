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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 9,
                            "end": 16
                        },
                        "asyncKeyword": null,
                        "setKeyword": {
                            "kind": 16498,
                            "flags": 64,
                            "start": 16,
                            "end": 20
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "prototype",
                                "rawText": "prototype",
                                "flags": 96,
                                "start": 20,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1024,
                                "start": 31,
                                "end": 32
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 1024,
                            "start": 30,
                            "end": 34
                        },
                        "flags": 1024,
                        "start": 16,
                        "end": 34
                    }
                ],
                "flags": 32,
                "start": 7,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 36,
                "end": 43
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 43,
                "end": 45
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 47,
                            "end": 54
                        },
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 201392131,
                                "text": "prototype",
                                "rawText": "\"prot\\u006ftype\"",
                                "flags": 16480,
                                "start": 54,
                                "end": 71
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 72,
                                "end": 73
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 74,
                                    "end": 74
                                },
                                "flags": 32,
                                "start": 73,
                                "end": 75
                            },
                            "flags": 0,
                            "start": 71,
                            "end": 75
                        },
                        "flags": 0,
                        "start": 54,
                        "end": 75
                    }
                ],
                "flags": 32,
                "start": 45,
                "end": 77
            },
            "flags": 16,
            "start": 36,
            "end": 77
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 77,
                "end": 84
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 84,
                "end": 86
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 88,
                            "end": 95
                        },
                        "asyncKeyword": null,
                        "setKeyword": {
                            "kind": 16498,
                            "flags": 64,
                            "start": 95,
                            "end": 99
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "prototype",
                                "rawText": "prototype",
                                "flags": 96,
                                "start": 99,
                                "end": 109
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1024,
                                "start": 110,
                                "end": 111
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 112,
                                    "end": 112
                                },
                                "flags": 32,
                                "start": 111,
                                "end": 113
                            },
                            "flags": 1024,
                            "start": 109,
                            "end": 113
                        },
                        "flags": 1024,
                        "start": 95,
                        "end": 113
                    }
                ],
                "flags": 32,
                "start": 86,
                "end": 115
            },
            "flags": 16,
            "start": 77,
            "end": 115
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 115,
                "end": 122
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 122,
                "end": 124
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 139,
                            "end": 141
                        },
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 126,
                            "end": 133
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 133,
                            "end": 139
                        },
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "prototype",
                                "rawText": "prototype",
                                "flags": 96,
                                "start": 141,
                                "end": 150
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 384,
                                "start": 151,
                                "end": 152
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 153,
                                    "end": 153
                                },
                                "flags": 32,
                                "start": 152,
                                "end": 154
                            },
                            "flags": 384,
                            "start": 150,
                            "end": 154
                        },
                        "flags": 384,
                        "start": 133,
                        "end": 154
                    }
                ],
                "flags": 32,
                "start": 124,
                "end": 156
            },
            "flags": 16,
            "start": 115,
            "end": 156
        }
    ],
    "isModule": false,
    "source": "class x { static get prototype(){} }\n\nclass x { static \"prot\\u006ftype\"(){} }\n\nclass x { static get prototype(){} }\n\nclass x { static async *prototype(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 156
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Classes may not have a static property named 'prototype' - start: 30, end: 31
✖ Classes may not have a static property named 'prototype' - start: 109, end: 110
✖ Classes may not have a static property named 'prototype' - start: 150, end: 151

```

