# Kataw parser test case

## Input

`````js
new eval()
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "start": 3,
                    "end": 8
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 96,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "new eval()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

new  eval();
```

### Diagnostics

```javascript
✔ No errors
```

