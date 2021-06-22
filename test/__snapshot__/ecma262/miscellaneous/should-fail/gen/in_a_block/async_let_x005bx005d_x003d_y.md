# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: async let [] = y
## Options

`````js
{}
`````
## Input

`````js
{ async let [] = y }
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
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 1,
                                "end": 7
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "start": 7,
                                "end": 11
                            },
                            "returnType": null,
                            "arrowToken": null,
                            "contents": {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 13,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 14
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 14,
                                    "end": 16
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 18
                            },
                            "flags": 288,
                            "start": 1,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{ async let [] = y }",
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
✖ 'async' modifier cannot be used here - start: 11, end: 13

```

