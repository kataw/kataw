# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
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
                                                "start": 10,
                                                "end": 11
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 10,
                                    "end": 13
                                },
                                "flags": 48,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{ typeof {x=1} }",
    "fileName": "__root__",
    "flags": 0,
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

