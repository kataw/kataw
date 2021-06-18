# Kataw parser test case

## Input

`````js
(class extends async function(){}{})
`````

## Output

### CST

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
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 6,
                                "end": 14
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 20
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 29
                                },
                                "generatorToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 29,
                                    "end": 31
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 31,
                                    "end": 33
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 14,
                                "end": 33
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 14,
                            "end": 33
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 34,
                            "end": 34
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 35
                },
                "flags": 32,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "(class extends async function(){}{})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

(class   {});
```

### Diagnostics

```javascript
✔ No errors
```

