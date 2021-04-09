# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f(){ await foo\n/foo/g }
## Input

`````js
'use strict'; async function f(){ await foo\n/foo/g }
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
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 31,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "expression": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 39,
                                    "end": 43
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 33,
                                "end": 43
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 33,
                            "end": 43
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 43
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "n",
                        "autofix": 0,
                        "flags": 768,
                        "start": 44,
                        "end": 45
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "autofix": 0,
                        "flags": 0,
                        "start": 45,
                        "end": 46
                    },
                    "right": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 46,
                        "end": 49
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 44,
                    "end": 49
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 49,
                    "end": 50
                },
                "right": {
                    "kind": 81921,
                    "value": "g",
                    "autofix": 0,
                    "flags": 768,
                    "start": 50,
                    "end": 51
                },
                "autofix": 0,
                "flags": 256,
                "start": 44,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f(){ await foo\\n/foo/g }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 43,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 51,
            "end": 53
        }
    ],
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f(){ await foo\n/foo/g }
## Input

`````js
'use strict'; async function f(){ await foo\n/foo/g }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f(){ await foo\n/foo/g }
## Input

`````js
'use strict'; async function f(){ await foo\n/foo/g }
`````
```

