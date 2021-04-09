# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function f() { class C { await() { } } }
## Input

`````js
function f() { class C { await() { } } }
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
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 12
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
                                "start": 20,
                                "end": 22
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
                                                "value": "await",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 31,
                                                "end": 32
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
                                                    "start": 34,
                                                    "end": 34
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 32,
                                                "end": 36
                                            },
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 30,
                                            "end": 36
                                        },
                                        "flags": 256,
                                        "start": 24,
                                        "end": 36
                                    }
                                ],
                                "flags": 256,
                                "start": 24,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 38
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 38
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 40
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "function f() { class C { await() { } } }",
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
> :: test: simple
> :: case: function f() { class C { await() { } } }
## Input

`````js
function f() { class C { await() { } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function f() { class C { await() { } } }
## Input

`````js
function f() { class C { await() { } } }
`````
```

