# Kataw parser test case

## Input

`````js
class C { #aaa; f(f) { f()?.#aaa } }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#aaa",
                            "flags": 768,
                            "start": 9,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 14
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 14,
                        "end": 15
                    },
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
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 15,
                                "end": 17
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 18,
                                "end": 20
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 26,
                                                    "start": 0,
                                                    "end": 28
                                                },
                                                "member": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 768,
                                                        "start": 22,
                                                        "end": 24
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 25,
                                                        "end": 25
                                                    },
                                                    "flags": 256,
                                                    "start": 22,
                                                    "end": 26
                                                },
                                                "chain": {
                                                    "kind": 206,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 67109115,
                                                            "text": "#aaa",
                                                            "flags": 768,
                                                            "start": 28,
                                                            "end": 32
                                                        },
                                                        "flags": 256,
                                                        "start": 28,
                                                        "end": 32
                                                    },
                                                    "flags": 256,
                                                    "start": 28,
                                                    "end": 32
                                                },
                                                "flags": 256,
                                                "start": 22,
                                                "end": 32
                                            },
                                            "flags": 128,
                                            "start": 22,
                                            "end": 32
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 22,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 34
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 34
                        },
                        "flags": 0,
                        "start": 15,
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
        }
    ],
    "isModule": false,
    "text": "class C { #aaa; f(f) { f()?.#aaa } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

