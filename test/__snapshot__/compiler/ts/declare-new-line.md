# Kataw parser test case

## Input

`````js
declare type
T = number
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare type\nT = number",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "type",
                    "rawText": "type",
                    "flags": 201326592,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 12
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "T",
                        "rawText": "T",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "number",
                        "rawText": "number",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 23
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 23
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

