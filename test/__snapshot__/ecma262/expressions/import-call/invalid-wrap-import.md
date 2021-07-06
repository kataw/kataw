# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
(import)(source)
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
                    "kind": 206,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 7
                    },
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "source",
                            "rawText": "source",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 15
                        },
                        "flags": 8,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": true,
    "source": "(import)(source)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 15, end: 16

```

