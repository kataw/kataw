# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: [ a = (initialized = true, initializer) ] = value
## Input

`````js
{ [ a = (initialized = true, initializer) ] = value }
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
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 3,
                                                "end": 5
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 5,
                                                "end": 7
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 132,
                                                    "expressions": [
                                                        {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "initialized",
                                                                "rawText": "initialized",
                                                                "flags": 96,
                                                                "start": 9,
                                                                "end": 20
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 64,
                                                                "start": 20,
                                                                "end": 22
                                                            },
                                                            "right": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "start": 22,
                                                                "end": 27
                                                            },
                                                            "flags": 32,
                                                            "start": 7,
                                                            "end": 27
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "initializer",
                                                            "rawText": "initializer",
                                                            "flags": 96,
                                                            "start": 28,
                                                            "end": 40
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "start": 7,
                                                "end": 41
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 43
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 43,
                                "end": 45
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "value",
                                "rawText": "value",
                                "flags": 96,
                                "start": 45,
                                "end": 51
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 51
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "{ [ a = (initialized = true, initializer) ] = value }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

{
  [a = (initialized = true, initializer)] = value;
}
```

### Diagnostics

```javascript
✔ No errors
```

