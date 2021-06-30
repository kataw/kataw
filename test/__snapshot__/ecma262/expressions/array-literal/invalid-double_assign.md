# Kataw parser test case

## Input

`````js
[]=n/f>>=v
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
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 2,
                        "end": 3
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "start": 3,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 4,
                            "end": 5
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4127,
                    "flags": 96,
                    "start": 6,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "v",
                    "rawText": "v",
                    "flags": 96,
                    "start": 9,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "[]=n/f>>=v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

[] = n / f >>= v;

```

### Diagnostics

```javascript
✔ No errors
```

