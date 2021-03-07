# Kataw parser test case

## Input

`````js
"\x9q"
;
"\x5"
;

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\x9q\"\n;\n\"\\x5\"\n;\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "q",
                    "rawText": "q",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "",
                    "rawText": "",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 16
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Hexadecimal digit expected",
            "start": 4,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Hexadecimal digit expected",
            "start": 13,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

