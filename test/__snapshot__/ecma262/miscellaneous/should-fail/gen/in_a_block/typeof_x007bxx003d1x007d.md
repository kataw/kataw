# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: typeof {x=1}
## Options

`````js
{}
`````
## Input

`````js
{ typeof {x=1} }
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
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477613,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 8
                            },
                            "operand": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 301,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 13
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{ typeof {x=1} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 14, end: 16

```

