# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* g(){ x ? yield : y }
## Input

`````js
'use strict'; function* g(){ x ? yield : y }
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
                "value": "g",
                "autofix": 0,
                "flags": 768,
                "start": 23,
                "end": 25
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 26,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 30,
                                    "end": 32
                                },
                                "consequent": {
                                    "kind": 229,
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 38
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "alternate": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 40,
                                    "end": 42
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 28,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 28,
                            "end": 42
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 28,
                    "end": 42
                },
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 13,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* g(){ x ? yield : y }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* g(){ x ? yield : y }
## Input

`````js
'use strict'; function* g(){ x ? yield : y }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* g(){ x ? yield : y }
## Input

`````js
'use strict'; function* g(){ x ? yield : y }
`````
```

