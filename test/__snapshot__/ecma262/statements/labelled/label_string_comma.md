# Kataw parser test case

## Input

`````js
a: "b", c
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 1,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 201392131,
                            "text": "b",
                            "rawText": "\"b\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 6
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 2,
                    "end": 9
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "a: \"b\", c",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
a:  "\"b\"", c;
```

### Diagnostics

```javascript
✔ No errors
```

