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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 6,
                "end": 9
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "3",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 172,
                "continueKeyword": {
                    "kind": 37757009,
                    "flags": 0,
                    "start": 12,
                    "end": 21
                },
                "label": null,
                "flags": 16,
                "start": 12,
                "end": 21
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 21,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 65,
                        "start": 21,
                        "end": 23
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 23,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 24,
                    "end": 25
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 25,
                    "end": 26
                },
                "flags": 32,
                "start": 21,
                "end": 26
            },
            "flags": 16,
            "start": 21,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (x of 3) continue\n/x/g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

for (x of 3)
  continue;
 / x / g;
```

### Diagnostics

```javascript
✖ Expression expected - start: 21, end: 23

```

