# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
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
                            "start": 3,
                            "end": 7
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
                                "start": 18,
                                "end": 19
                            },
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 21
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
                                                                    "start": 34,
                                                                    "end": 37
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 29,
                                                                "end": 37
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 29,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 29,
                                                    "end": 37
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 27,
                                                "end": 38
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
                                                                    "start": 53,
                                                                    "end": 56
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 48,
                                                                "end": 56
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 48,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 48,
                                                    "end": 57
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 46,
                                                "end": 57
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 23,
                                            "end": 57
                                        },
                                        {
                                            "kind": 161,
                                            "expression": {
                                                "kind": 81921,
                                                "value": 13,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 64,
                                                "end": 67
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 0,
                                            "end": 57
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 67
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 68
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 9,
                            "end": 68
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 68
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 68
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 68
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 70,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57,
            "end": 64
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 68,
            "end": 70
        }
    ],
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````
```

