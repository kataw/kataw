# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
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
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 81921,
                "value": "foo",
                "autofix": 0,
                "flags": 768,
                "start": 23,
                "end": 27
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 28,
                "end": 29
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 37,
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 31,
                                "end": 39
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 31,
                            "end": 40
                        },
                        {
                            "kind": 164,
                            "expression": {
                                "kind": 134,
                                "value": true,
                                "autofix": 0,
                                "flags": 768,
                                "start": 45,
                                "end": 49
                            },
                            "consequent": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 3,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 60
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 52,
                                            "end": 60
                                        }
                                    ],
                                    "multiLine": false,
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 52,
                                    "end": 60
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 50,
                                "end": 62
                            },
                            "alternate": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 40,
                            "end": 62
                        },
                        {
                            "kind": 168,
                            "autofix": 0,
                            "flags": 128,
                            "start": 62,
                            "end": 63
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": 4,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 69,
                                    "end": 71
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 63,
                                "end": 71
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 63,
                            "end": 71
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 31,
                    "end": 71
                },
                "autofix": 0,
                "flags": 256,
                "start": 29,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 13,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
`````
```

