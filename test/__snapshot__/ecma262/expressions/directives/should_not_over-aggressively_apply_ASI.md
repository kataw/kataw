# Kataw parser test case

## Input

`````js
"ignore me"
+ x
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
                    "text": "ignore me",
                    "rawText": "\"ignore me\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "\"ignore me\"\n+ x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

"\"ignore me\"" + x;
```

### Diagnostics

```javascript
✔ No errors
```

