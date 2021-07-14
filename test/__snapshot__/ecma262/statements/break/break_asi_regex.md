# Kataw parser test case

## Input

`````js
for (x of 3) break
/x/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "3",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 18
                },
                "label": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/x/",
                "rawText": "/x/",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for (x of 3) break\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
for (x of 3) break;
/x/;

```

### Diagnostics

```javascript
✔ No errors
```

