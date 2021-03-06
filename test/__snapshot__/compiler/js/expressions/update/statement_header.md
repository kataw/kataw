# Kataw parser test case

## Input

`````js
if (--
a);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if (--\na);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 65715,
                    "operator": "--",
                    "operand": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "consequent": {
                    "kind": 6291526,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 10
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 10
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

