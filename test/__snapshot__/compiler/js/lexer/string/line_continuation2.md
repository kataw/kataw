# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\
"
;
"pre\
"
;
"\
post"
;
"pre\
post"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\\n\"\n;\n\"pre\\\n\"\n;\n\"\\\npost\"\n;\n\"pre\\\npost\"",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "",
                    "rawText": "",
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
                    "text": "pre",
                    "rawText": "pre",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 16
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "post",
                    "rawText": "post",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 27
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "prepost",
                    "rawText": "prepost",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 27,
                "end": 39
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 39
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

