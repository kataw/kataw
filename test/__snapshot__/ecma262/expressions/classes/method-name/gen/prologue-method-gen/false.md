# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/method-name/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/method-name/gen/prologue-method-gen
> :: test: prologue-method-gen
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
'use strict'; ({*false(x, y) {}});
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 16,
                                    "end": 17
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "false",
                                        "rawText": "false",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 24
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 224,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 28
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
                                            "start": 30,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 31
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 31
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 15,
                    "end": 32
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 34,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({*false(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

"'use strict'";
({ * false(x, y) {} });
```

### Diagnostics

```javascript
✔ No errors
```

