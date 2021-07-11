# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: a,b, c d = y ** d
## Options

`````js
{}
`````
## Input

`````js
{[ a,b, c d = y ** d
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 4
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 9
                                    },
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "operatorToken": {
                                                "kind": 35897,
                                                "flags": 96,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "flags": 96,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{[ a,b, c d = y ** d",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 10, end: 11
✖ ',' expected - start: 19, end: 20

```

