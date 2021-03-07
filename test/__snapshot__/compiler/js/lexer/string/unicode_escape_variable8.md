# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
"\u{10ffff}"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\u{10ffff}\"",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "@{x43f}@@{x3ff}@",
                    "rawText": "@{x43f}@@{x3ff}@",
                    "flags": 2097152,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 12
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

