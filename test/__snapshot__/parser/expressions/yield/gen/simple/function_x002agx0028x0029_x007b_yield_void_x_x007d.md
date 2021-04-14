# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function *g() { yield void x }
## Input

`````js
function *g() { yield void x }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 21
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259887,
                                        "flags": 768,
                                        "start": 21,
                                        "end": 26
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 256,
                                    "start": 21,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 28
                },
                "flags": 256,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function *g() { yield void x }",
    "fileName": "__root__",
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
> :: case: function *g() { yield void x }
## Input

`````js
function *g() { yield void x }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function *g() { yield void x }
## Input

`````js
function *g() { yield void x }
`````
```

