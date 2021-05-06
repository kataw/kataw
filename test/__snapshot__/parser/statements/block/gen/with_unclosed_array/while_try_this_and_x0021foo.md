# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: while try this and !foo
## Input

`````js
{[ while try this and !foo
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 8,
                            "end": 8
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 17,
                                    "end": 17
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 2,
                        "end": 17
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "and",
                            "rawText": "and",
                            "flags": 96,
                            "start": 17,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 21
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 21,
                                "end": 23
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{[ while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 2, end: 8
✖ Expression expected - start: 8, end: 12
✖ Expected a `;` - start: 21, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 26, end: 26

```

