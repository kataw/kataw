# Kataw parser test case

## Input

`````js
while (false) let // ASI
x = 1;
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
                "kind": 205586437,
                "flags": 96,
                "start": 7,
                "end": 12
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 13,
                    "end": 17
                },
                "flags": 16,
                "start": 13,
                "end": 17
            },
            "flags": 80,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 17,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 26,
                    "end": 28
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "flags": 32,
                "start": 17,
                "end": 30
            },
            "flags": 16,
            "start": 17,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "while (false) let // ASI\nx = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

while (false)
  let;// ASI
x = 1;

```

### Diagnostics

```javascript
✔ No errors
```

