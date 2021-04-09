# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: function f(){}
## Input

`````js
async function p(){
  class C extends function f(){} {}
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
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "p",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                "start": 27,
                                "end": 29
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
                                        "start": 46,
                                        "end": 48
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 49,
                                        "end": 50
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 51,
                                            "end": 51
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 50,
                                        "end": 52
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 52
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 37,
                                "end": 52
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 54,
                                "end": 55
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 55
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 55
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 57
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "async function p(){\n  class C extends function f(){} {}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: function f(){}
## Input

`````js
async function p(){
  class C extends function f(){} {}
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: function f(){}
## Input

`````js
async function p(){
  class C extends function f(){} {}
}
`````
```

