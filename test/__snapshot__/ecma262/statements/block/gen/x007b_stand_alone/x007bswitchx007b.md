# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: {switch{
## Options

`````js
{}
`````
## Input

`````js
{ {switch{
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
                                    "kind": 160,
                                    "switchKeyword": {
                                        "kind": 37757024,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 9
                                    },
                                    "expression": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 10
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "caseBlock": {
                                        "kind": 152,
                                        "clauses": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 10
                                    },
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 10
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "{ {switch{",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 9, end: 10

```

