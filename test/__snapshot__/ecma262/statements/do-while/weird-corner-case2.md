# Kataw parser test case

## Input

`````js
{do x;while(y)}
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
                        "kind": 169,
                        "doKeyword": {
                            "kind": 4202580,
                            "flags": 80,
                            "start": 1,
                            "end": 3
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 6
                        },
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 64,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 80,
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
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{do x;while(y)}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

{
  do x;
  while (y);
}
```

### Diagnostics

```javascript
✔ No errors
```

