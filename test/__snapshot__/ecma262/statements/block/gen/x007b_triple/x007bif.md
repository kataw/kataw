# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: {if
## Options

`````js
{}
`````
## Input

`````js
{ { { {if
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 164,
                                                            "ifKeyword": {
                                                                "kind": 37757019,
                                                                "flags": 80,
                                                                "start": 7,
                                                                "end": 9
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 64,
                                                                "start": 9,
                                                                "end": 9
                                                            },
                                                            "consequent": {
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "start": 9,
                                                                    "end": 9
                                                                },
                                                                "flags": 16,
                                                                "start": 9,
                                                                "end": 9
                                                            },
                                                            "elseKeyword": null,
                                                            "alternate": null,
                                                            "flags": 80,
                                                            "start": 7,
                                                            "end": 9
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 9
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 9
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{ { { {if",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 7, end: 9

```

