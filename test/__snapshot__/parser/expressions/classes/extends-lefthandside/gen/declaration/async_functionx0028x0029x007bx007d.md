# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function(){}
## Input

`````js
class A extends async function(){} {}
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
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 31,
                        "end": 32
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 33,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 32,
                        "end": 34
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 1280,
                    "start": 15,
                    "end": 34
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 34
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 36,
                "end": 37
            },
            "flags": 128,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "class A extends async function(){} {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function(){}
## Input

`````js
class A extends async function(){} {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: async function(){}
## Input

`````js
class A extends async function(){} {}
`````
```

