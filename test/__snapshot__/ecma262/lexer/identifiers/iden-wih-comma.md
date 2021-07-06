# Kataw parser test case

## Input

`````js
foo, bar, zoo
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 8
                    },
                    {
                        "kind": 134299649,
                        "text": "zoo",
                        "rawText": "zoo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 13
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "foo, bar, zoo",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

foo, bar, zoo;
```

### Diagnostics

```javascript
✔ No errors
```

