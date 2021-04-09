# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: function f(){}
## Input

`````js
class A extends function f(){} {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
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
                        "start": 24,
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
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 29,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 28,
                        "end": 30
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 30
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 30
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 32,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "class A extends function f(){} {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: function f(){}
## Input

`````js
class A extends function f(){} {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: function f(){}
## Input

`````js
class A extends function f(){} {}
`````
```

