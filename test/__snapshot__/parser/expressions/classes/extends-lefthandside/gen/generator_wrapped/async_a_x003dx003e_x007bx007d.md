# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: async a => {}
## Input

`````js
function *P(){
  class D extends async a => {} {}
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
                                    "kind": 271,
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 38,
                                                "end": 40
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 32,
                                            "end": 40
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 32,
                                        "end": 38
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 45,
                                            "end": 45
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 43,
                                        "end": 46
                                    },
                                    "autofix": 0,
                                    "flags": 2304,
                                    "start": 32,
                                    "end": 46
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 32,
                                "end": 46
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 48,
                                "end": 49
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 49
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 49
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "function *P(){\n  class D extends async a => {} {}\n}",
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
- Path: d
> :: test: generator wrapped
> :: case: async a => {}
## Input

`````js
function *P(){
  class D extends async a => {} {}
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
> :: case: async a => {}
## Input

`````js
function *P(){
  class D extends async a => {} {}
}
`````
```

