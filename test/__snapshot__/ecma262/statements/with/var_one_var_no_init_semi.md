# Kataw parser test case

## Input

`````js
with (foo) bar;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 10,
                "end": 15
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "with (foo) bar;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
with (foo) bar;
```

### Diagnostics

```javascript
✔ No errors
```

