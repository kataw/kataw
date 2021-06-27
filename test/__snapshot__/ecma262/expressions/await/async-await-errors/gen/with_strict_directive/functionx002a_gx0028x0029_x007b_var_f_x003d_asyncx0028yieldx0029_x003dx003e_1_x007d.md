# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: function* g() { var f = async(yield) => 1; }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function* g() { var f = async(yield) => 1; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
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
                "flags": 64,
                "start": 13,
                "end": 22
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 23,
                "end": 25
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 26,
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
                                "flags": 80,
                                "start": 29,
                                "end": 33
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 33,
                                            "end": 35
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 43
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 44,
                                                            "end": 49
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 32,
                                                        "start": 44,
                                                        "end": 49
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 37,
                                                "end": 37
                                            },
                                            "flags": 268435488,
                                            "start": 37,
                                            "end": 50
                                        },
                                        "flags": 16,
                                        "start": 33,
                                        "end": 50
                                    }
                                ],
                                "flags": 16,
                                "start": 33,
                                "end": 50
                            },
                            "flags": 16,
                            "start": 29,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 29,
                    "end": 50
                },
                "flags": 32,
                "start": 27,
                "end": 50
            },
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 53,
                "end": 55
            },
            "flags": 16,
            "start": 53,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* g() { var f = async(yield) => 1; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 50, end: 53
✖ Expected a `;` - start: 50, end: 53
✖ Declaration or statement expected - start: 56, end: 58

```

