# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: { stand alone
> :: case: while try this and !foo
## Options

`````js
{}
`````
## Input

`````js
{ while try this and !foo
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
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "start": 1,
                            "end": 7
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 7,
                            "end": 7
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 80,
                                "start": 7,
                                "end": 11
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 16,
                                "start": 11,
                                "end": 11
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 16,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 16,
                            "start": 7,
                            "end": 11
                        },
                        "flags": 80,
                        "start": 1,
                        "end": 11
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 4276321,
                            "flags": 96,
                            "start": 11,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 11,
                        "end": 16
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "and",
                            "rawText": "and",
                            "flags": 96,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 20
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 20,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 8, end: 11
✖ Declaration or statement expected - start: 11, end: 16
✖ Expected a `;` - start: 16, end: 20
✖ Expected a `;` - start: 20, end: 22
✖ The parser expected to find a '}' to match the '{' token here - start: 22, end: 25

```

