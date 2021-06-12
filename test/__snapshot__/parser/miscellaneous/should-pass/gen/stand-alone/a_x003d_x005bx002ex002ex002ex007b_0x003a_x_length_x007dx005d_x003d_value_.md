# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: a = [...{ 0: x, length }] = value;
## Options

`````js
{}
`````
## Input

`````js
a = [...{ 0: x, length }] = value;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "start": 9,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 14
                                                    },
                                                    "flags": 32,
                                                    "start": 9,
                                                    "end": 14
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "length",
                                                    "rawText": "length",
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 22
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 9,
                                            "end": 22
                                        },
                                        "flags": 48,
                                        "start": 8,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 5,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "start": 27,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "a = [...{ 0: x, length }] = value;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

a = [...{ 0: x, length }] = value;
```

### Diagnostics

```javascript
✔ No errors
```

