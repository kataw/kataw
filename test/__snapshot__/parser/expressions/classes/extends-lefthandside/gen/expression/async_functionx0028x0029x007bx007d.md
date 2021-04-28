# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async function(){}
## Input

`````js
(class B extends async function(){} {})
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
                        "kind": 37822544,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
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
                                "kind": 37822554,
                                "flags": 768,
                                "start": 22,
                                "end": 31
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 31,
                                "end": 33
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 35
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1280,
                            "start": 16,
                            "end": 35
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 35
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 37,
                        "end": 38
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 38
                },
                "flags": 256,
                "start": 0,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "(class B extends async function(){} {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

