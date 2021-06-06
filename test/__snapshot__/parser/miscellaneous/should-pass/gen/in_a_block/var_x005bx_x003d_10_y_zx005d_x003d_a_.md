# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: var [x = 10, y, z] = a;
## Input

`````js
{ var [x = 10, y, z] = a; }
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
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 10,
                                                        "rawText": "10",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 13
                                                    },
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 19
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 7,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 20
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 24
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ var [x = 10, y, z] = a; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

{
  var [x = 10, y, z] = a;
}
```

### Diagnostics

```javascript
✔ No errors
```

