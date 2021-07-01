# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: switch (g) { case 1: a: default: }
## Options

`````js
{}
`````
## Input

`````js
{ switch (g) { case 1: a: default: } }
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
                        "kind": 160,
                        "switchKeyword": {
                            "kind": 37757024,
                            "flags": 80,
                            "start": 1,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": {
                                "kind": 383,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 80,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "statements": [
                                            {
                                                "kind": 163,
                                                "label": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 64,
                                                    "start": 24,
                                                    "end": 25
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "start": 25,
                                                        "end": 25
                                                    },
                                                    "flags": 16,
                                                    "start": 25,
                                                    "end": 25
                                                },
                                                "flags": 16,
                                                "start": 22,
                                                "end": 25
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 14,
                                        "end": 25
                                    },
                                    {
                                        "kind": 170,
                                        "defaultKeyword": {
                                            "kind": 4194387,
                                            "flags": 80,
                                            "start": 25,
                                            "end": 33
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "start": 25,
                                        "end": 34
                                    }
                                ],
                                "flags": 16,
                                "start": 14,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 36
                        },
                        "flags": 80,
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
    "source": "{ switch (g) { case 1: a: default: } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 25, end: 33

```

