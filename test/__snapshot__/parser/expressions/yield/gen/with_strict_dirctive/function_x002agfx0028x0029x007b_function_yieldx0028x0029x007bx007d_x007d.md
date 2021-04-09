# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *gf(){ function yield(){}; }
## Input

`````js
'use strict'; function *gf(){ function yield(){}; }
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
                "value": "gf",
                "autofix": 0,
                "flags": 768,
                "start": 24,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "yield",
                                "autofix": 0,
                                "flags": 768,
                                "start": 38,
                                "end": 44
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 45,
                                "end": 46
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 47,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 46,
                                "end": 48
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 29,
                            "end": 48
                        },
                        {
                            "kind": 168,
                            "autofix": 0,
                            "flags": 128,
                            "start": 48,
                            "end": 49
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 29,
                    "end": 49
                },
                "autofix": 0,
                "flags": 256,
                "start": 28,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 13,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "'use strict'; function *gf(){ function yield(){}; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *gf(){ function yield(){}; }
## Input

`````js
'use strict'; function *gf(){ function yield(){}; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *gf(){ function yield(){}; }
## Input

`````js
'use strict'; function *gf(){ function yield(){}; }
`````
```

