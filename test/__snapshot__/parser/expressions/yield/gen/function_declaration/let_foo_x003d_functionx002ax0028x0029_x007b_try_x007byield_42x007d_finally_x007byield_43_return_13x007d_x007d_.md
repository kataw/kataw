# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                            "start": 24,
                                            "end": 28
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
                                                "start": 39,
                                                "end": 40
                                            },
                                            "name": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 41,
                                                "end": 42
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
                                                                                    "start": 55,
                                                                                    "end": 58
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 50,
                                                                                "end": 58
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 50,
                                                                            "end": 58
                                                                        }
                                                                    ],
                                                                    "multiLine": false,
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 50,
                                                                    "end": 58
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 48,
                                                                "end": 59
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
                                                                                    "start": 74,
                                                                                    "end": 77
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 69,
                                                                                "end": 77
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 69,
                                                                            "end": 78
                                                                        }
                                                                    ],
                                                                    "multiLine": false,
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 69,
                                                                    "end": 78
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 67,
                                                                "end": 78
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 44,
                                                            "end": 78
                                                        },
                                                        {
                                                            "kind": 161,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": 13,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 85,
                                                                "end": 88
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 0,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 44,
                                                    "end": 88
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 42,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 2304,
                                            "start": 30,
                                            "end": 89
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 24,
                                        "end": 89
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 24,
                                "end": 89
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 89
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 89
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 91
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 91
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 91,
            "end": 92
        }
    ],
    "isModule": false,
    "text": "function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 78,
            "end": 85
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 92,
            "end": 94
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 94,
            "end": 95
        }
    ],
    "start": 0,
    "end": 95
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
`````
```

