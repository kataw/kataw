# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(...await) => {};
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var asyncArrow = async(...await) => {};
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
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 28
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 36
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 40
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 45
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 4096,
                                        "start": 37,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 46
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 49
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 52
                            },
                            "flags": 290,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 52
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 52
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncArrow = async(...await) => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

"'use strict'";
var asyncArrow = async (...await) => {};
```

### Diagnostics

```javascript
✔ No errors
```

