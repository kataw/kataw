# Kataw parser test case

## Input

`````js
obj?.0
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 4
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": ".0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "colonToken": null,
                "alternate": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 6
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "obj?.0",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 6

```

