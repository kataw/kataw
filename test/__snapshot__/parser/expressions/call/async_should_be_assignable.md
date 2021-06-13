# Kataw parser test case

## Input

`````js
async = 5 + 5;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 5,
                        "rawText": "5",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 5,
                        "rawText": "5",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "async = 5 + 5;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

async = 5 + 5;
```

### Diagnostics

```javascript
✔ No errors
```

