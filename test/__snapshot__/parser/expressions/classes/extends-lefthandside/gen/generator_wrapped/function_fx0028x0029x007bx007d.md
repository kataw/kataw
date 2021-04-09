# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: function f(){}
## Input

`````js
function *P(){
  class D extends function f(){} {}
}
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
                "value": "P",
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
                            "kind": 178,
                            "decorators": null,
                            "name": {
                                "kind": 81921,
                                "value": "D",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "expression": {
                                    "kind": 177,
                                    "asyncToken": null,
                                    "generatorToken": null,
                                    "name": {
                                        "kind": 81921,
                                        "value": "f",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 44,
                                        "end": 45
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 46,
                                            "end": 46
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 47
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 32,
                                "end": 47
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 49,
                                "end": 50
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 50
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 50
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "function *P(){\n  class D extends function f(){} {}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: function f(){}
## Input

`````js
function *P(){
  class D extends function f(){} {}
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: function f(){}
## Input

`````js
function *P(){
  class D extends function f(){} {}
}
`````
```

