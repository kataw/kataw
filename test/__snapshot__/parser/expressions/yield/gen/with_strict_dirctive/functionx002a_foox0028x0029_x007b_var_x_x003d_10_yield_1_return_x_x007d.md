# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
'use strict'; function* foo() { var x = 10; yield 1; return x; }
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
                            "kind": 155,
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 35,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 81921,
                                            "value": 10,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 39,
                                            "end": 42
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 35,
                                        "end": 42
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 35,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 31,
                            "end": 43
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 49,
                                    "end": 51
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 43,
                                "end": 51
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 43,
                            "end": 52
                        },
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 59,
                                "end": 61
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 52
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 31,
                    "end": 62
                },
                "autofix": 0,
                "flags": 256,
                "start": 29,
                "end": 64
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 13,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* foo() { var x = 10; yield 1; return x; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
'use strict'; function* foo() { var x = 10; yield 1; return x; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
'use strict'; function* foo() { var x = 10; yield 1; return x; }
`````
```

