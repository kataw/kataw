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
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
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
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 768,
                                                "start": 24,
                                                "end": 32
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsToken": {
                                                    "kind": 4194391,
                                                    "flags": 768,
                                                    "start": 34,
                                                    "end": 42
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
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
                                                        "declareToken": null,
                                                        "decorators": null,
                                                        "staticKeyword": null,
                                                        "asyncKeyword": null,
                                                        "setKeyword": null,
                                                        "getKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 225,
                                                                        "superKeyword": {
                                                                            "kind": 4259935,
                                                                            "flags": 768,
                                                                            "start": 48,
                                                                            "end": 53
                                                                        },
                                                                        "flags": 768,
                                                                        "start": 48,
                                                                        "end": 53
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 256,
                                                                        "start": 54,
                                                                        "end": 54
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 48,
                                                                    "end": 55
                                                                },
                                                                "flags": 256,
                                                                "start": 46,
                                                                "end": 56
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 57,
                                                                "end": 58
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 59,
                                                                    "end": 59
                                                                },
                                                                "flags": 256,
                                                                "start": 58,
                                                                "end": 60
                                                            },
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
                                    "flags": 256,
                                    "start": 24,
                                    "end": 62
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 67
                            },
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
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

