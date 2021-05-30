# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\await\async-await-errors\gen\with_strict_directive
> :: test: with strict directive
> :: case: function* g() { var f = async yield => 1; }
## Input

`````js
'use strict'; function* g() { var f = async yield => 1; }
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
            "generatorToken": {
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
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 25,
                "end": 27
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
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 43,
                                                "end": 49
                                            },
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 37,
                                                "end": 43
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 52,
                                                "end": 54
                                            },
                                            "flags": 288,
                                            "start": 37,
                                            "end": 54
                                        },
                                        "flags": 16,
                                        "start": 33,
                                        "end": 54
                                    }
                                ],
                                "flags": 16,
                                "start": 33,
                                "end": 54
                            },
                            "flags": 16,
                            "start": 29,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 29,
                    "end": 55
                },
                "flags": 32,
                "start": 27,
                "end": 57
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* g() { var f = async yield => 1; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 43, end: 49
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 43, end: 49

```

