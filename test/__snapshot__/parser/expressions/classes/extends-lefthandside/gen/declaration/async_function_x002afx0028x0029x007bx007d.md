# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function *f(){}
## Input

`````js
class A extends async function *f(){} {}
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
                    "asyncToken": {
                        "kind": 82031,
                        "autofix": 0,
                        "flags": 0,
                        "start": 15,
                        "end": 21
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "autofix": 0,
                        "flags": 0,
                        "start": 30,
                        "end": 32
                    },
                    "name": {
                        "kind": 81921,
                        "value": "f",
                        "autofix": 0,
                        "flags": 768,
                        "start": 32,
                        "end": 33
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 34,
                        "end": 35
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 36,
                            "end": 36
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 35,
                        "end": 37
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 3328,
                    "start": 15,
                    "end": 37
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 37
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 39,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "class A extends async function *f(){} {}",
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
- Path: n
> :: test: declaration
> :: case: async function *f(){}
## Input

`````js
class A extends async function *f(){} {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function *f(){}
## Input

`````js
class A extends async function *f(){} {}
`````
```

