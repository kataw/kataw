# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/gen/stand-alone
> :: test: stand-alone
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
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
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
                                            "flags": 96,
                                            "start": 9,
                                            "end": 22
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16400,
                                    "start": 9,
                                    "end": 22
                                },
                                "flags": 16432,
                                "start": 7,
                                "end": 24
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
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
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "private",
                                                "rawText": "private",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 36
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 28,
                                    "end": 40
                                },
                                "flags": 48,
                                "start": 26,
                                "end": 42
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 42
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "var x = { privat\\u0065 } = { private: 42 };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

var x = { private } = { private: 42 };
```

### Diagnostics

```javascript
✔ No errors
```

