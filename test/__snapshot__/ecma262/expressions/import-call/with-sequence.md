# Kataw parser test case

## Input

`````js
import((dummy, source))
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
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "dummy",
                                "rawText": "dummy",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13
                            },
                            {
                                "kind": 134299649,
                                "text": "source",
                                "rawText": "source",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 21
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 7,
                        "end": 22
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "import((dummy, source))",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
import((dummy, source));
```

### Diagnostics

```javascript
✔ No errors
```

