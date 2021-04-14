# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async function f(){}
## Input

`````js
(class B extends async function f(){} {})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37814352,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 81921,
                        "text": "B",
                        "rawText": "B",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 8,
                            "end": 16
                        },
                        "expression": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 16,
                                "end": 22
                            },
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 22,
                                "end": 31
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 31,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 33,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1280,
                            "start": 16,
                            "end": 37
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 37
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 39,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 40
                },
                "flags": 256,
                "start": 0,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "(class B extends async function f(){} {})",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async function f(){}
## Input

`````js
(class B extends async function f(){} {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async function f(){}
## Input

`````js
(class B extends async function f(){} {})
`````
```

