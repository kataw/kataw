# Kataw parser test case

## Input

`````js
if (foo) bar; else doo;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 8,
                "end": 13
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "doo",
                    "rawText": "doo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 22
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 18,
                "end": 23
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "if (foo) bar; else doo;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
if (foo) bar;
else  doo;
```

### Diagnostics

```javascript
✔ No errors
```

