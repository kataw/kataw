# Kataw parser test case

## Input

`````js
// Comment 1
try { // Comment 2
  // Comment 3
}
// Comment 4
catch(e) { // Comment 5
  // Comment 6
}
// Comment 7
finally { // Comment 8
  // Comment 9
}
// Comment 10
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 16,
                "end": 48
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 67
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 69
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 72,
                        "end": 72
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 102
                },
                "flags": 81,
                "transformFlags": 0,
                "start": 48,
                "end": 102
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 65,
                "transformFlags": 0,
                "start": 102,
                "end": 123
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 125,
                    "end": 125
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 123,
                "end": 155
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 155
        }
    ],
    "isModule": false,
    "source": "// Comment 1\ntry { // Comment 2\n  // Comment 3\n}\n// Comment 4\ncatch(e) { // Comment 5\n  // Comment 6\n}\n// Comment 7\nfinally { // Comment 8\n  // Comment 9\n}\n// Comment 10",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 169
}
```

### Printed

```javascript

try {} catch (e) {} finally {}
```

### Diagnostics

```javascript
✔ No errors
```

