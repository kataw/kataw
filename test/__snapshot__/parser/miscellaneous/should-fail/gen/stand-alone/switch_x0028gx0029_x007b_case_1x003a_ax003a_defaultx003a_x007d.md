# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\stand-alone
> :: test: stand-alone
> :: case: switch (g) { case 1: a: default: }
## Input

`````js
switch (g) { case 1: a: default: }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 163,
                                "label": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 22
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 22,
                                    "end": 23
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 23
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 23
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 23,
                            "end": 31
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 23,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "switch (g) { case 1: a: default: }",
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
✖ Identifier expected - start: 23, end: 31

```

