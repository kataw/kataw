# Kataw parser test case

## Options

`````js
{ impliedStrict: true }
`````

## Input

`````js
aw\u0061it: 1;
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
                "text": "await",
                "rawText": "aw\\u0061it",
                "flags": 16480,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 11,
                "end": 14
            },
            "flags": 16400,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "aw\\u0061it: 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
aw\u0061it:  1;
```

### Diagnostics

```javascript
✔ No errors
```

