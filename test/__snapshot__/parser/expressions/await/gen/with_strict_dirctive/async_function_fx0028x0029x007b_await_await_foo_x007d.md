# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f(){ await await foo; }
## Input

`````js
'use strict'; async function f(){ await await foo; }
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
                                    "kind": 208,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 45,
                                        "end": 49
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 49
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 33,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 33,
                            "end": 50
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 50
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f(){ await await foo; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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
> :: case: async function f(){ await await foo; }
## Input

`````js
'use strict'; async function f(){ await await foo; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f(){ await await foo; }
## Input

`````js
'use strict'; async function f(){ await await foo; }
`````
```

