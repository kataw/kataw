# Kataw parser test case

## Input

`````js
for(delete(x in y);;)x
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 10
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 10,
                        "end": 17
                    },
                    "flags": 10,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 4,
                "end": 18
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 21,
                "end": 22
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for(delete(x in y);;)x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for (delete (x in y); ; )
  x;
```

### Diagnostics

```javascript
✔ No errors
```

