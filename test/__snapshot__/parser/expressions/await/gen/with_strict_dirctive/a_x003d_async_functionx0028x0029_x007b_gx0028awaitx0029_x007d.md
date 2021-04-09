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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 17
                },
                "right": {
                    "kind": 177,
                    "asyncToken": {
                        "kind": 82031,
                        "autofix": 0,
                        "flags": 0,
                        "start": 17,
                        "end": 23
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 33,
                        "end": 34
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "g",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 208,
                                                    "expression": {
                                                        "kind": 253,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 44,
                                                        "end": 44
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 36,
                                        "end": 45
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 36,
                                    "end": 45
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 36,
                            "end": 45
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 34,
                        "end": 47
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 1280,
                    "start": 17,
                    "end": 47
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "'use strict'; a = async function() { g(await) }",
    "fileName": "__root__",
    "autofix": 0,
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
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: a = async function() { g(await) }
## Input

`````js
'use strict'; a = async function() { g(await) }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: a = async function() { g(await) }
## Input

`````js
'use strict'; a = async function() { g(await) }
`````
```

