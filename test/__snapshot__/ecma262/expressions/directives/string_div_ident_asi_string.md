# Kataw parser test case

## Input

`````js
""/x
""
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
                    "kind": 201392131,
                    "text": "",
                    "rawText": "\"\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 2
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 3
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 4
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "\"\"/x\n\"\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
"\"\"" / x;
"\"\"";

```

### Diagnostics

```javascript
✔ No errors
```

