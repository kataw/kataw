# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
'use strict'; unction* gf() { var a = yield 'foo'; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 67174403,
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "unction",
                    "rawText": "unction",
                    "flags": 768,
                    "start": 13,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 21,
                    "end": 22
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "text": "gf",
                        "rawText": "gf",
                        "flags": 768,
                        "start": 22,
                        "end": 25
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 27
                },
                "flags": 256,
                "start": 13,
                "end": 27
            },
            "flags": 128,
            "start": 13,
            "end": 27
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 155,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 768,
                            "start": 29,
                            "end": 33
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 81921,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "flags": 128,
                                    "start": 33,
                                    "end": 43
                                }
                            ],
                            "flags": 128,
                            "start": 33,
                            "end": 43
                        },
                        "flags": 128,
                        "start": 29,
                        "end": 43
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 29,
                "end": 43
            },
            "flags": 128,
            "start": 27,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "foo",
                "rawText": "foo",
                "flags": 67109632,
                "start": 43,
                "end": 49
            },
            "flags": 128,
            "start": 43,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "'use strict'; unction* gf() { var a = yield 'foo'; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 43,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 50,
            "end": 52
        }
    ],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
'use strict'; unction* gf() { var a = yield 'foo'; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
'use strict'; unction* gf() { var a = yield 'foo'; }
`````
```

