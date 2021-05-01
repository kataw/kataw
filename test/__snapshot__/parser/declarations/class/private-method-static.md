# Kataw parser test case

## Input

`````js
class C { static#aaa(){} }
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
                "original": "C",
                "text": "C",
                "rawText": " C",
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
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 9,
                            "end": 16
                        },
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67109115,
                                "text": "#aaa",
                                "flags": 96,
                                "start": 16,
                                "end": 20
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 21,
                                "end": 22
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 24
                        },
                        "flags": 0,
                        "start": 16,
                        "end": 24
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "class C { static#aaa(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

