# Kataw parser test case

## Input

`````js
  a + b /*1*/ / /*2*/
      /*3*/
      d
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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 7,
                        "end": 15
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 41
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 7,
                    "end": 41
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "  a + b /*1*/ / /*2*/\n      /*3*/\n      d",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
a + b /*1*/ //*2*/  /*3*/d;
```

### Diagnostics

```javascript
✔ No errors
```

