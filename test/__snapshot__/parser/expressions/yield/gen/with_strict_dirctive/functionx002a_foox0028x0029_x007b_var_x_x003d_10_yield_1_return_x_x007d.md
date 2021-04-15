# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
'use strict'; function* foo() { var x = 10; yield 1; return x; }
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
                "flags": 768,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 23,
                "end": 27
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 27,
                "end": 29
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
                                "flags": 768,
                                "start": 31,
                                "end": 35
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 35,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 768,
                                            "start": 39,
                                            "end": 42
                                        },
                                        "flags": 128,
                                        "start": 35,
                                        "end": 42
                                    }
                                ],
                                "flags": 128,
                                "start": 35,
                                "end": 42
                            },
                            "flags": 128,
                            "start": 31,
                            "end": 43
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 768,
                                    "start": 43,
                                    "end": 49
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 49,
                                    "end": 51
                                },
                                "flags": 256,
                                "start": 43,
                                "end": 51
                            },
                            "flags": 128,
                            "start": 43,
                            "end": 52
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
                                "start": 52,
                                "end": 59
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 59,
                                "end": 61
                            },
                            "flags": 128,
                            "start": 0,
                            "end": 52
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 31,
                    "end": 62
                },
                "flags": 256,
                "start": 29,
                "end": 64
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 13,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* foo() { var x = 10; yield 1; return x; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

