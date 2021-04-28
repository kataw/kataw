# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function f() { var await; }
## Input

`````js
'use strict'; function f() { var await; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 13,
                "start": 0,
                "end": 22
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 22,
                "end": 24
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 24,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 28,
                                "start": 0,
                                "end": 32
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 32,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 128,
                                        "start": 32,
                                        "end": 38
                                    }
                                ],
                                "flags": 128,
                                "start": 32,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 28,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 28,
                    "end": 39
                },
                "flags": 256,
                "start": 26,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 13,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "'use strict'; function f() { var await; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
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

