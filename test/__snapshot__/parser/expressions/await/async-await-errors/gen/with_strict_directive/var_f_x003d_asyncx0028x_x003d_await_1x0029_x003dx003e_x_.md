# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\async-await-errors\gen\with_strict_directive
> :: test: with strict directive
> :: case: var f = async(x = await 1) => x;
## Input

`````js
'use strict'; var f = async(x = await 1) => x;
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 40,
                                "end": 43
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 27
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 37
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 37,
                                            "end": 39
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 21,
                                    "end": 39
                                },
                                "flags": 268435488,
                                "start": 21,
                                "end": 40
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 21,
                                "end": 27
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 43,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 45
            },
            "flags": 16,
            "start": 13,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "'use strict'; var f = async(x = await 1) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

var f = async async(x = await, 1) =>  x;
```

### Diagnostics

```javascript
✔ No errors
```

