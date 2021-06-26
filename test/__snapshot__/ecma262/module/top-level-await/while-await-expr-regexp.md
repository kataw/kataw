# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
while (await /1/) { break; }
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
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "start": 7,
                    "end": 12
                },
                "expression": {
                    "kind": 371,
                    "text": "/1/",
                    "flags": 96,
                    "start": 12,
                    "end": 16
                },
                "flags": 32,
                "start": 7,
                "end": 16
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 80,
                                "start": 19,
                                "end": 25
                            },
                            "label": null,
                            "flags": 16,
                            "start": 19,
                            "end": 26
                        }
                    ],
                    "flags": 16,
                    "start": 19,
                    "end": 26
                },
                "flags": 16,
                "start": 17,
                "end": 28
            },
            "flags": 80,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": true,
    "source": "while (await /1/) { break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

while (await /1/) {}
```

### Diagnostics

```javascript
✔ No errors
```

