# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/gen/strict_mode
> :: test: strict mode
> :: case: switch (this.a) { c\u0061se 6: break; }
## Options

`````js
{}
`````
## Input

`````js
switch (this.a) { c\u0061se 6: break; }
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
                "kind": 129,
                "member": {
                    "kind": 4276321,
                    "flags": 96,
                    "start": 8,
                    "end": 12
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "flags": 536870944,
                "start": 8,
                "end": 14
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 16464,
                            "start": 17,
                            "end": 27
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 6,
                            "rawText": "6",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "start": 30,
                                    "end": 36
                                },
                                "label": null,
                                "flags": 16,
                                "start": 30,
                                "end": 37
                            }
                        ],
                        "flags": 16,
                        "start": 17,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 15,
                "end": 39
            },
            "flags": 80,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "switch (this.a) { c\\u0061se 6: break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 17, end: 27

```

