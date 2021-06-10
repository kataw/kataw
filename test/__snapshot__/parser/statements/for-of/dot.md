# Kataw parser test case

## Input

`````js
for (async.x of y);
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
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 5,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 12
                },
                "flags": 536870944,
                "start": 5,
                "end": 12
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 18,
                "end": 19
            },
            "flags": 80,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (async.x of y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

for (async.x of y);
```

### Diagnostics

```javascript
✔ No errors
```

