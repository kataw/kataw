# Kataw parser test case

## Input

`````js
"\P"
;
"prefix\Q"
;
"\Rsuffix"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\P\"\n;\n\"prefix\\Q\"\n;\n\"\\Rsuffix\"",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "P",
                    "rawText": "P",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "prefixQ",
                    "rawText": "prefixQ",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 19
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "Rsuffix",
                    "rawText": "Rsuffix",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 19,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 30
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

