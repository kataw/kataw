# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { yield 'foo' }
## Input

`````js
function* gf() { yield 'foo' }
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 81921,
                "value": "gf",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 14
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
                                    "start": 22,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 16,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 16,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 16,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 14,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function* gf() { yield 'foo' }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { yield 'foo' }
## Input

`````js
function* gf() { yield 'foo' }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { yield 'foo' }
## Input

`````js
function* gf() { yield 'foo' }
`````
```

