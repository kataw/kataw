# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: a = async function() { g(await) }
## Input

`````js
a = async function() { g(await) }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 3,
                        "start": 512,
                        "end": 9
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 9,
                        "start": 0,
                        "end": 18
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 18,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 768,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 208,
                                                    "awaitToken": {
                                                        "kind": 82032,
                                                        "flags": 25,
                                                        "start": 0,
                                                        "end": 30
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 12,
                                                        "start": 30,
                                                        "end": 30
                                                    },
                                                    "flags": 256,
                                                    "start": 25,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 30
                                        },
                                        "flags": 256,
                                        "start": 22,
                                        "end": 31
                                    },
                                    "flags": 128,
                                    "start": 22,
                                    "end": 31
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 22,
                            "end": 31
                        },
                        "flags": 256,
                        "start": 20,
                        "end": 33
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 1280,
                    "start": 3,
                    "end": 33
                },
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "a = async function() { g(await) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 30, end: 31

```

