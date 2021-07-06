# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: function* g() { var f = async yield => 1; }
## Options

`````js
{}
`````
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
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 13,
                "end": 22
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 23,
                "end": 25
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                                "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 35
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 271,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 49
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "contents": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 54
                                            },
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 54
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 33,
                                        "end": 54
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 54
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 55
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 27,
                "end": 57
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 13,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* g() { var f = async yield => 1; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 43, end: 49

```

