# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/gen/strict_mode
> :: test: strict mode
> :: case: var x = { privat\u0065 } = { private: 42 };
## Options

`````js
{}
`````
## Input

`````js
var x = { privat\u0065 } = { private: 42 };
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "private",
                                            "rawText": "privat\\u0065",
                                            "flags": 16480,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 22
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16400,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 22
                                },
                                "flags": 16432,
                                "transformFlags": 8,
                                "start": 7,
                                "end": 24
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "private",
                                                "rawText": "private",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 36
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 28,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 40
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 26,
                                "end": 42
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 7,
                            "end": 42
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 42
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "var x = { privat\\u0065 } = { private: 42 };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
var x = { privat\u0065 } = { private: 42 };
```

### Diagnostics

```javascript
✔ No errors
```

