# Kataw parser test case

## Input

`````js
for (x of 3) continue
/x/g
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
                "kind": 172,
                "continueKeyword": {
                    "kind": 37757009,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 21
                },
                "label": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 21
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/x/g",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (x of 3) continue\n/x/g",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
for (x of 3) continue ;
/x/g;

```

### Diagnostics

```javascript
✔ No errors
```

