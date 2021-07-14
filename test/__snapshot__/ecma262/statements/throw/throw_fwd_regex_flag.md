# Kataw parser test case

## Input

`````js
throw
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
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 371,
                "text": "/x/g",
                "rawText": "/x/g",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 10
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "throw\n/x/g",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Linebreak ermitted after throw - start: 5, end: 10

```

