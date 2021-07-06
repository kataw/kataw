# Kataw parser test case

## Input

`````js
while (false) const x = null;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 7,
                "end": 12
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 138477575,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 19,
                        "end": 28
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 19,
                "end": 28
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "while (false) const x = null;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 13, end: 19

```

