# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/method-name/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/method-name/gen/prologue-method-gen
> :: test: prologue-method-gen
> :: case: protected
## Options

`````js
{}
`````
## Input

`````js
'use strict'; ({*protected(x, y) {}});
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
                                        "text": "protected",
                                        "rawText": "protected",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 26
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
                                                "start": 27,
                                                "end": 28
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 31
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 224,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 32
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
                                            "start": 34,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 35
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 35
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 15,
                    "end": 36
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 34,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({*protected(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

"'use strict'";
({ *protected(x, y) {} });
```

### Diagnostics

```javascript
✔ No errors
```

