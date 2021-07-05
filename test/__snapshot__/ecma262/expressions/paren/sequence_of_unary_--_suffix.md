# Kataw parser test case

## Input

`````js
(x--, y);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196636,
                                "flags": 96,
                                "start": 2,
                                "end": 4
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 4
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "start": 32,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "(x--, y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

(x-- , y);
```

### Diagnostics

```javascript
✔ No errors
```

