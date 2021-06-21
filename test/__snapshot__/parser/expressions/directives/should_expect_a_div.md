# Kataw parser test case

## Input

`````js
"ignore me"
/x/g
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 201392131,
                        "text": "ignore me",
                        "rawText": "\"ignore me\"",
                        "flags": 96,
                        "start": 0,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 97,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 13,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "\"ignore me\"\n/x/g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

 "ignore me" / x / g; 
```

### Diagnostics

```javascript
✔ No errors
```

