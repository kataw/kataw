# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *a(){yield 2e308}
## Input

`````js
'use strict'; function *a(){yield 2e308}
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
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 24,
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
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": null,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 33,
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 28,
                                "end": 39
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 28,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 28,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 40
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "'use strict'; function *a(){yield 2e308}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *a(){yield 2e308}
## Input

`````js
'use strict'; function *a(){yield 2e308}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *a(){yield 2e308}
## Input

`````js
'use strict'; function *a(){yield 2e308}
`````
```

