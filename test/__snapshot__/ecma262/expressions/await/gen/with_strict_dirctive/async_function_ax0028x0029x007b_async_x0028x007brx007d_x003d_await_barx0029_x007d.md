# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function a(){     async ({r} = await bar);     }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; async function a(){     async ({r} = await bar);     }
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 28
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 43
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 47
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 45,
                                                "end": 48
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "right": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 50,
                                                    "end": 56
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 45,
                                            "end": 60
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 268435490,
                                "transformFlags": 1,
                                "start": 33,
                                "end": 61
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 62
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 62
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 32,
                "end": 68
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 13,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function a(){     async ({r} = await bar);     }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

"'use strict'";
async function a() {
  async({ r } = await bar);
}
```

### Diagnostics

```javascript
✔ No errors
```

