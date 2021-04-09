# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };
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
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncToken": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 159,
                                            "block": {
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
                                                                    "value": 42,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 48,
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
                                                            "end": 51
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 43,
                                                    "end": 51
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 41,
                                                "end": 52
                                            },
                                            "catchClause": null,
                                            "finallyBlock": {
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
                                                                    "value": 43,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 67,
                                                                    "end": 70
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 62,
                                                                "end": 70
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 62,
                                                            "end": 71
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 62,
                                                    "end": 71
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 60,
                                                "end": 71
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 37,
                                            "end": 71
                                        },
                                        {
                                            "kind": 161,
                                            "expression": {
                                                "kind": 81921,
                                                "value": 13,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 78,
                                                "end": 81
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 0,
                                            "end": 71
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 81
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 82
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 23,
                            "end": 82
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 82
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 82
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 82
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 84,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 71,
            "end": 78
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 82,
            "end": 84
        }
    ],
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````
```

