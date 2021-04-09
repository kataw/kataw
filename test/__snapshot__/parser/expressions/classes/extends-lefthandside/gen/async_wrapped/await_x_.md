# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: await
>          x;
## Input

`````js
async function p(){
  class C extends await
x; {}
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
                                    "kind": 208,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 45
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 37,
                                "end": 45
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 45
                        },
                        {
                            "kind": 168,
                            "autofix": 0,
                            "flags": 128,
                            "start": 45,
                            "end": 46
                        },
                        {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "autofix": 0,
                                "flags": 128,
                                "start": 48,
                                "end": 48
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 46,
                            "end": 49
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 49
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "async function p(){\n  class C extends await\nx; {}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 46
        }
    ],
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
> :: test: async wrapped
> :: case: await
>          x;
## Input

`````js
async function p(){
  class C extends await
x; {}
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
> :: case: await
>          x;
## Input

`````js
async function p(){
  class C extends await
x; {}
}
`````
```

