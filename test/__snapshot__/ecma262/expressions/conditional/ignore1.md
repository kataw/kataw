  # Kataw parser test case

## Input

`````js
// kataw-ignore
a
?  b
:                    c
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                    "text": "a",
                    "rawText": "a",
                    "flags": 67108961,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 17
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 45
                },
                "flags": 67108961,
                "transformFlags": 4096,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "// kataw-ignore\na\n?  b\n:                    c",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
// kataw-ignore
a
?  b
:                    c;
```

### Diagnostics

```javascript
✔ No errors
```

