# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: var O = { *async method() {} };
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var O = { *async method() {} };
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "text": "O",
                            "rawText": "O",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 480,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 30
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 37
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 416,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 39
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 42
                                            },
                                            "flags": 416,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 42
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 42
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 21,
                            "end": 44
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 44
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "'use strict'; var O = { *async method() {} };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

"'use strict'";
var O = { async method() {} };
```

### Diagnostics

```javascript
✔ No errors
```

