# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: switch (g) { case 1: a: default: }
## Options

`````js
{}
`````
## Input

`````js
"use strict"; switch (g) { case 1: a: default: }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 22,
                "end": 23
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "start": 26,
                            "end": 31
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 31,
                            "end": 33
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 33,
                            "end": 34
                        },
                        "statements": [
                            {
                                "kind": 163,
                                "label": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 36
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 36,
                                    "end": 37
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 16,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 16,
                                "start": 34,
                                "end": 37
                            }
                        ],
                        "flags": 16,
                        "start": 26,
                        "end": 37
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 37,
                            "end": 45
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 45,
                            "end": 46
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 37,
                        "end": 46
                    }
                ],
                "flags": 16,
                "start": 26,
                "end": 46
            },
            "flags": 80,
            "start": 13,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; switch (g) { case 1: a: default: }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 37, end: 45

```

