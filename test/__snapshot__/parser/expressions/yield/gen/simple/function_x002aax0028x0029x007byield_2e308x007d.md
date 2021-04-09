# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function *a(){yield 2e308}
## Input

`````js
function *a(){yield 2e308}
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
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
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
                                    "start": 19,
                                    "end": 25
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 25
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 25
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 26
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "function *a(){yield 2e308}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function *a(){yield 2e308}
## Input

`````js
function *a(){yield 2e308}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function *a(){yield 2e308}
## Input

`````js
function *a(){yield 2e308}
`````
```

