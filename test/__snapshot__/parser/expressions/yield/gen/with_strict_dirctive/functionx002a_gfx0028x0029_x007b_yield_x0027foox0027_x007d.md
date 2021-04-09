# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { yield 'foo' }
## Input

`````js
'use strict'; function* gf() { yield 'foo' }
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
                "value": "gf",
                "autofix": 0,
                "flags": 768,
                "start": 23,
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
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 67174403,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 36,
                                    "end": 42
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 30,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 30,
                            "end": 42
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 30,
                    "end": 42
                },
                "autofix": 0,
                "flags": 256,
                "start": 28,
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
    "text": "'use strict'; function* gf() { yield 'foo' }",
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
> :: case: function* gf() { yield 'foo' }
## Input

`````js
'use strict'; function* gf() { yield 'foo' }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { yield 'foo' }
## Input

`````js
'use strict'; function* gf() { yield 'foo' }
`````
```

