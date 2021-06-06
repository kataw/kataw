# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: a = [...{ 0: x, length }] = value;
## Input

`````js
{ a = [...{ 0: x, length }] = value; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 3,
                                "end": 5
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
                                                    "start": 7,
                                                    "end": 10
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
                                                                    "start": 11,
                                                                    "end": 13
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 14,
                                                                    "end": 16
                                                                },
                                                                "flags": 32,
                                                                "start": 11,
                                                                "end": 16
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 17,
                                                                "end": 24
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 11,
                                                        "end": 24
                                                    },
                                                    "flags": 48,
                                                    "start": 10,
                                                    "end": 26
                                                },
                                                "flags": 32,
                                                "start": 7,
                                                "end": 26
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "value",
                                    "rawText": "value",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "{ a = [...{ 0: x, length }] = value; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

{
  a = [...{ 0: x, length }] = value;
}
```

### Diagnostics

```javascript
✔ No errors
```

