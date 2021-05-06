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
                "text": "a",
                "rawText": "a",
                "flags": 96,
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
                        "generatorToken": null,
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
                                "flags": 96,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
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
                                                "flags": 0,
                                                "start": 24,
                                                "end": 32
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 34,
                                                    "end": 42
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 42,
                                                    "end": 44
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
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
                                                        "generatorToken": null,
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
                                                                            "flags": 0,
                                                                            "start": 48,
                                                                            "end": 53
                                                                        },
                                                                        "flags": 96,
                                                                        "start": 48,
                                                                        "end": 53
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 54,
                                                                        "end": 54
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 48,
                                                                    "end": 55
                                                                },
                                                                "flags": 32,
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
                                                                    "flags": 32,
                                                                    "start": 59,
                                                                    "end": 59
                                                                },
                                                                "flags": 32,
                                                                "start": 58,
                                                                "end": 60
                                                            },
                                                            "flags": 0,
                                                            "start": 56,
                                                            "end": 60
                                                        },
                                                        "flags": 0,
                                                        "start": 46,
                                                        "end": 60
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 46,
                                                "end": 62
                                            },
                                            "flags": 16,
                                            "start": 24,
                                            "end": 62
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 24,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 67
                            },
                            "flags": 2048,
                            "start": 21,
                            "end": 67
                        },
                        "flags": 2048,
                        "start": 9,
                        "end": 67
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "class a { constructor(){   class x extends y { [super()](){} }    }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 53, end: 54

```

