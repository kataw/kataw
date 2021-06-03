# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\expression
> :: test: expression
> :: case: async function *f(){}
## Input

`````js
(class B extends async function *f(){} {})
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
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 22
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 22,
                                    "end": 31
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 31,
                                    "end": 33
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 34
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 416,
                                "start": 16,
                                "end": 38
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 16,
                            "end": 38
                        },
                        "body": {
                            "kind": 262,
                            "elements": [],
                            "flags": 32,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 8,
                        "start": 32,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 41
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "(class B extends async function *f(){} {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

(class B  {});
```

### Diagnostics

```javascript
✔ No errors
```

