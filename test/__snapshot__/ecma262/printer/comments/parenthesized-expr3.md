# Kataw parser test case

## Input

`````js
(/*1*/x)




 /*2*/
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 7
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "(/*1*/x)\n\n\n\n\n /*2*/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
(x);
```

### Diagnostics

```javascript
✔ No errors
```

