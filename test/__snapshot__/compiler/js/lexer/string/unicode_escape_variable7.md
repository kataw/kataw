# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\u{1}"
;
"\u{12}"
;
"\u{123}"
;
"\u{1234}"
;
"\u{12345}"
;
"\u{103456}"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\u{1}\"\n;\n\"\\u{12}\"\n;\n\"\\u{123}\"\n;\n\"\\u{1234}\"\n;\n\"\\u{12345}\"\n;\n\"\\u{103456}\"",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "}",
                    "rawText": "}",
                    "flags": 2097152,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "\u0012",
                    "rawText": "\u0012",
                    "flags": 2113536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 20
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "@{x123}@",
                    "rawText": "@{x123}@",
                    "flags": 2113536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 20,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 32
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "@{x1234}@",
                    "rawText": "@{x1234}@",
                    "flags": 2113536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 32,
                    "end": 43
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 32,
                "end": 45
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "H@{x345}@",
                    "rawText": "H@{x345}@",
                    "flags": 2113536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 45,
                    "end": 57
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 45,
                "end": 59
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "@{x40d}@V",
                    "rawText": "@{x40d}@V",
                    "flags": 2113536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 59,
                    "end": 72
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 59,
                "end": 72
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 72
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

