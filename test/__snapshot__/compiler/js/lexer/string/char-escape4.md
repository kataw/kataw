# Kataw parser test case

## Input

`````js
"\r\n"
;
"prefix\r\n"
;
"\r\nsuffix"
;
"\rinfix\nsuffix"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\r\\n\"\n;\n\"prefix\\r\\n\"\n;\n\"\\r\\nsuffix\"\n;\n\"\\rinfix\\nsuffix\"",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "\r\n",
                    "rawText": "\r\n",
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
                    "text": "prefix\r\n",
                    "rawText": "prefix\r\n",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 23
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "\r\nsuffix",
                    "rawText": "\r\nsuffix",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 36
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 38
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "\rinfix\nsuffix",
                    "rawText": "\rinfix\nsuffix",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 56
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 38,
                "end": 56
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 56
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
