# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: foo:for(;;)continue foo
>          /bar/d
## Input

`````js
{ foo:for(;;)continue foo
/bar/d }
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
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 1,
                            "end": 5
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 5,
                            "end": 6
                        },
                        "statement": {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 6,
                                "end": 9
                            },
                            "initializer": null,
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 80,
                                    "start": 13,
                                    "end": 21
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 25
                                },
                                "flags": 16,
                                "start": 13,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 6,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 25
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 25,
                                    "end": 25
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 65,
                                    "start": 25,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 30
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 64,
                                "start": 30,
                                "end": 31
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 31,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 25,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 25,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{ foo:for(;;)continue foo\n/bar/d }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 25, end: 27

```

