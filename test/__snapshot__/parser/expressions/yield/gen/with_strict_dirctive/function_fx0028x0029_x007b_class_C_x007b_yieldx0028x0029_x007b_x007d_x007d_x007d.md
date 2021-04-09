# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function f() { class C { yield() { } } }
## Input

`````js
'use strict'; function f() { class C { yield() { } } }
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
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 22,
                "end": 24
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 25,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 178,
                            "decorators": null,
                            "name": {
                                "kind": 81921,
                                "value": "C",
                                "autofix": 0,
                                "flags": 768,
                                "start": 34,
                                "end": 36
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [
                                    {
                                        "kind": 278,
                                        "decorators": null,
                                        "staticToken": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 81921,
                                                "value": "yield",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 38,
                                                "end": 44
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 45,
                                                "end": 46
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 48,
                                                    "end": 48
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 46,
                                                "end": 50
                                            },
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 44,
                                            "end": 50
                                        },
                                        "flags": 256,
                                        "start": 38,
                                        "end": 50
                                    }
                                ],
                                "flags": 256,
                                "start": 38,
                                "end": 52
                            },
                            "flags": 128,
                            "start": 28,
                            "end": 52
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 28,
                    "end": 52
                },
                "autofix": 0,
                "flags": 256,
                "start": 26,
                "end": 54
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 13,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "'use strict'; function f() { class C { yield() { } } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function f() { class C { yield() { } } }
## Input

`````js
'use strict'; function f() { class C { yield() { } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function f() { class C { yield() { } } }
## Input

`````js
'use strict'; function f() { class C { yield() { } } }
`````
```

