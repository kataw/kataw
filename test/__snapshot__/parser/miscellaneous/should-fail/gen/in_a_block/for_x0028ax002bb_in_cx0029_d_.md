# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: for (a+b in c) d;
## Options

`````js
{}
`````
## Input

`````js
{ for (a+b in c) d; }
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
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 64,
                                "start": 8,
                                "end": 9
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 15
                        },
                        "condition": null,
                        "incrementor": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 15,
                            "end": 15
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 80,
                        "start": 1,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "{ for (a+b in c) d; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 16

```

