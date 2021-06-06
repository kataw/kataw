# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: for ([a, my_var, b] in {}) { my_var; }
## Input

`````js
{ for ([a, my_var, b] in {}) { my_var; } }
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
                        "kind": 166,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 9
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "my_var",
                                        "rawText": "my_var",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 17
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 21
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "start": 21,
                            "end": 24
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 48,
                            "start": 24,
                            "end": 27
                        },
                        "statement": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "my_var",
                                            "rawText": "my_var",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 37
                                        },
                                        "flags": 16,
                                        "start": 30,
                                        "end": 38
                                    }
                                ],
                                "flags": 16,
                                "start": 30,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 28,
                            "end": 40
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "{ for ([a, my_var, b] in {}) { my_var; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

{
  for ([a, my_var, b] in {})
    {}
}
```

### Diagnostics

```javascript
✔ No errors
```

