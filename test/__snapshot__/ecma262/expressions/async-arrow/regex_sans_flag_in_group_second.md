# Kataw parser test case

## Input

`````js
async (x, /x/g) => x
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        {
                            "kind": 371,
                            "text": "/x/g",
                            "rawText": "/x/g",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "async (x, /x/g) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' is not allowed here. Did you mean ';'? - start: 15, end: 18

```

