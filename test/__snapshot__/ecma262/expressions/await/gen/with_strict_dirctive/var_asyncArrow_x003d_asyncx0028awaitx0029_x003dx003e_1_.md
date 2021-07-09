# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(await) => 1;
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var asyncArrow = async(await) => 1;
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
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 43
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 48
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 48
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncArrow = async(await) => 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

"'use strict'";
var asyncArrow = async (await) => 1;
```

### Diagnostics

```javascript
✔ No errors
```

