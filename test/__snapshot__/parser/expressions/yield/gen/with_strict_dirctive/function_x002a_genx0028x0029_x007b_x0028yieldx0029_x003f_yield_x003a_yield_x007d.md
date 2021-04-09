# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
'use strict'; function * gen() { (yield) ? yield : yield }
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
                "end": 24
            },
            "name": {
                "kind": 81921,
                "value": "gen",
                "autofix": 0,
                "flags": 768,
                "start": 24,
                "end": 28
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 29,
                "end": 30
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
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 39
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 40
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 40,
                                    "end": 42
                                },
                                "consequent": {
                                    "kind": 229,
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 42,
                                    "end": 48
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "alternate": {
                                    "kind": 229,
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 50,
                                    "end": 56
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 32,
                                "end": 56
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 32,
                            "end": 56
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 32,
                    "end": 56
                },
                "autofix": 0,
                "flags": 256,
                "start": 30,
                "end": 58
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 13,
            "end": 58
        }
    ],
    "isModule": false,
    "text": "'use strict'; function * gen() { (yield) ? yield : yield }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
'use strict'; function * gen() { (yield) ? yield : yield }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
'use strict'; function * gen() { (yield) ? yield : yield }
`````
```

