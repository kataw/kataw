# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: a = async function() { g(await) }
## Input

`````js
'use strict'; a = async function() { g(await) }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
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
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 17,
                        "end": 23
                    },
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 23,
                        "end": 32
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 32,
                        "end": 34
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
                                            "start": 36,
                                            "end": 38
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 208,
                                                    "awaitToken": {
                                                        "kind": 82032,
                                                        "flags": 768,
                                                        "start": 39,
                                                        "end": 44
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 44,
                                                        "end": 44
                                                    },
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 36,
                                        "end": 45
                                    },
                                    "flags": 128,
                                    "start": 36,
                                    "end": 45
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 36,
                            "end": 45
                        },
                        "flags": 256,
                        "start": 34,
                        "end": 47
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 1280,
                    "start": 17,
                    "end": 47
                },
                "flags": 256,
                "start": 13,
                "end": 47
            },
            "flags": 128,
            "start": 13,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "'use strict'; a = async function() { g(await) }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 44,
            "end": 45
        }
    ],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

